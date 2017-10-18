# Débuter avec VueJS 2.0

## Installation

```bash
npm install vue
```

## Hello World !

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Hello World avec VUEJS</title>
</head>
<body>
  <div id="application">
    <!-- template -->
    <h1>{{ foo }}</h1>
  </div>
  <script src="node_modules/vue/dist/vue.js"></script>
  <script>
  new Vue({
    el: "#application",
    data: {
      foo: "bar"
    }
  })
  </script>
</body>
</html>
```
