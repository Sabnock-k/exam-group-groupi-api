const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// Middleware to parse request body
app.use(bodyParser.json());

// Hardcoded list of users (for example, exams)
const list = [
  { id: 1, name: "Rafael" },
  { id: 2, name: "Damien" },
  { id: 3, name: "Stanley" },
  { id: 4, name: "John" }
];

// GET /addget - Retrieve the list of exams
router.get('/addget', (req, res) => {
  res.json(list);
});

// POST /addpost - Add a new exam
router.post('/addpost', (req, res) => {
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

// PUT /addput/:id - Update an existing exam
router.put('/addput/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const examIndex = list.findIndex(exam => exam.id === parseInt(id));
  
  if (examIndex === -1) {
    return res.status(404).json({ message: 'Exam not found.' });
  }
  
  if (!name) {
    return res.status(400).json({ message: 'Name is required.' });
  }
  
  list[examIndex].name = name;
  res.json(list[examIndex]);
});

// Use the router
app.use('/exams', router);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
