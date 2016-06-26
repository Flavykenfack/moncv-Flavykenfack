#CV de Flavienne Kenfack

#Installation de Nodejs
<p>Pour mettre en place notre cv web, j'ai tout d'abord installer Nodejs. 
	Qu'est ce que Nodejs c'est une plateforme logicielle libre en JavaScript orientée vers les applications réseau.
	Pour l'installer on va sur le site internet de Nodejs et installer la version v4.4.6 LTS car il est recommandé par la plupart des utilisateurs ainsi on ne risque pas d'avoir des erreurs.</p>
<pre><code> </code></pre>

##Paramétrage de Nodejs
<p> Nodejs installé il faut télécharger Github qui va nous permettre tout d'abord d'avoir un meilleur suivi de notre projet (version, publication),
	Grâce à l'outil Git Shell on peut installer certains outils comme yeoman (Générateur de site web utilisant Grunt et Bower),
	bower(Gestionnaire de paquet web, il va nous permettre d'installer des package tel que bootswatch, jquery), Gulp(outil d'automatisation des tâches. va permettre de démarrer le server <pre><code>gulp serve</code></pre>)</p>

##Installer Github
<pre><code> </code></pre>

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
