// Inclusion du module 'express' pour créer le serveur web
const express = require('express');

// Création de l'application Express
const app = express();

// Configuration de l'application : une première gestion "basique" des requêtes.
// app.use((req,res)=>{
//     res.status(200);
//     res.setHeader('Content-Type','text/html;charset=utf-8');
//     res.end("Le serveur Express dit <b>bonjour</b>"); 
// });

//Middleware
// 1er middleware : ex. d'affichage d'informations dans la console
app.use((req,res,next)=>{
    const now = new Date().toDateString();
    console.log(`${now} : une requête ${req.method} est arrivée`);
    next(); // passe la main au middleware suivant
});

// 2ème middleware : préparation de la réponse
app.use((req,res,next)=>{
    res.status(200);
    res.setHeader('Content-Type','text/html;charset=utf-8');
    next(); // passe la main au middleware suivant
});

// 3ème middleware : envoi de la réponse
app.use ((req,res)=>{
    res.end("Le serveur Express dit <b>bonjour</b>");
});

// Export de l'application pour qu'elle puisse être utilisée par d'autres modules
module.exports = app;