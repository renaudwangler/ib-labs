---
layout: stage
title: "Lab8-Ex1 - Configuration des paramètres de SharePoint Online"
length: "00"
date: "17/05/2024"
script: "msms030.js"
---
# Scénario
Maintenant que Dominique a configuré *Exchange Online* et *Teams*, il s'apprette à implémenter *Sharepoint Online* dans le projet pilote d'Adatum.  
Dans cet exercice, Dominique va commencer par modifier les paramètres génériques de Sharepoint Online pour les mettre en conformité avec les besoins business d'Adatum.

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- L'utilisation du portail administratif de Sharepoint online
- L'utilisation des profils utilisateurs dans Sharepoint Online
- L'utilisation des applications dans Sharepoint Online


## Tâche 1 - Configuration de paramètres
1. Basculez sur la machine virtuelle **LON-CL1**, sur laquelle vous devriez encore être connecté avec le compte **adatum\Administrator** et le mot de passe **Pa55w.rd**.
1. Les portails **Microsoft 365 admin center** et **Microsoft Teams admin center** (que vous pouvez désormais fermer) devraient encore être resté ouverts dans votre navigateur (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. Dans le portail **Microsoft 365 admin center**, dans le menu de navigation, cliquez sur **Show all** (si nécessaire) puis cliquez sur **Sharepoint** sous la section **Admin centers**. Ceci va ouvrir le portail **SharePoint admin center** dans un nouvel onglet.
1. Si une boite de dialogue **Take the tour** apparaît, cliquez en dehors pour la fermer.
1. Dans le menu de navigation du portail **Sharepoint admin center**, ouvrez le groupe d'options **Policies** pour cliquer sur **Sharing**.
1. Sur la page **Sharing**, cliquez pour ouvrir la section **More external sharing settings**. Parmi les options affichées, cochez la case **Allow guests to share items they don't own** (si elle n'est pas déjà cochée par défaut)). Cliquez sur le bouton **Save** en bas de page.
1. Conservez votre navigateur Internet ouvert pour la tâche suivante. 

## Tâche 2 - Configuration des profils utilisateurs
1. Les portails **Microsoft 365 admin center** et **Sharepoint admin center** devraient être resté ouverts dans votre navigateur (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. Dans le menu de navigation du portail **SharePoint admin center** cliquez sur **More features**.
1. Sur la page **More features**, cliquez sur le bouton **Open** sur la tuile **User profiles**.
1. Sur la page **User Profiles**, sous l'en-tête **People** cliquez sur **Manage User Profiles**.
1. Sur la page **User Profiles**, tapez ```Alan``` dans le champ **Find profiles** avant de cliquer surt **Find**.
1. Le profil de Alan yoo s'affiche dans la liste. Cliquez sur la première colonne de la ligne du profil de Alan pour sélectionner **Edit My Profile**.
1. Dans la page **User Profiles**, Saisissez ```dominique``` dans le champ **Manager** et cliquez sur l'icône **check names** à droite du champ et vérifiez que le compte de Dominique Skyetson est affiché.
1. Dans le coin haut à droite de la page **User Profiles**, cliquez sur le bouton **Save and close**.
1. Fermez l'onglet **Manage User Profiles** de votre navigateur internet, afin de retourner sur l'onglet contenant le **SharePoint admin center**.
1. Sur la page **More features**, cliquez sur le bouton **Open** sur la tuile **User profiles**.
1. Sur la page **User Profiles**, sous l'en-tête **My Site Settings** cliquez sur **Setup My Sites**.
1. Sur l'onglet **My Site Settings**, faites défiler la page jusqu'à la section **My Site Cleanup** ; tapez ```dominique``` dans le champ **Secondary Owner** et cliquez sur l'icône **check names** à droite du champ et vérifiez que le compte de Dominique Skyetson est affiché.
1. Défilez jusqu'en bas de la page pour cliquer sur **OK**.
1. Fermez l'onglet **Manage User Profiles** de votre navigateur internet.
1. Conservez votre navigateur Internet ouvert pour la tâche suivante. 

## Tâche 3 - Configuration des applications
1. Les portails **Microsoft 365 admin center** et **Sharepoint admin center** devraient être resté ouverts dans votre navigateur (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. Dans le menu de navigation du portail **SharePoint admin center** cliquez sur **More features**.
1. Sur la page **More features**, cliquez sur le bouton **Open** sur la tuile **Apps**.
1. Attendez que le catalogue d'applications soit prêt (votre navigateur Internet peut recharger la page plusieurs fois) et cliquez sur **More Features** dans le menu de navigation.
1. Sur la page **More features**, cliquez sur le bouton **Open** sur la tuile **Configure store settings**.
1. Sur la page **Apps**, en regard de **Apps for Office from the Store** cliquez sur **No** pour désactiver le lancement des applications Office lors de l'ouverture des documents des sites Sharepoint dans le navigateur.
1. Cliquez sur **OK**.
1. Fermez les deux derniers onglets ouverts dans votre navigateur Internet, laissant les portails **Microsoft 365 admin center** et **Sharepoint admin center** ouverts pour l'exercice suivant.

## Résultat
A l'issue de cet exercice, vous avez configuré les paramètres principaux du service Sharepoint Online.

Vous pouvez poursuivre par [l'exercice 2 - Configuration de sites SharePoint Online](lab8e2)