const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOption = require('./docs/api-specification');

const app = express();

const specs = swaggerJsdoc(swaggerOption);

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(specs, { explorer: true }));

/**
 * @swagger
 *
 * /:
 *    get:
 *      summary: Demo swagger docs
 *      tags: [demo]
 *      requestBody:
 *        required: true
 *      responses:
 *        "200":
 *          successfully demoed
 */
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to kencinema'
  });
});
app.listen(process.env.PORT || 3000, () => console.log('Kencinema listening on port 3000!')
);

export default app;
