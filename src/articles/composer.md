% Composer
% Gestion des packages PHP avec composer
% Stéphane Bouvry

# Présentation

## C'est quoi ?

**Composer** (Se prononce *Composeur*) est un utilitaire PHP en ligne de commande pour gérer les librairies et le code de vos projets PHP, il est utilisé dans quasi-totalité des librairies PHP.

 - Dépendances
 - Autoload
 - Binaire

Il va gérer les librairies ainsi que les **dépendances** necessaires à son fonctionnement. Si par exemple vous avez besoin de *LibrairieA*, et que cette dernière a besoin de *LibrairieB* pour fonctionner, composer se chargera lui-même de télécharger les sources de *LibrairieB* si vous installé *LibrairieA*.

Il va également s'occuper de générer l'autoload qui va bien ce qui va grandement vous simplifier la vie (aujourd'hui, peu de développeurs PHP s'occupent encore d'écrire des fonctions autoload à la main).

Enfin (c'est cadeau), il va installer automatiquement les binaires proposés par les dépendances dans le dossier **vendor/bin** de votre projet. (Ex : Doctrine, PHPunit, etc...).

## prérequis
- PHP cli (PHP7+)
- php7-zip
- Git (La récupération des librairies est basée dessus)

><i class="icon-info"></i>En fait, composer fonctionne très bien avec PHP 5.6, mais bon on est en 2017, donc voilà... PHP 5 merci, en revoir.

## Installation

# Usage

## Initialiser un dépôt

On commencer par entrer la commande :

```bash
composer init
```

Puis on réponds aux différentes questions posées.

Cela va créer un fichier **composer.json** qui aura globalement cette tête là :

```json
{
    "name": "jacksay/demo-composer",
    "description": "Dépôt de test",
    "authors": [
        {
            "name": "jacksay",
            "email": "jacksay@jacksay.com"
        }
    ],
    "require": {}
}
```

C'est dans ce fichier de composer va référencer (si vous lui demandez) les différentes librairies dont vous allez avoir besoin (ça se joue au moment de l'installation).


## Recherche une librairie

A l'image de l'utilitaire `apt` sous linux, la commande **composer search** permet de recherche des librairies PHP :

```bash
composer search <votre recherche>
```

Par exemple, si vous voulez utiliser la librairie **Console** dans votre code, vous pouvez commencer à la recherche avec la commande :

```bash
composer search console
```

Vous obtiendrez la liste des librairies référencées :

```
symfony/console Symfony Console Component
psy/psysh An interactive shell for modern PHP.
drupal/console The Drupal CLI. A tool to generate boilerplate code, interact with and debug Drupal.
... etc
```

## Installer une librairie

```bash
composer require <nom-librairie>
```

Dans ce petit article, nous allons installer la librairie **symfony/console** :

```bash
composer require symfony-console
```

### Le dossier vendor

Si vous regardez maintenant dans votre dossier, vous verrez d'abord qu'est apparue comme par magie un dossier **vendor/**.

C'est dans le dossier **vendor** que composer range et organise les dépendances du projet. On y trouve les dossiers des librairies (dans notre exemple un dossier **symfony** dans lequel se trouve la libraire Console et ces dépendances)

Composer a également son petit dossier à lui (**composer/**) ou il va ranger sa tanbouille, notamment pour gérer l'*autoload* des librairies.

Enfin, composer a ajouté un fichier `autoload.php` à la racine de vendor qui vous servira de point d'ammorce.

### Le test

Vous pouvez écrire un petit script rapide pour tester ça à la racine de votre projet :

```php
<?php
// test.php
require 'vendor/autoload.php';

use Symfony\Component\Console\Application;

$app = new Application();
$app->run();
```

Puis tester le script en faisant :

```bash
php test.php
```

## Référencer ces librairies

Maintenant on va voir comment **référencer ces classes** avec composer.

Pour illustrer d'un exemple cette partie, vous allez créer à la racine du projet un dossier dans lequel nous allons (le suspens est insoutanable)... ranger les sources.

```bash
mkdir src
```

Comme on est des gens civilisés, on va organiser notre code en package bien propre avec un *namespace* : **Exemple**. Du coup on cré un dossier **Exemple** dans **src** :

```bash
mkdir src/Exemple
```

Puis on va créer une première classe :


```php
<?php
// src/Exemple/SuperClasse.php
class SuperClasse {

  private $message = "Bonjour composer";

  public function getMessage(){
    return $this->message;
  }
}
```

On est sur du lourd...

Il faut maintenant référencer notre espace de nom dans *composer* pour que ce dernier sache où charger la classe **Exemple\SuperClasse** si un script venait à lui demander.

### Utiliser psr-4 dans composer

Ouvrez le fichier **composer.json** et ajoutez la clef "psr-4". Cette clef va contenir un objet contenant un ensemble de `clef:valeur`.

La `clef` sera un espace de nom, et `valeur` sera l'emplacement. Dans notre cas cela donne :

```json
{
    "name": "jacksay/demo-composer",
    "description": "Dépôt de test",
    "authors": [
        {
            "name": "jacksay",
            "email": "jacksay@jacksay.com"
        }
    ],
    "autoload": {
        "psr-4": {
          "Exemple\\": "src/Exemple"
        }
    },
    "require": {
        "symfony/console": "^3.3"
    }
}
```

C'est *po fini*, nous devons maintenant regénérer l'autoload de composer en utilisant la commande :

```bash
composer dumpautoload
```
