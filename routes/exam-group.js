const express = require('express');
const router = express.Router();

// Define the placeholder route
router.get('/exam-group', (req, res) => {
  const groupName = "groupi";  // Replace with your group name or use an environment variable
  res.json({ message: `Group ${groupName} API` });
});



module.exports = router;