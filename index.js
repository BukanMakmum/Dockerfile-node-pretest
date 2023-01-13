const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('<h1><center>Ini adalah contoh aplikasi sederhana pretest SIAT DEV tahun 2023!<center></h1>');
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');

});
