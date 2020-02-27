const { resolve } = require('path');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Kencinema',
      version: '0.0.1',
      description:
            'Making cinema halls easy and convenient.',
      license: {
        name: 'MIT',
        url: 'https://choosealicense.com/licenses/mit/'
      },
      contact: {
        name: 'Kencinema',
        url: 'https://kencinema.com'
      }
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [{
      bearerAuth: []
    }],
    servers: [
      {
        url: '',
        description: 'Production Server'
      },
      {
        url: '',
        description: 'Staging Server'
      },
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Local Host'
      }
    ]
  },
  apis: [
    resolve(__dirname, '../index.js')
  ]
};

module.exports = options;
