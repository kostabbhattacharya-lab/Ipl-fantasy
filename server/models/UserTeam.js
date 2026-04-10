const mongoose = require('mongoose');

const userTeamSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    matchId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Match'
    },
    selectedPlayers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    }],
    captain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    },
    viceCaptain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    },
    totalPoints: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const UserTeam = mongoose.model('UserTeam', userTeamSchema);

module.exports = UserTeam;