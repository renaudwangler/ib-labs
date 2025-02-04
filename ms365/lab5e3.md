---
layout: stage
title: "Lab5-Ex2 - Configuration de la protection de la messagerie"
length: "00"
date: "10/01/2025"
script: "ms365.js"
---
# Scénario
Dans cet exercice, vous allez continuer, sous l'identité de Dominique Skyetson, Administrateur de l'entreprise Adatum à déployer Microsoft 365 dans un environnement virtuel pilote. Adatum a récemment constaté une recrudescence des attaques virales. Le CTO de l'entreprise a demandé à Dominique de rechercher les différentes options disponibles dans Exchange Online pour fortifier l'environnement de messagerie de Adatum.  
Vous allez accéder au centre d'administration de Exchange Online depuis votre machine cliente et créer une série de règles de filtrage d'hygiène pensées pour protéger l'environnement de messagerie de Adatum. Vous allez créer un filtre antiviral, un filtre de connexion et un filtre de spam. Au final, vous activerez Microsoft Defender for Office, qui protègera Adatum des attaques malicieuses contenues dans les emails, les liens (URLs) et les autres outils de collaboration.

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- Les stratégies antivirales de Microsoft 365
- Les stratégies antispam de Microsoft 365
- Defender for Office et les stratégies *Safe attachment*


