// Create web server
// 1. Load express module
const express = require('express');
// 2. Create web server
const app = express();
// 3. Register route
app.get('/', (req, res) => {
  res.send('Hello, Express');
});
// 4. Bind port
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');

