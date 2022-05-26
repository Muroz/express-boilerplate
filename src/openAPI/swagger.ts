import health from './health.swagger';

const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'Express Boilerplate',
    description: 'Express server with basic configuration setup',
    termsOfService: '',
    contact: {
      name: 'Diego Zuluaga',
      email: 'diego@zuluaga.io',
    },
  },
  tags: [
    {
      name: 'Health',
    },
  ],
  paths: {
    '/health': {
      get: health,
    },
  },
};

export default swaggerDocument;
