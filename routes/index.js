const bodyParser = require('body-parser');
const pessoasRouter = require('./pessoasRoute');

module.exports = app => {
    app.use(bodyParser);
    app.use('/pessoas', pessoasRouter);
    app.get('/', (req, res) => res.send('ola mundo'));
}