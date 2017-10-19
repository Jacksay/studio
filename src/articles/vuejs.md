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

En téléchargeant les fichiers depuis le [Site officiel VUEJS](https://vuejs.org/) ou en utilisant un CDN <https://unpkg.com/vue>



## Premiers pas

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

# Template

Dans l'exemple précédent, le template est directement défini dans l'élément cible `#application`.

On peut égalament difinir le template avec la clef `template` de l'instance de **VueJS** :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Hello World avec VUEJS</title>
</head>
<body>
  <div id="application"><div>
  <script src="https://unpkg.com/vue"></script>
  <script>
  new Vue({
    el: "#application",
    template: `<h1>{{ message }}</h1>`,
    data: {
      message: "Bonjour monde !"
    }
  })
  </script>
</body>
</html>
```

# Mise en pratique
