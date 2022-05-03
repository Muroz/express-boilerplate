import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
