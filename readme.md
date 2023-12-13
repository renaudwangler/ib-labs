![dernière compilation](https://github.com/renaudwangler/ib-labs/actions/workflows/pages/pages-build-deployment/badge.svg)
# Consultation
[Utiliser cette URL pour consulter la documentation compilée](https://renaudwangler.github.io/ib-labs/)

# Fichiers d'atelier
Ajouter un dossier, contenant un **index.md**.  

Le contenu des ateliers est rédigé en [format markdown](https://docs.github.com/fr/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).  

# Variables
Les variables sont à insérer dans un [en-tête YAML](https://jekyllrb.com/docs/front-matter/) au début du fichier de chaque atelier.  
La variable obligatoire en en-tête du stage  
- **layout : page** pour un atelier contenu dans index.md, **home** et **stage** sinon (ex msm030fr)
- **title :** Le nom de l'atelier en toutes lettres  

Les variables disponibles dans l'en-tête de chaque stage  
- **length :** durée en minutes
- **date:** Afficher la date de dernière édition d'un atelier dans son pied de page.

# Remarques
Les balises de code se voient adjointes un bouton pour faciliter la copie dudit code. 