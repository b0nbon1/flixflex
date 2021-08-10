import express from 'express';
import { join } from 'path';

import movie from './movies';

const router = express.Router();
// eslint-disable-next-line no-unused-vars
const prefix = '/api/v1';

router.use(prefix, movie);
router.use('/posters', express.static(join(__dirname, '../../public/movies_posters')));

export default router;
