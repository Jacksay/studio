% VUEJS 2.0
% Webapp partie 1
% Stéphane Bouvry

# Débuter avec VueJS 2.0

## Installation

L'installation de **VUEJS** se fait de façon classique :

En utilisant NPM :
```bash
npm install vue
```

En utilisant le gestionnaire de dépendances [Bower](https://bower.io/) :
```bash
bower install vue
```

En téléchargeant les fichiers depuis le [Site officiel VUEJS](https://vuejs.org/)

Ou en utilisant un CDN <https://unpkg.com/vue> ou <https://cdn.jsdelivr.net/npm/vue>.


## Premiers pas

L'intégration peut se faire en utilisant la balise `<script>` :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Hello World avec VUEJS</title>
</head>
<body>
  <div id="application">
    <h1>{{ message }}</h1>
  </div>
  <script src="https://unpkg.com/vue"></script>
  <script>
  new Vue({
    el: "#application",
    data: {
      message: "Bonjour monde !"
    }
  })
  </script>
</body>
</html>
```

> L'utilitaire en ligne de commande **vue-cli** permet d'automatiser l'intégration d'une application *standalone*.

# Accès aux données

## La clef data
L'accès aux données se fait via l'**instance de Vue** que l'on cré en invoquant `new Vue(...)`. Les données gérées par la vue sont référencées dans la clef `data`:

```html
<!-- le template -->
<div id="application">
   <article>
      <h1>{{ titre }}</h1>
      <p>{{ description }}</p>
   </article>
</div>   
```

```js
let instance = new Vue({
   el: "#application",
   // Données de la vue
   data: {
      titre: "Mon titre",
      description: "Ma description"
   }
})
```

Lors de l'instanciation de l'instance de Vue, toutes les valeurs placées dans `data` vont être rendu **réactives**, ainsi, dès qu'un accès les modifie, le processus de rendu se déclenche.

><i>TEST</i>Si vous ne déclarez pas un champ dans `data` avant de l'utiliser, Vue émettra un *warning* dans la console.

Vous pouvez également accèder à une propriété réactive *depuis l'extérieur*.

```js
// Déclenche le rendu
instance.titre = "Nouvelle valeur";
```

## Objet data

Rien n'impose de gérer les données directement dans l'instance de Vue. Les données peuvent être gérées dans une objet séparé, dans ce cas, le système réactif de vue fonctionnera de la même façon.

```js
// La variable "donnees" sera réactive
let donnees = {
   titre: "Titre",
   description: "Descrition"
};

let instance = new Vue({
   data: donnees,
   el: "#application"
})

// Actualise le rendu
donnees.titre = "Nouveau titre";
```

## Instance de données

On peut également utiliser un objet instancié si l'on souhaite gérer plus finement les données de l'application :

```js
// Classe pour gérer les données
class AppData {
   constructor(){
      this.titre = "Titre";
      this.descrition = "Description";
   }
   get extra(){
      return "Extra " + this.titre;
   }
}

// Instance des données
const donnees = new AppData();

// Vue
let vue = new Vue({
   data: donnees,
   el: "#application"
})
```

# Cycle de vie


# Template

## la clef template


Dans l'exemple précédent, le *template* est directement défini dans l'élément cible `#application`. Ce choix, même si il fonctionne parfaitement n'est pas idéal car le contenu de ce template peut être visibel *en l'état* si l'instance de vue met du temps à être montée.

Un alternative consite à utiliser une clef `template` directement dans l'instance **VueJS** :

```html
<!-- La partie HTML deviens une simple cible -->
<div id="application"><div>
```

```js
new Vue({
 el: "#application",
 // Le template est définit ici
 template: `<h1>{{ message }}</h1>`,
 data: {
   message: "Bonjour monde !"
 }
})
```

<div class="info">
les templates définit dans des chaînes de caractère vont être compliés par VueJS en code Javascript *à la volée*. Il est également possible de produire le code Javascript à la main avec la méthode `render()`
</div>

## render

La méthode `render(ce)` est une alternative à la clef `template` qui permet d'écrire soit même la méthode de rendu.

```js
new Vue({
 el: "#application",
 render: function( createElement ){
   return createElement('h'+this.niveau, this.message);
 },
 data: {
   niveau: 1,
   message: "Bonjour monde !"
 }
})
```

Dans certains cas (comme dans l'exemple ci-dessus), la méthode `render()` est plus économe à mettre en place.

## Vue.compile()

En interne, les *template* qui se présentent sous la forme de chaînes sont compilés avec la méthode `compile(str)` de la classe `Vue` :

```js

new Vue({
 el: "#application",
 render: Vue.compile('<h1>{{ message}}</h1>').render,
 data: {
   message: "Bonjour monde !"
 }
})
```

Les mécanismes de type [server side renderer](https://fr.vuejs.org/v2/guide/ssr.html) s'appuient sur ce principe. Si les performances de l'application sont centrale, ces fonctionnalités sont à utiliser dès le début du projet pour éviter d'avoir à faire une migration longue est laborieuse.

<div class="info">
C'est la méthode utilisée par les composants précopilé de l'utilitaire **vue-cli** (basé sur **Webpack**).
</div>


# Mise en pratique
