const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 6969;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// Ensure that the required routers are exported correctly from these files
const exercisesRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

// Use the routers for their respective routes
app.use('/exercises', exercisesRouter);
app.use('/users', userRouter); // Corrected the route path

// Start the server and use backticks for template literals
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
