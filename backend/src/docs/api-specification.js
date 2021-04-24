import { resolve } from 'path';
import config from '../config/index';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'FlixFlex',
      version: '1.0.0',
      description:
            'Making cinema booking easy and convenient.',
      license: {
        name: 'MIT',
        url: 'https://choosealicense.com/licenses/mit/'
      },
      contact: {
        name: 'Bonvic',
        url: 'https://bonvich.me'
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
      // {
      //   url: 'https://bonvich.me',
      //   description: 'Production Server'
      // },
      // {
      //   url: 'https://bonvich.me',
      //   description: 'Staging Server'
      // },
      {
        url: `http://localhost:${config.PORT}/api/v1`,
        description: 'Local Host'
      }
    ]
  },
  apis: [
    resolve(__dirname, './resources/*.yaml'),
    resolve(__dirname, '../routes/*.js')
  ]
};

export default options;
