const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// GET home page — always pass formData (empty object by default)
app.get('/', (req, res) => {
  res.render('index', { formData: {}, error: null });
});

// POST calculate route
app.post('/calculate', (req, res) => {
  const { name, age, university, roll, semester, cgpas } = req.body;
  const semesterCount = parseInt(semester, 10);
  const cgpaArray = cgpas.split(',').map(c => parseFloat(c.trim()));

  if (cgpaArray.length !== semesterCount) {
    return res.render('index', {
      error: "Number of CGPAs entered does not match semester count.",
      formData: req.body,
    });
  }

  const totalCgpa = cgpaArray.reduce((acc, val) => acc + val, 0);
  const averageCgpa = totalCgpa / semesterCount;

  res.render('result', {
    name,
    age,
    university,
    roll,
    semester: semesterCount,
    averageCgpa: averageCgpa.toFixed(2),
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
