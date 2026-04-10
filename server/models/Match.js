'use strict';

const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  matchId: { type: String, required: true },
  team1: { type: String, required: true },
  team2: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['upcoming', 'in-progress', 'completed'], required: true },
  players: { type: [String], required: true }
});

module.exports = mongoose.model('Match', matchSchema);