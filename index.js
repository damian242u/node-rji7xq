const express = require('express');
const app = express();

//ports
app.get('/', (req, res) => {
  res.redirect('/home');
});
app.use('/home', express.static('public/home'));

app.listen(3000);