## Tâche 1 - Créer un filtre antiviral
Dans cette tâche, vous allez créer un filtre antiviral pour les pièces jointes d'un type de fichier particulier qui pourraient correspondre à une attaque potentielle. Si une pièce jointe correspond à un des types de fichiers et que le domaine destinataire est le domaine de Adatum, alors un message préventif sera appliqué au message.
1. Vous devriez encore être connecté sur **LON-CL1** à l'issue de l'atelier précédent. Les portails **Microsoft 365 admin center** et **Exchange admin center** devraient encore être resté ouverts dans votre navigateur (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. Dans le portail **Microsoft 365 Admin center**, sous la section **Admin Centers** du menu de navigation à gauche, cliquez sur **Security**.
1. Dans le portail **Microsoft 365 Defender**, dans le groupe d'options **Email &amp; collaboration** du menu de navigation, cliquez sur **Policies &amp; rules**.
1. Sur la page **Policies &amp; rules**, cliquez sur **Threat policies**.
1. Sur la page **Threat policies**, cliquez sur **Anti-malware** dans la section **Policies**.
1. Sur la barre de menu, cliquez sur **+ Create** pour ajouter un nouveau filtre antiviral.
1. Sur la page **Name your policy**, entrez ```Malware Policy``` dans le champ **Name**.
1. Dans le champ **Description**, saisissez ```This policy has been created to protect the messaging environment.``` avant de cliquer sur **Next**.
1. Sur la page **Users and Domains**, cliquez dans le champ **Domains** et tapez ```onmicrosoft```pour sélectionner votre domaine original (**WWLxxxxx.onmicrosoft.com** et pas WWLxxxxx.mail.onmicrosoft.com) avant de cliquer sur **Next**.
1. Sur la page **Protection settings**, constatez les valeurs par défaut et les options disponibles et cliquez sur **Next**.
1. Sur la page **Review**, cliquez sur le bouton **Submit** (vous pouvez aussi choisir d'annuler l'assistant car vous ne testerez pas cette stratégie antivirale).
1. Sur la page **Created new anti-malware policy**, cliquez sur **Done**.
1. Dans le menu de navigation séquentielle en haut de page, cliquez sur **Threat policies** pour remonter d'un niveau.

## Tâche 2 - Créer un filtre de connexion
Dans cette tâche, vous allez modifier le filtre de connexion par défaut pour y inclure une IP bloquée et une IP de confiance. Tout message venant d'une IP de confiance sera accepté, tandis que tout message venant d'une IP bloquée sera bloqué.
1. Vous devriez encore être connecté sur **LON-CL1** à l'issue de l'atelier précédent. Les portails **Microsoft 365 admin center**, **Exchange admin center** et **Mircosoft 365 Defender** devraient encore être resté ouverts dans votre navigateur (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. Dans le portail **Microsoft 365 Defender**, sur la page **Threat policies**, cliquez sur **Anti-spam**.
1. Dans la liste des stratégies, sélectionnez **Connection filter policy (Default)**.
1. Une fois le panneau des détails de la stratégie affiché, cliquez sur le lien **Edit connection filter policy**.
1. Dans le contexte de l'atelier, vous **N'ALLEZ PAS** ajouter d'adresse IP bloquée. Vous pourriez le faire si vous aviez connaissance d'une adresse que vous souhaitez tester et/ou marquer comme problématique. Cependant, il faudra à peu près une heure pour que ce changement se propage sur la globalité de l'environnement. Pour votre atelier, il est suffisant de constater que vous êtes à même d'ajouter une adresse IP dans cette interface.
1. Cochez la case **Turn on safe list** plus bas dans la page. C'est un conseil d'activer cette fonction pour votre *tenant* pour souscrire à la gestion par Microsoft des adresses à problèmes les plus connues. Cocher cette case supprimera automatiquement les messages de spam émis par ces émetteurs.
1. Cliquez sur les boutons **Save** puis **Close** une fois les changements sauvegardés.
1. Laissez votre navigateur Internet ouvert sur l'onglet **Anti-spam policies** pour la tâche suivante.

## Tâche 3 - Créer un filtre antispam
Pour les clients Microsoft 365 dont les boites aux lettres sont hébergées sur Exchange Online, leurs messages sont automatiquement protégés contre les spams et les virus. Microsoft 365 a des fonctionnalités natives de filtrage antispam et antivirales qui protègent les flux de messages entrants et sortants.  
En tant qu'administrateur de Adatum, Dominique souhaite activer et maintenir les technologies de filtrage utilisées, qui sont activées par défaut. Ceci étant, il peut customiser l'utilisation de ces technologies dans le contexte de l'entreprise.
1. Vous devriez encore être connecté sur **LON-CL1** à l'issue de l'atelier précédent. Les portails **Microsoft 365 admin center**, **Exchange admin center** et **Mircosoft 365 Defender** devraient encore être resté ouverts dans votre navigateur (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. Dans le portail **Microsoft 365 Defender**, sur la page **Anti-spam policies**, cliquez sur **Anti-spam inbound policy (Default)**.
1. Dans le panneau **Anti-spam inbound policy (Default)** qui s'affiche, descendez pour cliquer sur le lien **Edit actions**.  
	>**Note :** Dans cette section vous sont présentées une sélection d'options sur la manière dont seront repérés les spam et la manière dont ils seront traités en fonction de leur niveau de gravité.
1. Dans la fenêtre **Actions**, réalisez les sélections suivantes :
	- Spam : **Move message to Junk Email folder**
	- High Confident Spam : **Prepend subject line with text**
	- Bulk complaint level (BCL) met or exceeded : **Move message to Junk Email folder**
	- Retain spam in quarantine for this many days: **10**
	- Prepend subject line with this text: saisissez ```SPAM: This message contains potential spam```
1. Cliquez sur le bouton **Save**.
1. Une fois les modifications sauvegardées, cliquez sur **Close**.
1. Laissez votre navigateur Internet ouvert sur l'onglet **Anti-spam policies** pour la tâche suivante.

## Tâche 4 - Stratégie *Safe attachment*
Dans cette dernière tâche, vous allez activer **Defender for Office** pour Sharepoint, OneDrive et Teams et vous allez créer une stratégie *Safe Attachments* qui va permettre de tester les pièces jointes des messages non détectées comme problématiques par l'antivirus. Vous allez configurer la stratégie de sorte que si une pièce jointe est problématique, elle soit retirée du message avant sa livraison au destinataire et qu'une copie du message original soit envoyée dans la boite de Dominique Skyetson pour investigation plus poussée.
1. Vous devriez encore être connecté sur **LON-CL1** à l'issue de l'atelier précédent. Les portails **Microsoft 365 admin center**, **Exchange admin center** et **Mircosoft 365 Defender** devraient encore être resté ouverts dans votre navigateur (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. Dans le portail **Microsoft 365 Defender**, en haut de la page **Anti-spam policies**, dans le menu séquentiel, cliquez sur **Threat policies** pour remonter d'un niveau.
1. Dans la section **Policies**, cliquez sur **Safe attachments**.
1. Sur la page **Safe attachments**, cliquez sur **Global settings** dans la barre de menu.
1. Dans le panneau **Global settings** qui s'affiche, dans la section **Protect files in SharePoint, OneDrive, and Microsoft Teams**, activez l'option **Turn on Defender for Office 365 for SharePoint, OneDrive and Microsoft Teams** si elle ne l'est pas et cliquez sur **Save** (cliquez sur **Cancel** si vous n'avez fait aucun changement).
1. Sur la page **Safe attachments**, cliquez sur **+ Create** dans la barre de menu pour créer une nouvelle stratégie.
1. Sur la page **Name your policy**, saisissez ```AttachmentPolicy1``` dans le champ **Name** avant de cliquer sur **Next**.
1. Sur la page **Users and domains**, cliquez dans le champ **Domains** et tapez ```onmicrosoft```. Sélectionnez ensuite votre domaine **WWLxxxxx.onmicrosoft.com** et cliquez sur **Next**.
1. Sur la page **Settings**, dans la section **Safe attachments unknown malware response**, choisissez l'option **Dynamic Delivery**. Cette option permet l'envoi des message traités à leur destinataire dès leur réception, mais sans permettre l'accès à la pièce jointe tant que celle-ci n'a pas été correctement scannée comme sans danger.
1. Sous la section **Redirect messages with detected attachments**, cochez la case **Enable redirect**.
1. Dans le champ **Send messages that contain monitored attachments to the specified eemail address**, entrez l'adresse de Dominique Skyetson (**dom@WWLxxxxx.onmicrosoft.com**) avant de cliquer sur **Next**.
1. Sur la page **Review**, cliquez sur le bouton **Submit** puis **Done*.
	(Vous pouvez aussi cliquer sur **Cancel** puisque cette stratégie ne sera pas testée)
1. Laissez la session ouverte sur LON-CL1 et ne fermez pas votre navigateur Internet pour l'exercice suivant.

>**NOTE :** Malheureusement, il nous est impossible de créer un environnement d'ateliers dans lequel vous pourriez tester les stratégies que vous venez de créer. Pour ce faire, il vous faudrait vous envoyer un message contenant une cyber-attaque qui ne serait pas préalablement détectée par les antivirus de l'environnement Microsoft 365.  
Ceci étant dit, après avoir crée une stratégie *Safe Attachments* dans un environnement de production, une bonne manière de constater son bon fonctionnement peut être la consultation des rapports de Defender for office dans le portail. Pour plus d'information sur leur utilisation, vous pouvez consulter la section suivante de la documentation : [View Defender for Office 365 reports in the Microsoft 365 Defender portal](https://learn.microsoft.com/microsoft-365/security/office-365-security/reports-defender-for-office-365).

## Résultat
Au cours de cet exercice, vous avez configuré les paramètres anti-spam et anti-virus de Microsoft 365.

Vous pouvez poursuivre par [l'exercice 3 - Configuration des stratégies d'accès clients](lab5e3)