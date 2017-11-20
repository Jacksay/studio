% DOCKER
% Container d'application
% Stéphane Bouvry

# Présentation

# Usage

Pour lister les images disponibles :

```bash
# Lancer un container (avec terminal)
$ docker images
REPOSITORY                    TAG                 IMAGE ID            CREATED             SIZE
gitlab/gitlab-runner-helper   x86_64-c1ecf97f     4d5900c642bc        17 hours ago        43.8MB
debian                        latest              6d83de432e98        12 days ago         100MB
hello-world                   latest              05a3bd381fc2        2 months ago        1.84kB
```

Pour lancer un container docker en maintnant le terminal actif :

```bash
# Lancer un container (avec terminal)
$ docker run -ti debian
root@5f4ea88add41:/#
```

Attention : Lorsque l'on quitte le container, les modifications sont supprimées

> On fait Ctrl+D ou `exit` pour quitter, le conteneur est fermé

Pour voir les container actifs :

```bash
# Lister les processus docker actifs
$ docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
5f4ea88add41        debian              "bash"              18 seconds ago      Up 14 seconds                           elegant_galileo
```

Voir les différences entre un container et son image :

```bash
$ docker diff 5f4ea88add41
A /TEST.md
```

Pour sauvegarder l'état d'un container dans une nouvelle image :

Voir les différences entre un container et son image :

```bash
$ docker commit 5f4ea88add41 demonstration
sha256:b319df0dafdae2d6e2f8129f0f369bee43ac0c170f8aa66dd36d07bad86db4ba
```

Puis pour relancer l'image sauvegardée :

```bash
$ docker run demonstration
```

Exporter une image :
```bash
$ docker save demonstration > /tmp/docker-img-demonstration.tar
```
