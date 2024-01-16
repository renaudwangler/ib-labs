---
layout: stage
title: "Lab1-Ex1 - Création de l'environnement"
length: "00"
date: "18/12/2023"
---
# Scénario
A travers les ateliers de ce stage, vous allez prendre l'identité de Marie Skyetson, administratrice Microsoft 365 de *ib Cegos Workshop (ICW)*. En tant que Marie, il vous a été demandé de créer un environnement de test Microsoft 365. Vous allez donc commencer par créer un nouveau tenant Microsoft 365 en utilisant le programme.  
Vous allez ensuite vous assurer que les machines virtuelles de l'environnement de test soient correctement configurées, avant de voir les options de cutomisation applicables sur l'ensemble de l'organisation.


Vous allez commencer par vous connecter sur la machine **LON-DC1** en utilisant le compte administrateur  **icw\administrator**, pour ensuite vous connecter au tenant Microsoft 365 avec le compte **MOD Administrator**. Vous allez ensuite mettre à jour le profil de l'entreprise *ib Cegos Workshop*.  

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- La configuration des options globales pour tous les utilisateurs de l'entreprise 
- La navigation dans le portail **Microsoft 365 admin center**
- La manière de suivre les informations que Microsoft fournit concernant l'état de santé du service.  

## Avant de commencer
Votre formateur/trice pourra, le cas échéant, vous donner quelques indications complémentaires concernant l'environnement d'atelier que vous utiliserez.  
dans votre environnement d'atelier, goDeploy a déjà créé un tenant Microsoft 365 de test pour vous. Quelques comptes utilisateurs ont déjà été créés dans cet environnement ainsi que deux comptes administrateur :  
- Un compte administrateur local pour l'environnement *ib Cegos Workshop* (icw\administrator).  
- Un compte administrateur du tenant Microsoft 365 (dont le nom affiché est *Marie-A Skyetson*).  

## Tâche 1 - Création d'un compte Microsoft.
Pour créer votre environnement de test, vous allez avoir besoin d'un nouveau compte Microsoft 
>**Nota :** Afin de ne pas risquer de faire des modifications malencontreuses sur un environnment personnel, il est fortement recommandé de ne pas utiliser un compte déjà créé par le passé. Cependant, les informations personnelles associé au compte (N° de téléphone, entre autre) étant unique, si vous devez réutiliser un compte Microsoft existant pour y associer un compte de test, commencez simplement par la tâche 2 plus avant.  

Pour faciliter les manipulations nous vous recommandons (particulièrement si vous utilisez une machine sur laquelle vous travaillez habituellement) d'utiliser/installer un autre navigateur Internet que celui que vous utilisez habituellement (pour éviter tout problème de connexion automatique par exemple).  
1. Ouvrez votre navigateur internet et rendez-vous à l'adresse ```https://signup.live.com/```.
1. Cliquez sur **Obtenez une nouvelle adresse e-mail/Get a new email adress**.
1. Choisissez un nom unique (par exemple, votre prénom suivi de la date du jour) et le nom de domaine **@outlook.com** et prenez bonne note de cette information avant de cliquer sur **Suivant/Next**
1. Choisissez un mot de passe assez complexe, prenez-en note, décochez les deux cases à cocher et cliquez sur **Suivant/next**
    >**Important :** Veillez à bien consigner **par écrit** le nom de connexion et le mot de passe de votre compte !  

1. Indiquez ```Marie``` dans le champ **Prenom/First name** et ```Skyetson``` dans le champ **Nom/Last name** avant de cliquer sur **Suivant/Next**
1. Indiquez votre date de naissance (attention à choisir une date ne faisant pas de vous une personne mineure) et cliquez sur **Suivant/next**
1. Le cas échéant, complétez les étapes de lutte contre les robots.  
    > **Nota :** Si votre navigateur semble tourner en boucle sur cette étape, il vous faudra créer votre compte Microsoft depuis une autre adresse IP (votre smartphone en 4G/5G par exemple)  
