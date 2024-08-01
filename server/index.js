import express from 'express'
// import * as dotenv from 'dotenv'
import dotenv from 'dotenv';
import cors from 'cors'
import connectDB from './db/connect.js';

dotenv.config();
const port = 3000
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
      res.send('hello')
})

const startServer = async () => {

      try {
            const mongoURL = process.env.MONGODB_URL;
            if (!mongoURL) {
                  console.error('MONGODB_URL is not defined in the environment variables');
                  process.exit(1);
            }
            connectDB(mongoURL);
            app.listen(port, () => {
                  console.log(`Server is running on port ${port}`)
            })
      } catch (error) {
            console.log(error);
      }

}

startServer();
