const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ipl-fantasy', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.log('MongoDB connection error:', err);
  });

const matchRoutes = require('./routes/matchRoutes');
const playerRoutes = require('./routes/playerRoutes');
const userTeamRoutes = require('./routes/userTeamRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/matches', matchRoutes);
app.use('/api/players', playerRoutes);
app.use('/api/userteams', userTeamRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'IPL Fantasy API is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;