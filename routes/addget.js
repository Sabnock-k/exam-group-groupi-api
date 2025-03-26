
const express = require('express');
const router = express.Router();

// Hardcoded list of users (for example, exams)
const list = [
  { id: 1, name: "Rafael" },
  { id: 2, name: "Damien" },
  { id: 3, name: "Stanley" },
  { id: 4, name: "John" }

];

// Define the /exams route
router.get('/addget', (req, res) => {
  res.json(list);
});

module.exports = router;
