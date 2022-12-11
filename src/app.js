let express = require('express');
let path = require('path');
require('dotenv').config();

let app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log('Servidor en http://localhost:' + PORT));

app.use(express.static('public'));

//Declarar ubicacion de las vistas
app.set('views', path.resolve(__dirname, 'views'));

app.get('/', (req, res) => {
  return res.sendFile(app.get('views') + '/home.html');
});

app.get('/register', (req, res) => {
  return res.sendFile(app.get('views') + '/register.html');
});

app.get('/login', (req, res) => {
  return res.sendFile(app.get('views') + '/login.html');
});
