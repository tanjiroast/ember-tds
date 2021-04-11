# Introduction : Store

Ce projet emberJs peut permettre à des employés d'un magasin de le gérer.

## Outils

Pour faire le store, j'ai eu besoin d'utiliser plusieurs outils.
Voici une liste de ceux-ci:
* EmberJs (évidemment)
* Le logiciel webStorm ainsi que PHPStorm pour l'api
* XAMPP pour le serveur SQL (en activant Apache et MySQL)
* Une base de données donnée par le professeur à importer dans phpMyAdmin
* Composer pour avoir accès à des ressources plus qu'utiles
* Bootstrap pour le style, mais aussi Semantic UI pour styliser mon interface

## Store-api
J'ai utilisé une API pour pouvoir utiliser les informations émises de la page web et qui renvoi ce résultat.
Je ne l'ai pas mise sur mon dépot git. Mais voici de l'aide pour la créer : https://slamwiki2.kobject.net/frontoffice/emberjs/td6-api

## EmberJs

EmberJs est un framework JavaScript comme l'indique son nom. Il est gratuit et est très utile pour créer des applications
web. Il se traduit sous la forme  MODELE-VUE-CONTROLLER.

### Les routes

Les routes permettent de rediriger l'utilisateur de l'application vers d'autres pages. Par exemple, la route AbstractRoute nous rediriger vers l'index (connexion)

Les différentes routes sont :

* AbstractRoute 
* board
* index
* logout
* order
* products
* section

Les pages sont donc accessibles par ces routes.

** La page de connexion est gérée par index.js

### Les models

Grâce aux models, je peux choisir ce que je veux afficher dans mes pages. Voici la liste des models qui contiennent chacun différents attributs :
* Employee
* Order 
* OrderDetail
* Product
* Section
* Timeslot 
* User

## Utiliser EmberJs

Pour commencer, pour démarrer notre serveur, il faut faire la commande :
* `ember serve`
Rien ne s'affichera pour commencer (sauf la page de bienvenue).
  gi 
