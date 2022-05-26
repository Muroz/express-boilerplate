const healthCheck = {
  tags: ['Health'],
  description: 'Returns a 200 and uptime information is the server is healthy',
  operationId: 'health',
  responses: {
    200: {
      description: 'Healthy Server',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                example: 'Ok',
              },
              uptime: {
                type: 'number',
                example: process.uptime(),
              },
              date: {
                type: 'date',
                example: new Date(),
              },
            },
          },
        },
      },
    },
  },
};

export default healthCheck;
