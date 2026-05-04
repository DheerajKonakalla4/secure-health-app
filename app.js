const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// 🔐 Security middleware
app.use(helmet());
app.use(express.json());

// 🚫 Rate limiting (prevent attacks)
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 20
});
app.use(limiter);

// Serve frontend
app.use(express.static('public'));

// API endpoint
app.get('/api/patient', (req, res) => {
  res.json({
    id: "P-1023",
    name: "John Doe",
    status: "Stable",
    lastCheck: "2026-05-05"
  });
});

app.listen(4000, () => console.log("Secure Health App running on port 4000"));