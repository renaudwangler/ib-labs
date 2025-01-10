---
layout: stage
title: "Lab1-Ex3 - Visite des portails administratifs 365"
length: "00"
date: "10/01/2025"
script: "ms365.js"
---
# Scénario
Maintenant que le tenant du projet pilote 365 de Adatum est complètement créé, vous pouvez commencer à utiliser l'environnement Microsoft 365. Dans cet exercice, vous allez visiter divers portails administratifs les plus utiles pour le quotidien d'un administrateur 365 afin de commencer à vous familiariser avec leur contenu et leur navigation.
Dans les exercices précédents, vous avez accéder aux portail 365 depuis un contrôleur de domaine (LON-DC1). La création du tenant étant désormais actée, il semble plus judicieux à Dominique Skyetson d'accéder aux outils d'administration depuis sa machine d'administrateur LON-CL1.
Vous allez donc commencer par vous connecter sur la machine cliente **LON-CL1** en utilisant le compte administrateur local **Adatum\administrator** pour ensuite vous connecter au tenant Microsoft 365 avec le compte **MOD Administrator**.

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- la nature des principaux portails d'administration
- la navigation dans ces portails

## Tâche 1 - Visite du Microsoft 365 admin center
Bien que vous ayez déjà accédé au portail général d'administration *Microsoft 365 admin center* dans les exercices précédents, vous allez désormais découvrir quelques fonctionnalités complémentaires de ce portail. 
1. Basculez vers la machine virtuelle **LON-CL1**.
1. Connectez-vous à la machine LON-CL1 avec le compte **adatum\Administrator** et le mot de passe **Pa55w.rd**. 
    > **Note :** Si un panneau **Networks** s'affiche sur la droite de votre écran demandant si vous souhaitez activer la découverte sur le réseau, cliquez sur **Yes**.
1. Sur la barre des tâches, cliquez sur l'icône de **Microsoft Edge** pour lancer votre navigateur. Maximisez la fenêtre du navigateur lorsqu'elle s'ouvre.
1. Dans votre navigateur, rendez-vous sur le portail d'administration **Microsoft 365 admin center** en utilisant l'url suivante :
```https://admin.microsoft.com/```
1. Dans la fenêtre **Sign in**, saisissez le nom de connexion du compte *MOD Administrator* (sous la forme ```admin@[onmicrosoftDomain].onmicrosoft.com```) et cliquez sur **Next**
1. Dans la fenêtre **Enter password**, saisissez ou collez le **mot de passe du tenant** que vous avez précédemment noté et cliquez sur **Sign in**
1. Sur la fenêtre **Stay signed in?**, cochez la case **Don’t show this again** et cliquez sur **Yes.**
1. Si un popup **Welcome to Microsoft 365** apparaît, cliquez deux fois sur la flèche droite pour pouvoir le fermer.
1. Dans le premier exercice, vous avez déjà été voir la liste des utilisateurs déclarés (**Active Users**). Vous allez désormais poursuivre votre exploration en regardant la liste des groupes présents dans l'environnement. Dans le menu de navigation à gauche, ouvrez le groupe **Teams & Groups** pour sélectionner l'option **Active teams & groups**... 
1. Dans le menu de navigation, cliquez sur **...Show all** pour afficher toutes les options de ce menu. 
1. Dans le menu de navigation, ouvrez le groupe **Health** afin de sélectionner le **Message center**.
1. Dans la page **Message center**, l'onglet **Inbox** est affiché par défaut. Parcourez-en les messages. Si un message en particulier vous intéresse, cliquez dessus pour en ouvrir le détail. Cela va ouvrir un panneau à droite de la page qui affiche tous les détails concernant le message choisi. Après avoir fini de consulter les détails de ce message, cliquez sur le **X** tout en haut à droite pour fermer le panneau de détails.
1. Laissez votre navigateur Internet ouvert, sur la page du portail **Microsoft 365 admin center** pour la suite de cet exercice.

