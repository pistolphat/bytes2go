const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || '3000';

// Imports, app variable, and app instance
// App.set(name, value) method assigns name to a value
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

// Route Controllers
// Simple GET Http Request to root path, method render() index page (filepath) template as client response.
// Method render() optional argument, Object to define the {title} variable within Index.pug template.
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/user', (req, res) => {
  res.render('user', {
    title: 'Profile',
    userProfile: { nickname: 'Jim Carrey' }
  });
});

// Setup to listen on specify port
app.listen(port, () => {
  console.log(`Listening to requests on localhost:${port}`);
});
