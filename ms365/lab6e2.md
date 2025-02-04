---
layout: stage
title: "Lab6-Ex2 - Gestion des bibliothèques de documents"
length: "00"
date: "10/01/2025"
script: "ms365.js"
---
# Scénario
Dans cet exercice, Dominique Skyetson veut commencer à explorer les bibliothèques de documents *SharePoint Online*. Pour en comprendre le fonctionnement, Dominique va créer une bibliothèque en utilisant le portail *SharePoint Online admin center*.

## Tâche 1 - Créer une bibliothèque de documents dans le SharePoint admin center
Dans cette tâche, vous allez utiliser le portail Sharepoint admin center pour créer une bibliothèque de documents sur le site du service formation de ib Cegos Workshop.
1. Sur la machine LON-CL1, les portails **Microsoft 365 admin center** et **Sharepoint admin center** devraient être resté ouverts dans votre navigateur (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. Dans le menu de navigation du **Sharepoint admin center**, cliquez sur le choix **Active sites** dans le groupe d'options **Sites**.
1. Cliquez sur l'url **../sites/Formation** du site Formation de ib Cegos Workshop. Le site **Formation** va s'ouvrir dans un nouvle onglet de votre navigateur.
1. sur la barre de menu du site, cliquez sur **+ New** puis **Document library**.
1. Cliquez sur la tuile **Learning** de la section **From Microsoft**.
1. Sur la page **Learning**, cliquez sur le bouton **Use template**.
1. sur le panneau suivant, saisissez les informations suivantes avant de cliquer sur **Create**.
	- **Name** : ```Stages```
	- **Description** : ```Ici seront conservés les documents nécessaires aux stages ib Cegos Workshop```.
1. La nouvelle bibliothèque est affichée et elles est accessible depuis le menu de navigation du site **Formation**.

## Tâche 2 - Chargement de documents dans la bibliothèque
1. Cliquez sur le bouton **+ New** et sélectionnez **Folder**.
1. Dans le panneau **Create a folder**, saisissez ```Plans``` dans le champ **Name** et choisissez une couleur avant de cliquer sur **Create**
2. Ouvrez un autre onglet dans votre navigateur Internet et utilisez l'adresse suivante pour télécharger les exemples de cet atelier :
```https://raw.githubusercontent.com/renaudwangler/ib-labs/master/ms365/sharepointDocs.zip```

https://msspopoweruser.rramoscabral.com/Hands-on-Labs/CreateSharePointLibrary.html

## Résultat
Après avoir réalisé cet exercice, vous devriez savoir créer et utiliser des bibliothèques de documents sur Sharepoint Online.

Vous pouvez poursuivre par [l'exercice 3 - Définition des autorisation](lab6e3)