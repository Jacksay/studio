% VUEJS 2.0
% Webapp partie 1
% Stéphane Bouvry

# Débuter avec VueJS 2.0

## Installation

A l'image d'autres outils *Javascript*, on peut installer **VueJS** de différentes façon.

En utilisant NPM :
```bash
npm install vue
```

En utilisant [Bower](https://bower.io/) :
```bash
bower install vue
```

En téléchargeant les fichiers depuis le [Site officiel VUEJS](https://vuejs.org/) ou en utilisant un CDN <https://unpkg.com/vue> ou <https://cdn.jsdelivr.net/npm/vue>.


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

# Cycle de vie


# Template

Dans l'exemple précédent, le *template* est directement défini dans l'élément cible `#application`.

On peut égalament difinir le template avec la clef `template` de l'instance de **VueJS** :

```html
  <div id="application"><div>
```

```js
new Vue({
 el: "#application",
 template: `<h1>{{ message }}</h1>`,
 data: {
   message: "Bonjour monde !"
 }
})
```

# Mise en pratique