1. Sur la page de synthèse, clicquez sur **Continue**.
1. Sur la page **Rester connecté/Stay signed in**, cliquez sur **Yes**.

## Tâche 2 - Ajout d'un abonnement Visual Studio Essential.
1. Dans votre navigateur Internet, rendez-vous à l'adresse ```https://developer.microsoft.com/microsoft-365/profile``` et connectez-vous si nécessaire.
    > **Nota 1 :** A votre première connexion, il est possible que vous ayiez besoin de valider votre compte en recevant un SMS sur un numéro de téléphone ou un email sur une autre adresse de messagerie.  
    > **Nota 2 :** Dans la suite de ces ateliers, les interfaces présentées le seront en langue anglaise.

1. Sur la page **Join the Microsoft 365 Developer Program !**, remplissez les informations suivantes avant de cliquer sur **Next**:
    - **Pay/Région** : France
    - **Company** : ```ib Cegos Workshop```
    - **language preference** : English
    - **I accept the terms and conditions[...]** : cochez la case
1. Choisissez **Applications for internal use at my company** en réponse à la question **What is your primary focus as a developer?** puis cliquez sur **Next**
1. Cochez la case **Microsoft Graph** en réponse à la question **What areas of Microsoft 365 development are you interested in?** avant de cliquer sur **Save**
1. Sur la page **Set up your Mircosoft 365 E5 sandbox**, sélectionnez l'option **Instant sandbox** et cliquez sur **Next**.
1. Renseignez ensuite les informations suivantes avant de cliquer sur **Continuer** :
    - **Country/Region** : Europe / Middle East / Africa (Ireland)
    - **Admin username** : ```Marie-A```
    - **Admin password** : ```ibForm@tion1234```
    - **Confirm admin password** : ```ibForm@tion1234```
    - **Use alternative password for all 16 fictious users** : décochez la case
1. Sur la fenêtre **Add phone number for security**, ajoutez votre numéro de mobile (sur lequel vous pourrez recevoir une confirmation par SMS) et cliquez sur **Send code**
1. Saissez le code reçu dans le champ **Enter the code** et cliquez sur **Set up**
1. Une fois le compte créé, prenez bien note du nom de connexion de l'administrateur et cliquez sur **Accéder à l'abonnement** pour vous rendre dans l'environnement 365 de test mis à votre disposition.

## Tâche 3 - Correction du démarrage de PAR-DC1
Dans un environnement de test comme celui qui nous est fourni, qui ne contient qu'un seul contrôleur de domaine, le démarrage des machines peut poser problème. Afin de maximiser les chances que les manipulations des ateliers suivants se passent correctement, vous allez commencer par *corriger* le démarrage des VMs.
1. Lors de l'ouverture de votre environnement d'ateliers, vous devez vous connecter sur la machine virtuelle **PAR-DC1**.
1. Connectez-vous sur PAR-DC1 avec le compte ```Administrator``` et le mot de passe ```ibForm@tion```.
1. Attendez que l'outil **Server Manager** s'ouvre automatiquement.
1. Sur le menu de navigation de gauche de l'outil **Server Manager**, cliquez sur l'onglet **Local Server**
1. En face de la ligne **Windows Defender Firewall**, si vous voyez tout autre mention que **Domain: On**, cela indique un problème de démarrage que nous allons corriger ici.
1. Cliquez sur le lien mentionnant l'adresse IP de PAR-DC1 : **172.16.0.10**, situé en regard de la ligne **Ethernet**.
1. Dans le dossier **Network Connections** qui vient de s'ouvrir, sélectionnez la carte réseau **Ethernet**.
1. Faites un clic-droit sur la carte réseau Ethernet et choisissez **Disable**.
1. Refaites un clic-droit sur la même carte réseau pour choisir **Enable**.
1. Attendez que la mention sous le nom de la carte réseau ait changé de **Identifying** à **icw.ad**. Cela indique que le contrôleur de domaine a correctement démarré : fermez le dossier **Network Connections**.
1. De retour dans l'onglet **Local Server** du **Server Manager**, vous pouvez cliquer sur l'icône d'actualisation (en haut à droite) pour vérifier que la ligne **Windows Defender Firewall** mentionne désormais **Domain: On**.
1. Réduisez l'outil **Server Manager** dans la barre des tâches sans le fermer (vous en aurez besoin plus tard).
1. Maintenant que PAR-DC1 est correctement démarré, il vous suffit de redémarrer les autres machines virtuelles pour qu'elles s'*accrochent* correctement au réseau de domaine : Basculez sur la machine **PAR-CL1**.
1. Sur l'écran de connexion de PAR-CL1, cliquez sur l'icône **Power** (dernière icône en bas à droite) et choisissez **Restart**.
1. Eépétez l'opération précédente pour toutes les autre.
    > **Note :** Vous n'avez pas besoin d'attendre que les machines clientes aient redémarrer pour commencer la tâche suivante.  

