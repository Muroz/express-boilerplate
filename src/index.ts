import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';

import swaggerDocument from './openAPI/swagger';

const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
