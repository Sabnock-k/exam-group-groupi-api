const express = require('express');
const router = express.Router();

// Shared list
const list = [
  { id: 1, name: "Rafael" },
  { id: 2, name: "Damien" },
  { id: 3, name: "Stanley" },
  { id: 4, name: "John" }
];

// POST /exams - Add a new exam
router.post('/exams', (req, res) => {
  const { name } = req.body;
  
  if (!name) {
    return res.status(400).json({ message: 'Name is required.' });
  }
  
  const newExam = {
    id: list.length + 1,
    name
  };
  
  list.push(newExam);
  res.status(201).json(newExam);
});

module.exports = router;
