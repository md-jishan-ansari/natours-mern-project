const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
// const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const rateLimit = require('express-rate-limit');
// const helmet = require('helmet');
// const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
// const hpp = require('hpp');
const cors = require('cors');
// const cookieParser = require('cookie-parser');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
// const viewRouter = require('./routes/viewRoutes');

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });

const app = express();

// app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public'))); // app.use(express.static(`${__dirname}/public`));

app.use(express.json({ limit: '10kb', extended: true })); // if body is larger than 10kb than not accepted
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// 1) GLOBAL MIDDLEWARES

// Serving static files

// Set security HTTP headers
// app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same API
// const limiter = rateLimit({
//   max: 100,
//   windowMs: 60 * 60 * 1000,
//   message: 'Too many requests from this IP, please try again in an hour!'
// });
// app.use('/api', limiter);

// Body parser, reading data from body into req.body
// app.use(cookieParser());

// Data sanitization against NoSQL query injection
// app.use(mongoSanitize());

// Data sanitization against XSS
// app.use(xss());

// Prevent parameter pollution
// app.use(
//   hpp({
//     whitelist: [
//       'duration',
//       'ratingsQuantity',
//       'ratingsAverage',
//       'maxGroupSize',
//       'difficulty',
//       'price'
//     ]
//   })
// );

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});



// 3) ROUTES

// app.use('/', viewRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});


module.exports = app;