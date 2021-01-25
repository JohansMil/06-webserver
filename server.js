const express = require('express');
const app = express();

const hbs = require('hbs');
// helpers
require('./hbs/helpers');

// Escucha el puerto de HEROKU, sino asigna el 3000
const port = process.env.PORT || 3000;



// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales', function(err) {});
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'jOaN sOBREperA miLLET'
    });

});

app.get('/about', (req, res) => {

    res.render('about', {

    });

});
// middelware
app.use(express.static(__dirname + '/public'));


app.listen(port, () => {
    console.log(`Escuchando peticiones en puerto ${ port }`);
});