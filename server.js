// Inclusion du module 'dotenv' pour gérer les variables d'environnement
require('dotenv').config({path:'./.env'});

// Définition du n° de port sur lequel le serveur va écouter
// (ce sera la valeur système process.env.PORT si elle existe, 3000 sinon)
const port = process.env.PORT || 3000

// Inclusion du module prédéfini de Node.js permettant d'exécuter un serveur http
const http = require('http')

// Ce serveur très simple reverra toujours la même réponse :
// - un code http 200
// - un header spécifiant l'encodage de la réponse
// - le message "Le serveur Node.js dit <b>bonjour</b>"
const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end("Le serveur Node.js dit <b>bonjour</b>")
})

// Démarrage de l'écoute des requêtes sur le port indiqué
server.listen(port,()=>{
    console.log(`Le server écoute sur http://127.0.0.1:${port}/`);
})