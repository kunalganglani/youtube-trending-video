import 'babel-polyfill';
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import sassMiddleware from 'node-sass-middleware';
import indexRouter from './routes/index';
import youtubeRouter from './routes/youtube';
// error handler for routes defined and exported seperately
import { errorHandler } from './middleware/error-handler';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
const compression = require('compression'); // Required Dependency for GZIP Compression to load page faster
app.use(compression()); //use compression 
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true,
  debug: true,
  outputStyle: 'compressed'
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap-select/dist/js')); // Added Bootstrap Select Dependency JS for select country with filter
app.use('/css', express.static(__dirname + '/node_modules/bootstrap-select/dist/css'));  // CSS for Bootstrap Select Dependency 

app.use('/', indexRouter);
app.use('/youtube', youtubeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler used by app
app.use(errorHandler);

module.exports = app;
