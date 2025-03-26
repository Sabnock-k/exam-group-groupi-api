const express = require('express');
const app = express();
const port = 3000;

// Import routes
const examGroupRoute = require('./routes/exam-group');
const getExamsRoute = require('./routes/addget');  
const postExamsRoute = require('./routes/addpost');  

// Middleware to parse JSON
app.use(express.json());

// Use the routes
app.use('/api', examGroupRoute);
app.use('/api', getExamsRoute);
app.use('/api', postExamsRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
