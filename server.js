const express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  config = require('./database/db');
// env = require('./env');


// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://shift:!QAZ2wsx@ds048279.mlab.com:48279/shifts2020", {
  useMongoClient: true,
}, (err) => {
  // Check if database was able to connect
  if (err) {
    console.log('Could NOT connect to database: ', err); // Return error message
  } else {
    console.log('Connected to ' + config.uri); // Return success message
  }
});

// Setting up port with express js

const userRoutes = require("./routes/user");
const shiftsRoutes = require("./routes/shifts");
const weeksRoutes = require("./routes/weeks");
const sidurRoutes = require("./routes/sidur");
const app = express();

app.use(cors({
  origin: 'http://localhost:4200'
})); // Allows cross origin in development only
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PATCH, PUT, DELETE, OPTIONS"
//   );
//   next();
// });

app.use(cors());
app.use(express.static(path.join(__dirname, './public')));
// app.use('*', express.static(path.join(__dirname, 'public/index.html')));

// Connect server to Angular 9 Index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.use("/api/user", userRoutes);
app.use("/api/shifts", shiftsRoutes);
app.use("/api/weeks", weeksRoutes);
app.use("/api/sidur", sidurRoutes);

// Create port
const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log('Connected to port ' + 'Listening on port ' + port + ' in ' + process.env.NODE_ENV + ' mode');
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});
