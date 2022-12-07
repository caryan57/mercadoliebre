let express = require('express');
let path = require('path');

let app = express();

app.listen('3000', console.log('Servidor en http://localhost:3000'));

app.use(express.static('public'));

//Declarar ubicacion de las vistas
app.set('views', path.resolve(__dirname, 'src/views'));

app.get('/', (req, res) => {
  return res.sendFile(app.get('views') + '/home.html');
});
