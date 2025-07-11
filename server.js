const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRoutes = require('./authRoutes');
const authMiddleware = require('./middleware/authMiddleware');

require('dotenv').config();
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/', authRoutes);

app.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: `Welcome, ${req.user.username}` });
});

app.listen(5000, () => console.log('Server running on port 5000'));
