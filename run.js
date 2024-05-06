const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // EJS templates directory

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Render 'index.ejs' at the root URL
app.get('/', (req, res) => {
    res.render('index1');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
