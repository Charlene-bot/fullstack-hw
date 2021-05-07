const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const static = require('node-static');
const file = new static.Server('./public');


// Add your code here
app.use(express.urlencoded({ extended: true, }));

app.get('/', (req, res) => {
  // Add your code here
  file.serve(req, res);
});

app.post('/submit', (req, res) => {
  console.log(req.body);
  res.write(`<p>Name: ${req.body.name}</p>`);
  res.write(`<p>Email: ${req.body.email}</p>`);
  let comment = (req.body.comment === '') ? 'n/a' : req.body.comment; 
  res.write(`<p>Comment: ${comment}</p>`);
  let checkbox1 = (req.body.signup) ? 'Yes, sign me up for the newsletter' : 'No, Thank you.';
  res.write(`<p>Newsletter: ${checkbox1}</p>`);
  res.end(); 
});
  

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
