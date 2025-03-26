const express = require('express');
const app = express();
const port = 3000;

// Import routes
const examGroupRoute = require('./routes/exam-group');
const examsRoute = require('./routes/addget');  // New exams route

// Use the routes
app.use('/api', examGroupRoute);  // Existing examGroup route
app.use('/api', examsRoute);      // New exams route

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
