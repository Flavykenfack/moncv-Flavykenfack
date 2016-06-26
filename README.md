#CV de Flavienne Kenfack

#Installation de Nodejs
<p>Pour mettre en place notre cv web, j'ai tout d'abord installer Nodejs. 
	Qu'est ce que Nodejs c'est une plateforme logicielle libre en JavaScript orientée vers les applications réseau.
	Pour l'installer on va sur le site internet de Nodejs et installer la version v4.4.6 LTS car il est recommandé par la plupart des utilisateurs ainsi on ne risque pas d'avoir des erreurs.</p>
<pre><code> </code></pre>

##Paramétrage de Nodejs
<p> Nodejs installé il faut télécharger Github qui va nous permettre tout d'abord d'avoir un meilleur suivi de notre projet (version, publication),
	Grâce à l'outil Git Shell on peut installer certains outils comme yeoman (Générateur de site web utilisant Grunt et Bower),
	bower(Gestionnaire de paquet web, il va nous permettre d'installer des package tel que bootswatch, jquery), Grunt (Outil d'automatisation des tâches mais nous allons utiliser Gulp), Gulp(outil d'automatisation des tâches. va permettre de démarrer le server <pre><code>gulp serve</code></pre>)</p>

###Installer Github
<p>Github est un service d'hébergement web et de gestion de dévellopement de logicils. 
	Se rendre sur le site pour télécharger "github for desktop" ainsi on pourra utiliser l'outil Git Shell. </p>

###Installer yeoman, bower et gulp
<p>Pour installer tous ces outils, on va aller sur Git Shell et depuis npm. 
	npm(installé par défaut lors de l'installation de Nodejs, c'est un gestionnaire de paquet de Nodejs)
	Des qu'on est sur GitShell on arrive sur la racine github et de la on peut utiliser la commande suivante: 
	<pre><code>$ npm install -g yo bower gulp-cli</code></pre><pre><code>$ npm install -g generator-webapp</code></pre></p>

###Créer un nouveau projet
<p>On peut maintenant créer un nouveau projet pour cela on va utiliser la commande suivante:
	<pre><code>$ mkdir Kenfack_Flavienne</code></pre> 
	Pour ce rendre vers le projet que nous venons de créer <pre><code>$ cd Kenfack_Flavienne</code></pre>
	Des que on est sur le dossier lancer la commande de mettre en place une nouvelle application <pre><code>$ yo webapp</code></pre>
	On va devoir choisir quel framework on va utiliser. On va choisir Bootstrap (est un framework qui va faciliter la creation et la customisation d'un site web ou application web) et Modernizr.
	Pour lancer le serveur on va lancer cette commande : <pre><code>gulp serve</code></pre></p>

###Installer les packages
####Bootswatch
<p>Bootswatch est un package qui contient des themes gratuit pour utiliser avec Bootstrap.
	pour l'installer on va utiliser cette commande: <pre><code>bower install bootswatch --save</code></pre>
	On peut voir les themes sur le site bootswatch.
	J'ai pu essayer différents thèmes en modifier le lien suivant: <pre><code><link rel="stylesheet" href="bower_components/bootswatch/???/bootstrap.css" /></code></pre></p>

#JQuery
##Fonction avec SmothScroll
<p>Installation du plugin</p> 
<pre><code> </code></pre>
<pre><code>bower install jquery-smooth-scroll --save </code></pre>
<p>Ce plugin va permettre un meilleur affichage de la page quand on veut se rendre sur un élément de la page.</p>
<pre><code> $(document).ready(function(){'use strict';$('a').smoothScroll(); }); </code></pre>


##Création fonction en JQuery
<p>On a du d'abord installer le plugin JQuery Il n'a pa été facile pour moi de créer une fonction en JQuery. Cette fonction doit modifier une progress bar en canvas. Ce qui est important c'est d'aller par étape.</p>
<ul>
	<ol>Enregistrer dans des variables ce dont on a besoin. <pre><code>var listObj = $('.progress-bar'); var dataNow = $(this).attr('aria-valuenow');</code></pre></ol>

	<ol>Allez toujours rechercher l'objet courant. <pre><code> $(this).parent().replaceWith(newCanvas);</code></pre></ol>
</ul>
<p>On aura comme code</p>

<pre><code> </code></pre>


#Publier CV vers Github
Dès qu'on fini de modifier le cv 
tout est en ordre alors on peut le publier vers Github qui sera accessible à tout le monde 
<pre><code> </code></pre>

#Important!!!!!
<p>Il est important de toujours faire attention à la syntaxe et à l'ordre des évènements. Lors de ce projet j'ai remarquer avoir fait beaucoup d'erreur qui m'ont ralenti sur mon travail.</p>
<p>Il faut toujours travailler sur la racine du projet.</p>
##Outils installés
<ul>
	<li>Nodejs</li>
	<li>Github</li>
</ul>
