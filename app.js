const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');

const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/winterwear', (req, res) => {
  res.render('site/winterwear')
})

app.get('/glasseslens', (req, res) => {
  res.render('site/glasseslens')
})

app.get('/shortsjeans', (req, res) => {
  res.render('site/shortsjeans')
})

app.get('/profile', (req,res) =>{
  res.render('site/profile')
})

app.get('/wishlist', (req,res) =>{
  res.render('site/wishlist')
})

app.get('/cart', (req,res) =>{
  res.render('site/cart')
})

app.listen(3000, () => {
  console.log('Serving on port 3000')
})

