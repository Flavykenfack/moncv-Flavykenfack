#CV de Flavienne Kenfack

#Installation de Nodejs
Pour mettre en place notre cv web, j'ai tout d'abord installer Nodejs. 
Qu'est ce que Nodejs c'est une plateforme logicielle libre en JavaScript orientée vers les applications réseau.
Pour l'installer on va sur le site internet de Nodejs et installer la version v4.4.6 LTS car il est recommandé par la plupart des utilisateurs ainsi on ne risque pas d'avoir des erreurs.


## Paramétrage de Nodejs
Nodejs installé il faut télécharger Github qui va nous permettre tout d'abord d'avoir un meilleur suivi de notre projet (version, publication),
Grâce à l'outil Git Shell on peut installer certains outils comme yeoman (Générateur de site web utilisant Grunt et Bower),
bower(Gestionnaire de paquet web, il va nous permettre d'installer des package tel que bootswatch, jquery), Grunt (Outil d'automatisation des tâches mais nous allons utiliser Gulp), Gulp(outil d'automatisation des tâches. va permettre de démarrer le server.

```sh
gulp serve
```

### Installer Github
>Github est un service d'hébergement web et de gestion de dévellopement de logicils. 
>Se rendre sur le site pour télécharger "github for desktop" ainsi on pourra utiliser l'outil Git Shell.

### Installer yeoman, bower et gulp
Pour installer tous ces outils, on va aller sur Git Shell et depuis npm. 
	- npm(installé par défaut lors de l'installation de Nodejs, c'est un gestionnaire de paquet de Nodejs)
	- Des qu'on est sur GitShell on arrive sur la racine github et de la on peut utiliser la commande suivante: 
	 ```sh 
	 $ npm install -g yo bower gulp-cli
	 ```
	```sh 
	 $ npm install -g generator-webapp
	```

### Créer un nouveau projet
On peut maintenant créer un nouveau projet pour cela on va utiliser la commande suivante:
```sh
$ mkdir Kenfack_Flavienne
```
Pour ce rendre vers le projet que nous venons de créer 
```sh
$ cd Kenfack_Flavienne
```
Des que on est sur le dossier lancer la commande de mettre en place une nouvelle application 
```sh
$ yo webapp
```
On va devoir choisir quel framework on va utiliser. On va choisir Bootstrap (est un framework qui va faciliter la creation et la customisation d'un site web ou application web) et Modernizr.
Pour lancer le serveur on va lancer cette commande : 
```sh
gulp serve
```


# Installation des packages
## Bootswatch
Bootswatch est un package qui contient des themes gratuit pour utiliser avec Bootstrap.
pour l'installer on va utiliser cette commande: 
```sh
 bower install bootswatch --save
```
On peut voir les themes sur le site bootswatch. J'ai pu essayer différents thèmes en modifier le lien suivant: 
```sh
<link rel="stylesheet" href="bower_components/bootswatch/ThemeBootswatchAModifier/bootstrap.css" />
```

## JQuery
### Fonction avec SmothScroll
Installation du plugin
```sh
bower install jquery-smooth-scroll --save 
```
Ce plugin va permettre un meilleur affichage de la page quand on veut se rendre sur un élément de la page.
```sh
$(document).ready(function(){'use strict';$('a').smoothScroll(); }); 
```


### Création fonction en JQuery
On a du d'abord installer le plugin JQuery pour pouvoir créer une fonction dans le fichier "main.js".
Cette fonction doit modifier une progress bar en canvas. Ce qui est important c'est d'aller par étape.
- Enregistrer dans des variables ce dont on a besoin. 
```sh
var listObj = $('.progress-bar'); var dataNow = $(this).attr('aria-valuenow');
```

- Allez toujours rechercher l'objet courant. 
```sh
$(this).parent().replaceWith(newCanvas);
```



# Publier CV vers Github
Dès qu'on a fini de modifier le cv que tout est en ordre on peut le publier vers Github qui sera accessible à tout le monde.
Se rendre dans la racine du dossier dans la branche Master et lancer les commandes suivantes et suivre la procédure dans l'ordre:

```sh
guip build
```
Des que c'est fini on peut tester si le repertoire dist est accésible 
```sh
gulp serve:dist
```
Si Premiere fois alors executer ce code qui va permettre de lier notre dossier vers un répertoire existant dans github
```sh
git init
git checkout -b gh-pages
git add .
git commit -m 
git remote add origin git@github.com:heg-web/moncv-Flavykenfack.git
git push --set-upstream origin gh-pages
```
Si ce n'est pas la premiere fois alors continuer avec ce code
```sh 
git add . --all
git commit -m "Ajouter un commaentaire sinon on ne pourra pas faire de push"
git push
``` 

# Important!!!!!
>Il est important de toujours faire attention à la syntaxe et à l'ordre des évènements.
>Lors de ce projet j'ai remarquer avoir fait beaucoup d'erreur qui m'ont ralenti sur mon travail.
>Il faut toujours travailler sur la racine du projet, surtout lorsque peut déployer le cv vers Github.
>Pour utiliser la commande deploy depuis Git Shell on va installer gulp-deploy avec npm.

```sh
npm install --save-dev gulp-deploy-git
```

```sh
var deploy = require('gulp-deploy-git');
gulp.task('deploy', function() {
  return gulp.src('**/*',  { read: false, cwd: 'dist'  })
    .pipe(deploy({
      repository: 'git@github.com:heg-web/moncv-bfritscher.git',
      remoteBranch:   'gh-pages'
    }))
});
```
>On peut consulter mon site en ligne : [Lien vers mon cv web](https://heg-web.github.io/moncv-Flavykenfack/)

## Outils installés
- Nodejs
- Github
- SublimeText