## Tâche 2 - Visite du Exchange admin center
1. Suite à la tâche précédente, vous devriez toujours être connecté à **LON-CL1** et votre navigateur Internet devrait être ouvert sur le **Microsoft 365 Admin Center**, connecté en **MOD Administrator**. Dans le menu de navigation, dans la section **Admin centers**, cliquez sur **Exchange**. Un nouvel onglet va s'ouvrir, affichant le portail **Exchange admin center**.
1. Parcourez le **Exchange admin center**, en sélectionnant chaque entrée de son menu de navigation. Consultez les informations disponibles pour chaque entrée et parcourez les onglets (le cas échéant).
1. Une fois terminée votre visite du *Exchange admin center*, fermez l'onglet du navigateur dans lequel vous l'avez ouvert (laissez le navigateur et les autres onglets ouverts).

## Tâche 3 - Visite du Teams admin center
1. Suite à la tâche précédente, vous devriez toujours être connecté à **LON-CL1** et votre navigateur Internet devrait être ouvert sur le **Microsoft 365 Admin Center**, connecté en **MOD Administrator**. Dans le menu de navigation, dans la section **Admin centers**, cliquez sur **Teams**. Un nouvel onglet va s'ouvrir, affichant le portail **Microsoft Teams admin center**.
1. Parcourez le **Microsoft Teams admin center**, en sélectionnant chaque entrée de son menu de navigation. Consultez les informations disponibles pour chaque entrée et parcourez les onglets (le cas échéant).
1. Une fois terminée votre visite du *Microsoft Teams admin center*, fermez l'onglet du navigateur dans lequel vous l'avez ouvert (laissez le navigateur et les autres onglets ouverts).

## Tâche 4 - Visite du SharePoint admin center
1. Suite à la tâche précédente, vous devriez toujours être connecté à **LON-CL1** et votre navigateur Internet devrait être ouvert sur le **Microsoft 365 Admin Center**, connecté en **MOD Administrator**. Dans le menu de navigation, dans la section **Admin centers**, cliquez sur **Sharepoint**. Un nouvel onglet va s'ouvrir, affichant le portail **Sharepoint admin center**.
1. Parcourez le **Sharepoint admin center**, en sélectionnant chaque entrée de son menu de navigation. Consultez les informations disponibles pour chaque entrée et parcourez les onglets (le cas échéant).
1. Une fois terminée votre visite du *Sharepoint admin center*, fermez l'onglet du navigateur dans lequel vous l'avez ouvert (laissez le navigateur et les autres onglets ouverts).

## Tâche 5 - Visite de Microsoft 365 Defender
1. Suite à la tâche précédente, vous devriez toujours être connecté à **LON-CL1** et votre navigateur Internet devrait être ouvert sur le **Microsoft 365 Admin Center**, connecté en **MOD Administrator**. Dans le menu de navigation, dans la section **Admin centers**, cliquez sur **Security**. Un nouvel onglet va s'ouvrir, affichant le portail **Microsoft 365 Defender**.
1. Parcourez le **Microsoft 365 Defender**, en sélectionnant chaque entrée de son menu de navigation. Consultez les informations disponibles pour chaque entrée et parcourez les onglets (le cas échéant).
1. Une fois terminée votre visite du *Microsoft 365 Defender*, fermez l'onglet du navigateur dans lequel vous l'avez ouvert (laissez le navigateur et les autres onglets ouverts).

## Tâche 6 - Visite de Microsoft Purview 
1. Suite à la tâche précédente, vous devriez toujours être connecté à **LON-CL1** et votre navigateur Internet devrait être ouvert sur le **Microsoft 365 Admin Center**, connecté en **MOD Administrator**. Dans le menu de navigation, dans la section **Admin centers**, cliquez sur **Compliance**. Un nouvel onglet va s'ouvrir, affichant le portail **Microsoft Purview**.
1. Parcourez le **Microsoft Purview**, en sélectionnant chaque entrée de son menu de navigation. Consultez les informations disponibles pour chaque entrée et parcourez les onglets (le cas échéant).
1. Une fois terminée votre visite du *Microsoft Purview*, fermez l'onglet du navigateur dans lequel vous l'avez ouvert (laissez le navigateur et les autres onglets ouverts).
1. Laissez, pour finir, votre navigateur Internet ouvert et connecté car vous allez l'utiliser dans le prochain atelier.

## Résultat
A l'issue de ce premier exercice, vous avez visité les principaux portails utiles au quotidien d'un administrateur Microsoft 365 et commencé à appréhender la navigation dans ceux-ci.
# Fin de l'atelier 1