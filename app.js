const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Hardcoded list of users (for example, exams)
const list = [
  { id: 1, name: "Rafael" },
  { id: 2, name: "Damien" },
  { id: 3, name: "Stanley" },
  { id: 4, name: "John" }
];

// Define the /exams route group
const router = express.Router();

// GET /api/exams - Retrieve the list of exams
router.get('/', (req, res) => {
  res.json(list);
});

// POST /api/exams - Add a new exam
router.post('/', (req, res) => {
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

// PUT /api/exams/:id - Update an existing exam
router.put('/:id', (req, res) => {
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

// Use the /api/exams route
app.use('/api/exams', router);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
