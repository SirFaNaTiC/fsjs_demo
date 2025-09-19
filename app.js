// Inclusion du module 'express' pour créer le serveur web
const express = require('express');

// Création de l'application Express
const app = express();

// app.use((req, res,next) => {
//     const now = new Date().toDateString();
//     console.log(`${now} : une requête ${req.method} est arrivée`);
//     next(); // passe la main au middleware suivant     
// });

// app.get("/", (req, res) => {
//     res.send("<h1>Welcome to my world</h1>");
// });

// app.get('/about', (req, res) => {
//     res.send("<h1>This is sparte</h1>");
// });

// app.get("/*path", (req, res) => {
//     res.send('<p>... je ne sais pas quoi dire...</p>');
// });

module.exports = app;


//De l'intro jusqu'au EJS inclu
// Inclusion du module 'path' pour gérer les chemins de fichiers
const path = require('path');
// // Configuration de l'application : une première gestion "basique" des requêtes.
// // app.use((req,res)=>{
// //     res.status(200);
// //     res.setHeader('Content-Type','text/html;charset=utf-8');
// //     res.end("Le serveur Express dit <b>bonjour</b>"); 
// // });

// Servir des fichiers statiques (CSS, images, JS côté client, etc.)
// Le dossier 'public' est utilisé pour servir les fichiers statiques
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs'); // moteur de template
app.set('views', path.join(__dirname,'views')); // dossier des vues

//EJS
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout','./layouts/layout'); // layout par défaut

// //Middleware
// // 1er middleware : ex. d'affichage d'informations dans la console
// app.use((req,res,next)=>{
//     const now = new Date().toDateString();
//     console.log(`${now} : une requête ${req.method} est arrivée`);
//     next(); // passe la main au middleware suivant
// });

// // 2ème middleware : préparation de la réponse
// app.use((req,res,next)=>{
//     res.status(200);
//     res.setHeader('Content-Type','text/html;charset=utf-8');
//     next(); // passe la main au middleware suivant
// });

// // 3ème middleware : envoi de la réponse
// app.use ((req,res)=>{
//     // exemple du middleware qui envoie la réponse
//     // res.end("Le serveur Express dit <b>bonjour</b>");

//     // Renvoyer un fichier HTML statique
//     res.sendFile(path.join(__dirname, 'public', 'pages', 'index.html'));
// });

// Routeur pour la page d'accueil
app.use((req,res)=>{
    res.render('pages/home',{user: {sex:'', nickname: ''}});
});

// Export de l'application pour qu'elle puisse être utilisée par d'autres modules
module.exports = app;