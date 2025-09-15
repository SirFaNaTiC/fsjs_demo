// Inclusion du module 'dotenv' pour gérer les variables d'environnement
require('dotenv').config({path:'./.env'});

// Définition du n° de port sur lequel le serveur va écouter
// (ce sera la valeur système process.env.PORT si elle existe, 3000 sinon)
const port = process.env.PORT || 3000

// Inclusion du module prédéfini de Node.js permettant d'exécuter un serveur http
const http = require('http')
// Inclusion de l'application Express
const app = require('./app');

// Création du serveur http avec gestion "basique" des requêtes
// const server = http.createServer((req, res) =>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html;charset=utf-8');
//     res.end("Le serveur Node.js dit <b>bonjour</b>")
// });

const server = http.createServer(app);

// Démarrage de l'écoute des requêtes sur le port indiqué
server.listen(port,()=>{
    console.log(`Le server écoute sur http://127.0.0.1:${port}/`);
})