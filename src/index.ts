import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());

app.get('/health', (req, res) => {
  const data = {
    uptime: process.uptime(),
    message: 'Ok',
    date: new Date(),
  };

  res.status(200).json(data);
});

app.get('*', (req, res) => {
  res.status(404).json('Not found');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
