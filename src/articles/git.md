% GIT
% Gestion de dépôt avec GIT
% Stéphane Bouvry

# TODO

## Relocaliser un remote

La commande `git remote -v` permet d'afficher le détails du *remote* :

```bash
$ git remote -v
origin	https://git.domain.tld/identifiant/depot.git (fetch)
origin	https://git.domain.tld/identifiant/depot.git (push)
```

Source : https://help.github.com/articles/changing-a-remote-s-url/

Pour **modifier l'origin de la copie de travail**, on utilise la commande `git remote set-url origin https://github.com/identifiant/depot.git` :

```bash
$ git remote set-url origin git@github.com:identifiant/depot.git
```

On peut ensuite vérifier si les modification ont été correctement appliquées :

```bash
$ git remote -v
origin	git@git.domain.tld/identifiant/depot.git (fetch)
origin	git@git.domain.tld/identifiant/depot.git (push)
```