## Tâche 4 - Profil d'entreprise de *ib Cegos Workshop*
1. Basculez sur la machine virtuelle **PAR-CL1**.
1. Sur la barre des tâches, cliquez sur l'icône de **Microsoft Edge** pour lancer votre navigateur. Maximisez la fenêtre du navigateur lorsqu'elle s'ouvre pour faciliter la navigation dans les portails administratifs.
1. Passez les éventuelles pages de bienvenue de Edge (vous pouvez choisir **Continue without signing in**).
1. Dans le navigateur, accédez au portail d'administration de Microsoft 365 en utilisant l'url suivante :
```https://admin.microsoft.com```
1. Dans la fenêtre **Sign in**, saisissez le nom de connexion du compte *Marie-A Skyetson* (sous la forme **Marie-A@xxxxxx.onmicrosoft.com**) et cliquez sur **Next**
1. Dans la fenêtre **Enter password**, saisissez ```ibForm@ion1234``` cliquez sur **Sign in**
    > **Note :** A chaque fois que le navigateur Internet vous propose de mémoriser le mot de passe d'un compte, vous pouvez cliquer sur **Got it** pour vous faciliter les futurs accès à ce compte.
1. Sur la fenêtre **Stay signed in?**, cochez la case **Don’t show this again** et cliquez sur **Yes.**
1. Si un popup **Welcome to Microsoft 365** apparaît, cliquez deux fois sur la flèche droite pour pouvoir le fermer.
1. Dans le **Microsoft 365 admin center**, dans le menu de navigation de gauche, sélectionnez **...Show all** pour voir tous les choix dudit menu.
    > **Note :** Si le menu de navigation n'apparait pas, cliquez sur les trois lignes horizontales en haut à gauche de la fenêtre pour le faire apparaitre.

1. Dans le menu de navigation, cliquez sur **Settings** pour en ouvrir le groupe d'options, puis cliquez sur **Org Settings**.
1. Dans la fenêtre **Org Settings**, c'est l'onglet **Services** qui est affiché par défaut. Puisque vous souhaitez modifier le profil de l'entreprise, cliquez sur l'onglet **Organization profile** pour l'afficher.
1. Cliquez ensuite sur **Organization information**.
1. Dans la fenêtre **Organization information** qui s'affiche, modifiez les informations suivantes :
    - Name : ```ib Cegos Workshop```
	- Technical contact : *Marie-A@xxxxxx.onmicrosoft.com*
