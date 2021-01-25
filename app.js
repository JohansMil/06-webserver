console.log(`Inicia App webserver`);

// Importamos libreria HTTP que nos permite crearINSTANCIA servidor web
const http = require('http');

http.createServer((req, res) => {


        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Fernando',
            edad: 32,
            url: req.url
        }

        res.write(JSON.stringify(salida));

        //res.write('Final de programa');
        res.end();

    })
    .listen(8080);

console.log('Escuchando el puerto 8080');