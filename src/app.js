const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const controllers = require('./controllers/index.js');
const helpers = require('./views/helpers/index.js');
const favicon = require('serve-favicon');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  handlebars({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers
  })
);
app.set('port', process.env.PORT || 6060);
app.set('host', process.env.HOST || 'localhost');
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);

module.exports = app;