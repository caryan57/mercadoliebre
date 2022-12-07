let express = require('express');
let path = require('path');

let app = express();

app.listen('3000', console.log('Servidor en http://localhost:3000'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './src/views/home.html'));
});
