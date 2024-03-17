const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('./db');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

// Use express-session middleware
app.use(session({
 secret: 'your_secret_key',
 resave: false,
 saveUninitialized: true,
 cookie: { secure: false } // Set to true if using HTTPS
}));

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.get(`SELECT * FROM users WHERE username = ? AND password = ?`, [username, password], (err, row) => {
        if (err) {
            console.error(err.message);
        }
        if (row) {
            // User found, store username in session and redirect to main page
            req.session.username = username;
            res.redirect('/main');
        } else {
            // User not found, redirect back to login
            res.redirect('/login');
        }
    });
});

app.get('/main', (req, res) => {
    // Retrieve username from session
    const username = req.session.username;
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
            console.error(err.message);
        }
        // Pass the username to the main page
        res.render('main', { users: rows, username: username });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
