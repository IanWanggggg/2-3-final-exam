const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/',function(req,res){
  res.render('home')
})

app.get('/about', function (req, res) {
  res.render('about')
})

app.get('/portfolio', function (req, res) {
  res.render('portfolio')
})

app.get('/contact', function (req, res) {
  res.render('contact')
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})