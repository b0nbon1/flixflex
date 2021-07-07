import swaggerJsdoc from 'swagger-jsdoc';
import express from 'express';
import { serve, setup } from 'swagger-ui-express';
import { join } from 'path';

import swaggerDefinition from '../docs/api-specification';
import movie from './movies';

const specs = swaggerJsdoc(swaggerDefinition);
const router = express.Router();
// eslint-disable-next-line no-unused-vars
const prefix = '/api/v1';
const apiDocs = '/api/docs';
const specsConfig = setup(specs, {
  explorer: false,
  customeSiteTitle: 'FlixFlex'
});

router.use(apiDocs, serve);
router.use(apiDocs, specsConfig);
router.use(prefix, movie);
router.use('/posters', express.static(join(__dirname, '../../public/movies_posters')));

export default router;
