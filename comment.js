// Create Web Server
// Create Web Server
// 1. npm install express
// 2. npm install body-parser
// 3. npm install cors
// 4. npm install nodemon
// 5. npm install mongoose
// 6. npm install dotenv

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected!'))
  .catch((error) => console.log('MongoDB connection error!', error));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const commentRoutes = require('./routes/comment');
app.use('/api/comments', commentRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Comment API');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});