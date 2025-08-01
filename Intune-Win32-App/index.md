---
layout: page
title: "Installation d'une application Windows Win32 via Intune"
synopsis: "Tester de manière la plus simple et rapide possible l'outil IntuneAppUtil pour préparer et installer une application Windows Win32 sur un poste géré par Intune'"
length: "00"
date: "31/07/2025"
---
# Scenario
Dans cet atelier, il vous est proposé de tester l'installation via Intune d'une application Win32 sur un poste Windows. Vous allez pouvoir préparer l'application pour installation puis paramètrer son installation par Intune.

# Prérequis
Il vous faut : 
- une machine (physique ou virtuelle) Windows 10/11 à jour .
- Un environnement 365 avec license Intune dans lequel la machine précédente est enrolée.

## Etape 1: Récupération des composants logiciels nécessaires
Dans cette tâche, vous allez télécharger les logiciels qui vous serviront pour les opérations suivantes.
>**Nota :** Il est plus simple de réaliser l'ensemble des manipulations de ce tutoriel en étant connecté avec un compte administrateur.
1. Après avoir une session sur la machine "admin" (qui peut être différente de la machine cible du test), cliquez sur le lien suivant pour accéder à la page du dépot de l'application **Intune Win32 content prep Tool** :
  ```https://github.com/Microsoft/Microsoft-Win32-Content-Prep-Tool```  
1. Une fois sur la page du dépot Github, cliquez sur le lien vers l'outil **IntuneWinAppUtil.exe**.
1. Sur la page **Microsoft-Win32-Content-Prep-Tool/IntuneWinAppUtil.exe**, cliquez sur l'icone de téléchargement *Download Raw file* (petite flèche pointant vers le bas, dans le menu tout à droite de la page)
1. Saisissez ensuite l'adresse suivante dans votre navigateur Internet pour y télécharger l'installation de **Visual Studio Code**: 
  ```https://code.visualstudio.com/download```
>**Nota :** **Visual Studio Code** n'est pas nécessaire pour la manipulation proposée ici : c'est l'application dont nous nous proposons de tester l'installation (vous pouvez essayer avec une autre application Win32 si vous le préférez)...  
1. Sur la page **Download Visual Studio Code**, cliquez simplement sur le bouton **Windows**.
1. Une nouvelle page s'ouvre, pointant sur la documentation de visual studio code, et l'installateur **VSCodeUserSetp-x64.exe** est téléchargé.
1. Réduisez le navigateur dans la barre des tâches, nous l'utiliserons plus loin pour Intune.

## Etape 2: Préparation du logiciel à installer
Dans cette étape, vous allez préparer le fichier nécessaire pour que l'installation de l'application Win32 puisse être installée par Intune par la suite.
1. Sur la barre des tâches, cliquez sur l'icone de l'explorateur de fichiers **File explorer** pour le lancer.
1. Dans l'explorateur de fichiers, double-cliquez sur la librairie des téléchargements **Downloads**
1. Renommez le fichier d'installation **VSCodeUserSetup-x64XXXXXXX.exe** pour en supprimer la version et l'appeler **VSCodeUserSetup-x64.exe**
1. Dans le dossier des téléchargements, créez un nouveau dossier nommé **vsCode** et glissez-y le fichier **VSCodeUserSetup-x64.exe**
1. Utilisez la recherche de la barre des tâches pour lancer l'outil **Windows Powershell**
1. Dans la fenêtre **Windows Powershell**, utilisez les commandes suivantes pour préparer le fichier pour Intune :
  1. ```cd .\downloads```
  1. ```.\IntuneWinAppUtil.exe -c .\vsCodeSource -s VScodeUserSetup-x64.exe -o .\vsCode```
1. Appuyez sur **Y** et [Entrée] pour valider la création du répertoire cible **vsCode**
1. Patientez pendant la génération du package d'installation **.\vsCode\vsCodeUserSetup-x64.intunewin**....

## Etape 3: Affectation du package préparé dans Intune
Dans cette étape, vous allez affeter votre package logiciel dans Intune, afin de le voir installé dans le contexte de l'utilisateur sur la machine de test.
1. De retour dans votre navigateur, ouvrez le portail d'administration Intune, à l'adresse ```https://intune.microsoft.com/```
1. Connectez-vous avec votre compte administrateur Intune
1. Cliquez sur la section **Apps** dans le menu de gauche
1. CLiquez ensuite sur le choix **All Apps** dans le menu de la section **Apps** de Intune.
1. Cliquez sur le bouton **+ Create**
1. Dans le panneau **Select app type**, choisissez le type **Windows app (Win32)** en bas du menu dans la section *Others* avant de cliquer sur **Select**.
1. Dans la page **Add App**, cliquez sur le lien **Select app package file**
1. Allez chercher le fichier **vsCodeUserSetup-x64.intiunewin** dans le dossier **Downloads\vsCode**, ajoutez-le et cliquez sur **OK**.
1. Dans la page **App information**, remplaçez le nom de l'application par ```Visual Studio Code``` 
1. Dans le champ **Publisher**, saisissez ```Microsoft```et cliquez sur **Next**
1. Dans le champ **Install command** et **Uninstall command**, saisissez ```VScodeUserSetup-x64.exe /VERYSILENT```
1. Dans le champ **Uninstall command**, saisissez ```"%USERPROFILE%\AppData\Local\Programs\Microsoft VS Code\unins000.exe" /VERYSILENT"```
1. Basculez le mode **Install behavior** sur **User** et cliquez sur **Next**
1. dans le champ **Minimum operating system**, sélectionnez **Windows 10 1607** et cliquez sur **Next**
1. dans le champ **Rule format**, sélectionnez **Manually configure detection rules** et cliquez sur **+Add**
1. dans le panneau **Detection rule** qui s'ouvre alors, sélectionnez le type **File** dans le champ **Rule Type**
1. Saisissez ```%USERPROFILE%\AppData\Local\Programs\Microsoft VS Code``` dans le champ **Path** et ```Microsoft VS Code``` dans le champ **File or folder**
1. Sélectionnez **File or folder exists** dans le champ **Detection method** et cliquez sur **Ok**.
1. Cliquez trois fois sur **Next** pour arriver à la page **Assignments**.
1. Sur l'onglet **Assignments**, cliquez sur **+Add all users** dans la section **Required** avant de cliquer sur **Next** puis **Create**.
1. Attendez que le package applicatif soit uploadé sur Intune en surveillant la zone de notification.

## Etape 4: Résultat de l'installation
1. Connectez-vous sur la machine cible de l'installation.
1. Après quelques minutes (n'hésitez pas à redémarrer la machine, cela peut accélérer le processus de synchronisation avec Intune) vous devriez voir apparître la fenêtre **Get Started with VS Code** (Visual Studio Code étant configuré par défaut pour s'ouvrir après son installation réussie).
1. Retournez sur votre machine administrative, dans le navigateur ou le portail Intune est resté ouvert sur la page représentant votre package applicatif **Visual Studio Code**. Après quelques minutes (réfraichir et forcer la synchonisation de votre machine de test peut aider), vous devriez voir l'état **Installed** passer de 0 à 1 !