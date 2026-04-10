const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    team: { type: String, required: true },
    role: { type: String, required: true },
    points: { type: Number, default: 0 },
    isCaptain: { type: Boolean, default: false },
    isViceCaptain: { type: Boolean, default: false }
});

module.exports = mongoose.model('Player', playerSchema);