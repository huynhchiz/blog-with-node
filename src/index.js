const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

// config static files
app.use(express.static(path.join(__dirname, 'public')));

// middleware
app.use(
   express.urlencoded({
      extended: true,
   }),
); // dùng cho html
app.use(express.json()); // dùng cho XML, các thư viện axios, fetch (gửi từ code JS)

// HTTP logger
// app.use(morgan('combined'))

// Teplate engine handlebars
app.engine(
   '.hbs',
   handlebars.engine({
      extname: '.hbs',
   }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
   res.render('home');
});

app.get('/news', (req, res) => {
   res.render('news');
});

app.get('/search', (req, res) => {
   res.render('search');
});

app.post('/search', (req, res) => {
   console.log(req.body);
   res.send('');
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
