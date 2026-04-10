# IPL Fantasy Project Structure

## Frontend (React)
- `frontend/`
  - `public/`
    - `index.html`
    - `favicon.ico`
  - `src/`
    - `components/`
      - `PlayerCard.js`
      - `TeamSelection.js`
    - `pages/`
      - `Home.js`
      - `League.js`
    - `App.js`
    - `index.js`
  - `package.json`
  - `.env.example`

## Backend (Node.js)
- `backend/`
  - `controllers/`
    - `leagueController.js`
    - `playerController.js`
  - `models/`
    - `League.js`
    - `Player.js`
  - `routes/`
    - `leagueRoutes.js`
    - `playerRoutes.js`
  - `config/`
    - `db.js`
  - `server.js`
  - `package.json`
  - `.env.example`

## Database Schemas
- `models/League.js`
```javascript
const mongoose = require('mongoose');

const leagueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('League', leagueSchema);
```  
- `models/Player.js`
```javascript
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  team: { type: String, required: true },
  points: { type: Number, default: 0 }
});

module.exports = mongoose.model('Player', playerSchema);
```