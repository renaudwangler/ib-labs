---
layout: stage
title: "Lab2-Ex2 - Gestion des stratégies de mots de passe Microsoft 365"
length: "00"
date: "15/05/2024"
script: "msms030.js"
---
# Scénario
Dans cet exercice, vous allez poursuivre, dans la peau de Dominique Skyetson, en tant qu'administrateur d'Adatum. Dans le contexte du projet pilote de Adatum, Dominique veut comprendre les fonctionnalités de gestion de mot de passe de Microsoft 365. Il va commencer par mettre en place une stratégie de mot de passe qui expire après 60 jours.  
Puisque Adatum souhaite également implémenter l'authentification multifactorielle (MFA), Dominique doit mettre en place la MFA dans le projet pilote. La MFA est un standard de cybersécurité qui fournit le socle de l'intégrité des identités. La MFA est activée par défaut pour un nouveau tenant Microsoft 365 ; cependant, pour le besoins de ce lab, la MFA a été désactivée pour fluidifier le fonctionnement dans l'environnement virtuel d'ateliers. Ainsi, Dominique va activer la MFA pour son propre compte pour vérifier cette fonctionnalité, avant de la désactiver de nouveau (Désactiver la MFA en fin d'exercice sur le compte de Dominique vous évitera de devoir saisir votre facteur complémentaire à chaque connexion pendant le stage).  
**Important :** Pour mettre en oeuvre la MFA, vous aurez besoin d'utiliser votre téléphone pour recevoir un code de vérification que vous devrez saisir afin de valider la connexion. Si vous ne pouvez pas recevoir de texto, il vous faudra passer cet exercice ou demander conseil à votre formateur/trice pour réaliser l'opération d'une autre manière (avec une application par exemple).  

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- la stratégie d'expiration de mots de passe de Microsoft 365
- l'activation et la désactivation de l'authentification multifactorielle

## Tâche 1 - Configurer une stratégie de mot de passe Microsoft 365
Dans cette tâche, vous allez changer la stratégie de mot de passe qui contrôle la fréquence à laquelle les utilisateurs doivent changer leur mot de passe.
Par le passé, vous aviez une stratégie exigeant que les utilisateurs changent leur mot de passe tous les 90 jours. Cependant, pour cet exercice, vous allez changer l'expiration de mot de passe pour la passer à 60 jours.
**Important **: Vous allez faire ce changement à seule fin de test, le présent atelier n'ayant pas pour vocation de durer plus de 60 jours...  
1. Vous devriez encore être connecté sur **LON-CL1** à l'issue du premier atelier. Le **Microsoft 365 admin center** devrait encore être resté ouvert dans votre navigateur et vous devriez y être connecté avec le compte *Dominique Skyetson*.
1. Dans le portail **Microsoft 365 admin center**, dans le menu de navigation de gauche, ouvrez **Settings** pour sélectionner **Org settings** (cliquer sur **Show all** si le groupe d'options **Settings** n'est pas affiché).
1. Dans la fenêtre **Org settings**, l'onglet **Services** est affiché par défaut en haut de la page. Sélectionnez plutôt l'onglet **Security & Privacy** situé à côté. 
1. Sur la page **Security & Privacy**, sélectionnez **Password expiration policy** dans la liste de paramètres. 
1. Sur le panneau **Password expiration policy** qui s'affiche, décochez la case **Set passwords to never expire (recommended)**.
	> **Note :** Vous pouvez cliquer sur le lien documentaire pour comprendre en quoi des mots de passe qui n'expire pas sont désormais considéré comme plus sécurisés.  

1. Entrez **60** dans le champ **Days before passwords expire** avant de cliquer sur **Save**.
1. Vérifiez que la case **Set passwords to never expire (recommended)** est décochée et que le message **Changes saved** apparaît en haut de page.
1. Cliquez sur le **X** en haut à droite afin de fermer le panneau **Password expiration policy**.
1. Laissez votre navigateur ouvert pour la tâche suivante.

## Tâche 2 - Activer l'authentification multifactorielle
Pour tester l'authentification multifactorielle (MFA), Dominique Skyetson veut l'activer sur son compte administrateur nominatif pour en constater le fonctionnement.

1. Vous devriez encore être connecté sur **LON-CL1** à l'issue du premier atelier. Le **Microsoft 365 admin center** devrait encore être resté ouvert dans votre navigateur et vous devriez y être connecté avec le compte *Dominique Skyetson*.
1. Pour activer la MFA pour le compte utilisateur de Dominique Skyetson, vous devez d'abord accéder à la liste des **Active users** dans le portail **Microsoft 365 admin center**. Utilisez donc le menu de navigation pour ouvrir le groupe d'options **Users** afin d'y choisir **Active users**.
1. Dans la page **Active users**, dans la barre de menu au-dessus de la liste d'utilisateurs, cliquez sur **Multi-factor authentication**. Cette action va ouvrir le portail d'administration Entra dans un nouvel onglet, sur la page **Per-user ultifactor authentication** (avec la vue **Users** affichée par défaut).  
1. Si vous êtes amenés à mettre en place la MFA de Dominique pour accèder à cette page, vous pouvez vous référer à la procédure détaillée dans la tâche 3 suivante, sinon, poursuivez avec la procédure de la présente tâche
	>**Note :** Le statut MFA de tous les utilisateurs existant est **Disabled**.
1. Parcourez la liste des utilisateurs si nécessaire pour cliquer sur la case à gauche de Dominique Skyetson.
1. Dans la barre de menu au dessus de la liste d'utilisateurs, cliquez sur **Enable MFA**
1. Sur le popup **Enable multi-factor authentication**, cliquez sur le bouton **Enable**. 
1. Vous devez désormais vous déconnecter de Microsoft 365. Cliquez sur le compte de Dominique en haut à droite et choisissez **Sign out**.
1. une fois déconnectez, fermez votre navigateur Internet (tous les onglets).

## Tâche 3 - Tester l'authentification multifactorielle
1. Cliquez sur l'icône de **Microsoft Edge** sur la barre des tâches pour ouvrir une nouvelle session de navigation et réouvrez le portail **Microsoft 365 Admin center** en utilisant l'url suivante ```https://admin.microsoft.com```
1. Dans la fenêtre **Pick an Account**, choisissez **dom@[onmicrosoftDomain].onmicrosoft.com**.
1. Dans la fenêtre **Enter password**, entrez **```ibForm@tion```** et cliquez sur **Sign in**.
1. La MFA étant maintenant active pour Dom, une fenêtre **More information required** apparait. Cliquez sur **Next**.
1. Reportez-vous à la procédure [Mise en place de la M.F.A pour les ateliers Microsoft](../mfaSetup) pour activer la génération de codes pour Dominique dans une application de MFA tierce (vous vous référerez à **l'étape 2a** et non à l'étape 2b de la procédure).
1. Après votre connexion avec la MFA, si une fenêtre **Stay signed in?** apparait, sélectionnez **Don't show this again** et cliquez sur **Yes**.
1. Le portail **Microsoft 365 Admin Center** devrait désormais être affiché.
	>**Note :** Référez-vous à la procédure précédemment mentionnée pour toutes vos connexions ultérieures avec le compte de Dominique.

## Résultat
A l'issue de ce deuxième exercice, vous avez testé l'authentification multifactorielle.

Vous pouvez poursuivre par [l'exercice 3 - Gestion des groupes](lab2e3)