1. Cliquez ensuite sur **Save**.
1. Une fois les modifications sauvegardées, un message ***Saved*** apparaît en haut de la fenêtre dans un encadré vert. Cliquez sur le **X** tout en haut à droite de la fenêtre **Organization information** pour la fermer.
1. Vous êtes de retour sur l'onglet **Organization profile** de la fenêtre **Org settings**, sélectionnez dès lors **Release preferences**.
1. Dans la fenêtre **Release preferences**, sélectionnez **Targeted release for select users** et cliquez sur **Save**.
	> **Note :** Un des avantages de Microsoft 365 est la possibilité de tirer parti des dernières fonctionnalités et mises à jour automatiquement dans votre tenant, ce qui va réduire les couts de maintenance et la surcharge administrative pour une entreprise. L'option **Targeted release for select users** vous permet de garder le contrôle des utilisateurs qui auront les mises à jour et nouvelles fonctionnalités en premier, afin de préparer sereinement l'entreprise à l'arrivée de ces nouveautés pour tout le monde.  

1. Sous votre choix **Targeted release for select users** S'affichent désormais les possibilités **Select users** et **Upload users** (depuis un fichier CSV). Cliquez sur **Select users**.
1. Dans la fenêtre **Choose users for targeted release**, cliquez dans le champ **Who should receive targeted releases?**. Vous allez ainsi avoir accès à la liste des comptes utilisateurs existant.
1. Dans la liste des utilisateurs, sélectionnez *Marie-A Skyetson* avant de cliquer sur **Save**.
1. Dans la fenêtre **Release preferences** , cliquez sur le **X** de fermeture en haut à droite.
1. De retour sur l'onglet **Organization profile** de la fenêtre **Org settings**, sélectionnez **Custom themes**.
1. Dans la fenêtre **Custom themes**, cliquez sur le thème **Default theme**.
1. Dans la fenêtre **Default theme**, prenez le temps de parcourir les différentes options d'affichage et de customisation d'affichage qui s'offrent à vous. Pour les besoins de l'atelier, n'hésitez pas à modifier quelques paramètres ici pour voir comment ils seront appliqués aux utilisateurs de *ib Cegos Workshop*.
1. Si vous avez fait des changements dans le thème par défaut, cliquez sur **Save** lorsque vous avez terminé. Cliquez ensuite sur le **X** en haut à droite pour fermer la fenêtre **Default theme**.
1. Restez connecté sur PAR-CL1 VM et laissez votre navigateur Internet ouvert pour la tâche suivante de cet atelier.

## Tâche 5 - Vérification du service Microsoft 365
Dans cette tâche, vous allez vérifier l'état de santé du service Microsoft 365 sur votre tenant.
1. A la suite de la tâche précédente, vous devriez toujours être connecté sur **PAR-CL1** avec le compte **Administrator** et être connecté sur le portail d'administration de Microsoft 365 sous le compte **Marie-A Skyetson**.
1. Dans le portail **Microsoft admin center**, dans le menu de navigation, ouvrez le groupe **Health** pour choisir l'option **Service health**. Cela fait apparaitre le dashboard **Service health**.
1. Sur la page **Service health**, l'onglet **Overview** est affiché par défaut. Cet onglet affiche les problèmes concernant actuellement les services Microsoft 365 disponibles avec vos abonnements.
	> **Note** : Si aucun problème n'est actuellement listé, vous pouvez toujours cliquer sur l'onglet **Issue history** pour réaliser l'opération suivante.  

1. Cliquez sur une ligne représentant un problème pour observer le détail des informations fournies par l'éditeur sur ce problème et son état actuel de prise en charge et/ou de résolution.
1. Après avoir observé les détails d'un problème, cliquez sur le **X** en haut à droite pour le fermer et n'hésitez pas à aller en observer d'autres.
1. Restez connecté sur PAR-CL1 et laissez votre navigateur Internet ouvert pour l'exercice suivant de vos ateliers.  

## Résultat
A l'issue de ce premier exercice, vous avez vérifié la création du tenant pilote pour *ib Cegos Workshop*, configuré quelques options pour toute l'entreprise et vérifié l'état de santé des services Microsoft 365.

# Fin de l'atelier 1