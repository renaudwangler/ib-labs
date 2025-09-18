---
layout: stage
title: "Lab9-Ex1 - Viva Engage"
length: "00"
date: "17/05/2024"
script: "msms030.js"
---
# Scénario
Comme *Engage* amène la richesse du réseau social d'entreprise Yammer aux environnements *teams*, *SharePoint Online* et aux autres applications Microsoft 365, Dominique Skyetson s'intéresse à la mise en oeuvre de *Viva Engage* dans le projet pilote d'Adatum. Ceci permettra aux utilisateurs d'Adatum de partager, créer et éditer des fichiers directement dans les conversations *Engage* avec *Office for the web*.  
Dans cet exercice, Dominique va configurer les paramètres principaux de *Viva Engage* pour l'environnement Adatum avant de préparer l'outil pour une meilleure expérience utilisateurs.

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- L'administration de *Viva Engage*
- Le paramétrage personnel de *Viva Engage*


## Tâche 1 - Configurer les paramètres globaux de Engage
1. Retournez sur la machine virtuelle **LON-CL1** ou votre session devrait déjà ouverte, avec le compte **ADATUM\Administrator** et le mot de passe **Pa55w.rd**.
1. Le portail **Microsoft 365 admin center** devrait encore être resté ouvert dans votre navigateur Internet (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. Cliquez sur le choix **All admin centers** pour sélectionner **Viva Engage** dans la page **All Admin centers**.
1. Fermez les éventuels popup de bienvenue et d'information en cliquant sur le **X** en haut à droite de chacun.
1. Dans le page d'accueil de **Engage**, cliquez sur l'engrenage en haut à droite pour cliquer sur **Admin center**, cliquez sur la tuile **Tenant settings**.
1. Dans la page **Tenant settings** cliquez sur le bouyton **Add** dans la section **Usage Policy**
1. Utilisez les paramètres suivants :  
	- Dans le champ **Policy Name**, entrez ```Adatum Acceptable Use Policy```.
	- Activez le choix **Enable policy reminder on Viva Engage home feed**.
	- Dans le champ **Policy reminder**, saisissez : ```Please read our Engage usage policy.```
	- Dans le champ **Policy**, saisissez le texte suivant : ```Welcome to Engage! Our goal is to provide a collaborative environment to connect with colleagues and bridge various departments and geographic locations to share meaningful information.```
1. Cliquez sur le bouton **Save** en bas du panneau.
1. De retour sur la page **tenant settings**, activez le choix **Require users to review policy upon initial login and after updates**.
1. Dans votre navigateur Internet, fermez l'onglet **Viva Engage** avant de passer à la tâche suivante.
	>**Note :** Dans la tâche suivante, vous allez réouvrir *Engage*. Le fait d'avoir fermé l'onglet vous assure que vos nouveaux paramètres seront bien pris en compte pour votre prochaine session de navigation.

## Tâche 2 - Configurer l'expérience utilisateur dans *Engage*
1. Le portail **Microsoft 365 admin center** devrait encore être resté ouvert dans votre navigateur Internet (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. Cliquez sur le menu des applications 365 (le carré de 3 x 3 cases haut à gauche de la page) pour y choisir **Engage**.
1. Dans le page d'accueil de **Engage**, cliquez sur l'engrenage en haut à droite pour cliquer sur *User settings**.
1. Sur la page **Settings**, cliquez sur l'onglet **Notifications**.
1. Dans la liste de notifications, toutes les cases en regard des options pour la section **Email notifications** sont cochées par défaut. Décochez toutes les cases sauf les deux suivantes :  
	- **New device login**
	- **New messages in Engage inbox**
1. Dans votre navigateur Internet, fermez l'onglet **Viva Engage** avant de passer à la tâche suivante.

## Tâche 3 - Utilisation de *Viva Engage*
Dans cette tâche, vous allez vous connecter à *Viva Engage* avec le compte de Alan Yoo et vérifier que vous receviez bien l'avertissement sur l'utilisation correcte de *Engage* dans l'environnement Adatum que Dominique a configuré dans la première tâche.
1. Basculez vers la machine virtuelle **LON-CL2**. La dernière fois que vous avez utilisé LON-CL2 vous aviez utilisé le navigateur Internet pour ouvrir la boite aux lettres de Alan dans *Outlook on the web*. Fermez tous les onglets du navigateur, sauf celui intitulé **Mail - Alan Yoo - Outlook**.
1. Cliquez sur le menu des applications 365 (le carré de 3 x 3 cases haut à gauche de la page) pour y choisir **Engage**.
	>Si une boite de dialogue **Welcome to the new Viva Engage!** s'affiche, fermez la en utilisant le **X** dans le coin supérieur droit.

1. Une boite de dialogue **Adatum Acceptable Use Policy** devrait s'afficher, indiquant le comportement que Alan est sensé respecter dans cet outil, cliquez sur **I Accept**.
	>**Note :** Si Alan se connecte de nouveau à *Engage* sur la machine ou sur une autre, cette boite de dialogue ne lui sera désormais plus présentée.
	
1. Fermez l'onglet **Viva Engage - Feed** pour terminer cet exercice.

## Résultat
A la fin de cet exercice, vous devriez avoir activé Viva Engage pour le projet pilote de Adatum.

Vous pouvez poursuivre par [l'exercice 2 - OneDrive for Business](lab9e2)