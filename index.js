const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get('/teste', (req, res) => res.status(200).send({mensagem: 'boas vindas a API'}));

routes(app);

app.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = app;
