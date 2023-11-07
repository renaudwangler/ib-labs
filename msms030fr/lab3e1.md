---
layout: stage
title: "Utilisation de Microsoft 365 connectivity analyzer"
length: "00"
---
# Scénario
Le *Remote Connectivity Analyzer* est un outil web pensé pour aider les administrateurs IT à dépanner les soucis de connectivité avec leurs déploiement Exchange, Microsoft 365 et Teams. Dominique Skyetson, en tant qu'administrateur de Adatum, doit savoir utiliser cet outil si une configuration erronnée vient interrompre les communications dans le projet pilote par exemple.

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- L'outil *Microsoft Connectivity Analyzer*
- L'outil *Support And Recovery Assistant*

## Tâche 1 - Test de connectivité
1. Vous devriez encore être connecté sur **LON-CL1** à l'issue de l'atelier précédent. Le **Microsoft 365 admin center** devrait encore être resté ouvert dans votre navigateur et vous devriez y être connecté avec le compte *Dominique Skyetson*.
1. Ouvrez un nouvel onglet dans le navigateur et rendez-vous à l'adresse du *Remote Connectivity Analyzer* : ```https://testconnectivity.microsoft.com```

1. Sur la page **Microsoft Remote Connectivity Analyzer**, dans le menu de navigation vertical à gauche, l'onglet **Office 365** est affiché par défaut. Sur cet onglet, sélectionnez la tuile intitulée **Exchange Online Custom Domain DNS Connectivity Test**.
1.Sur la page **Exchange Online Custom Domain DNS Connectivity Test**, saisissez les informations suivantes :  
	- Entrez **WWLxxxxx.onmicrosoft.com** (en remplaçant par votre domaine de tenant) dans le champ **Domain Name**
	- Dans la section **Service Selection**, Laissez cochée la case **Office 365 (Default)**
	- Dans la section  **Verification**, saisissez la suite de caractères affichés en violet (Le code de vérification est insensible à la casse) avant de cliquer sur **Verify**.
1. Si la vérification se passe correctement, un message apparaît en bas de page indiquant : **You are now verified for the rest of this browser session (30 minute maximum).**
1. Cliquez sur **Perform Test**.
	>**Note :** Si vous recevez un message concernant le fait d'avoir réalisé trop de tests les 60 dernières secondes, attendez quelques instant avant de réessayer.

1. Lorsque vous voyez appraître le message **Successfully verified specified external domain name settings for your domain in Office 365**, cliquez sur la flèche basse **V** à gauche de **Test Steps** (cliquez sur le texte **Test Steps** lui-même ne fonctionne pas) afin de parcourir les étapes vérifiées lors de ce test de votre domainde de tenant.

## Tâche 2 - Test de connectivité Exchange
1. Sur la page **Microsoft Remote Connectivity Analyzer**, dans le menu de navigation vertical à gauche, cliquez sur l'onglet **Office 365**.
1. Sélectionnez la tuile intitulée **Outlook Connectivity**.
1.Sur la page **Outlook Connectivity**, saisissez les informations suivantes :  
	- Entrez **admin@WWLxxxxx.onmicrosoft.com** (en remplaçant par votre domaine de tenant) dans le champ **Email Address**
	- Cliquez sur le bouton bleu **Sign in** et authentifiez vous avec les informations de *MOD Administrator*
	- En bas de page, cochez la case **I understand that I must use the credentials of a working account from my Exchange domain to be able to test connectivity to it remotely. I also acknowledge that I am responsible for the management and security of this account**.
1. Cliquez sur **Perform Test**.
	>**Note :** Si vous recevez un message concernant le fait d'avoir réalisé trop de tests les 60 dernières secondes, attendez quelques instant avant de réessayer.

1. Lorsqu'apparait le message **The Outlook connectivity test completed successfully** message, cliquez sur la flèche basse **V** à gauche de **Test Steps** (cliquez sur le texte **Test Steps** lui-même ne fonctionne pas) afin de parcourir les étapes vérifiées lors de ce test de connectivité.  
Chaque étape a une mention **Test Steps** que vous pouvez utiliser pour consulter des opérations détaillées. 

## Tâche 3 - Utiliser le *Support and Recovery Assistant*
L'outil *Support and Recovery Assistant* (SARA) a pour but de lancer des tests sur une machine pour corriger des problèmes concernant l'exploitation d'outils Microsoft sur cette machine. Si l'outil ne peut corriger un problème, il suggérera dans tous les cas les opération à réaliser ensuite pour avancer dans sa résolution et pourra vous aider à contacter le support de Microsoft.  
Dans cette tâche, vous allez télécharger et installer l'outil SARA sur LON-CL1.
1. Dans le menu de navigation vertical à gauche de la page **Microsoft Remote Connectivity Analyzer**, cliquez sur le choix **SARA Client**. Ceci va ouvrir un nouvel onglet dans le navigatuer, sur la page **About the Microsoft Support and Recovery Assistant**.
1. Sur la page**About the Microsoft Support and Recovery Assistant**, descendez un peu pour cliquer sur le bouton **Download** dans l'étape **1** (sous les scenarii). Le fichier **SaraSetup.exe** est téléchargé dans votre navigateur.
1. Une notification devrait appraitre en haut à droite de **Edge** vous permettant de cliquer sur **Open file** sous le nom du ficher **SaraSetup.exe** téléchargé pour lancer l'assistant d'installation.
	>**Note :** Si la notifcation n'apparaît pas, vous pouvez aller chercher le fichier téléchargé dans le dossier des télécharements (**Downloads**) de LON-CL1 et cliquer dessus pour lancer l'assistant d'installation.

1. Dans l'assistant **Microsoft Support and Recovery Assistant Setup**, sur la page **Do you want to install this application?**, cliquez sur **Install**.
1. Dans la fenêtre **Microsoft Support and Recovery Assistant Setup**, un contrat de licence va s'afficher une fois que l'application aura été complétement téléchargée. Cliquez alors sur **I agree** en bas de page.
1. Sur la page **Which app are you having problems with?**, sélectionnez **Windows** et cliquez sur **Next**.
1. Sur la page **Select the problem you're having**, sélectionnez **I've installed Windows but I can't activate it** et cliquez sur **Next**.
1. Sur la page suivante vous demandant si c'est la machine actuelle qui est impactée, sléectionnez **Yes** et cliquez sur **Next**.
1. Une fois que l'assistant de support a fini sa véridfication, cliquez sur **Next** jusqu'à arriver sur une page **Hi, did this solve your problem ?**.
1. Sur la page **Hi, did this solve your problem ?**, cliquez sur **Yes** puis **Submit**
1. Fermez votre navigateur Internet, vous pouvez passez à l'atelier suivant.
# Fin de l'atelier 3