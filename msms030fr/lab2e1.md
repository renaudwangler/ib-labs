---
layout: stage
title: "Lab2-Ex1 - Gestion des utilisateurs avec le centre d'administration 365"
length: "00"
---
# Scénario
Dominique Skyetson est l'administrateur d l'entreprise Adatum. Comme il n'a pas de compte utilisateur Microsoft 365 déclaré pour lui-même, Dominique s'est jusqu'à présent connecté à l'administration du tenant avec le compte *Mod Administrator*. dans cet exercice, il va se créer son compte et y assigner le rôle *Global Administrator* qui lui permettra ensuite de faire toutes les actions administratives sur le tenant de manière nominative.
Prenant le rôle de Dominique, vous allez ensuite créer plusieurs comptes utilisateurs en utilisant le centre d'administration 365 que vous serez par la suite amené à ajouter à des groupes pour gérer la sécurité. Bien que les administrateurs de plus haut niveau de l'entreprise ne créent pas habituellement des comptes utilisateurs, il vous est nécessaire de le faire en attendant que la configuration complète du tenant pilote soit terminée et que les comptes soient automatiquement synchronisés.  
**Important :** Pour votre environnement réel, il est très fortement conseillé de noter le mot de passe du compte *Global Admin* original (*Mod Administrator* dans notre atelier) et de le stocker de manière particulièrement sécurisée. Ce compte est un compte non nomminatif sur lequel il vous faudra peut-être compter lorsque tous les autres moyen de vous en sortir ne fontionneront plus. la MFA ne sera jamais activée sur ce compte (car il n'est pas nomminatif) et son mot de passe sera potentiellement partagé par plusieurs personnes, en faisant une cible idéale pour les attaques de sécurité. Il est donc conseillé de ne jamais l'utiliser au quotidien et de toujours préférer l'utiulisation de comptes personnalisés et nominatifs (comme celui de Dominique dans notre atelier) sur lesquels la MFA sera systèmatiquement éxigée.  
Dans le contexte de l'atelier, vous activerez la MFA pour le compte de Dominique dans le prochain exercice au cours duquel vous vous occuperez des stratégies de mots de passe.

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- la configuration des options globales pour tous les utilisateurs de l'entreprise 
- la navigation dans le portail **Microsoft 365 admin center**
- la manière de suivre les informations que Microsoft fournit concernant l'état de santé du service.  

## Tâche 1: Création d'utilisateurs
1. Vous devriez encore être connecté sur **LON-CL1** à l'issue du premier atelier. Le **Microsoft 365 admin center** devrait encore être resté ouvert dans votre navigateur et vous devriez y être connecté avec le compte *MOD Administrator*. 
1. 

1. Dans le portail **Microsoft 365 admin center**, dans le menu de navigation à gauche, ouvrez le groupe **Users** pour sélectionner l'entrée **Active users**.  
	>Puisque vous prenez le rôle de Domnique Skyetson pour cet exercice, vous allez vous créer un compte utilisateur pour vous même et lui affecter le rôle *Golabl Administrator*, donnant ainsi à Dominique l'accès à toutes les prérogatives administrtives dans l'environnement Microsoft 365.
1. Dans la fenêtre **Active Users**, cliquez sur **Add a user**.
1. Sur la page **Set up the basics**, saisissez les informations suivantes:
	- First name: **Dominique**
	- Last name: **Skyetson** 
	- Display name: En tabulant dans ce champ, il sera automatiquement rempli avec la valeur **Dominique Skyetson**.
	- Username: **dom**  
		>**IMPORTANT:** A droite du champ **Username** se trouve le domaine de l'utilisateur. Il sera rempli avec le domaine DNS configuré comme étant le domaine par défaut. Pour Adatum, iol s'agit du domaine que vous avez ajouté lors du premier atelier.  
		However, for the purposes of future lab exercises concerining directory synchronization, you should set the domain for each new user that you create in this task to the original **.onmicrosoft.com** cloud domain.  
		Therefore, you must select the drop-down arrow in this domain field and select **xxx.onmicrosoft.com** (if you can't select the *.onmicrosoft.com* domain, you may change it after the user is created).  	
		After configuring this field, Holly’s username should appear as:  
		**Holly@xxx.onmicrosoft.com**  
	- Password settings: uncheck **Automatically create a password** option
	- Password: **Pa55w.rd** (Hint: Select the eye icon at the right side of the field to verify the password that you entered)
	- Check the **Require this user to change their password when they first sign in** checkbox 
1. Select **Next**.
1. In the **Assign product licenses** window, enter the following information:
	- Select location: **United States**
	- Licenses: Verify the **Assign user a product license** option is selected and then select the **Microsoft 365 Business Premium** 
1. Select **Next.**
1. In the **Optional settings** window, click on the line **Roles (User: no administration access).**
1. Select the **Admin center access** title. This displays a list of the most commonly assigned administrator roles.
	>**Note** If a role you are assigning is not in this list, then you can select the **Show all by category** line to display all the available roles (sorted by category). However, in this case, Holly wants to assign herself the Global Administrator role. She can do this since she is logged in as the MOD Administrator, which is also a Global admin. Only a Global admin can assign another user the Global Administrator role.
1. Select **Global Administrator** and then select **Next**.
1. On the **Review and finish** window, review your selections. If anything needs to be changed, select the appropriate **Edit** link and make the necessary changes. Otherwise, if everything is correct, select **Finish adding**. 
1. On the **Holly Dickson added to active users** page, as a final verification, select **Show** that appears next to the **Password** to verify you entered **Pa55w.rd** correctly. 
1. Select the **Add another user** link at the bottom of the window to repeat steps 3-12, in order to add the following users and data:
	- **Username domain:** When you enter the **Username** for each of these users, make sure that you select the **.onmicrosoft.com** domain in the domain field, just as you did when you created Holly's username (if you can't select it, change it after creation).
	- **Password:** Assign each user the **Pa55w.rd** password, and just like with Holly's account, require they change the password at their first login.
	- **Licenses:** Assign **Alan Yoo** the **Microsoft 365 Business Premium** license. For all other users, select the **Create user without product license (not recommended)** option.
	- **Roles:** By default, a user is assigned the **User role (no administration access)**; this will be sufficient for these users for now. In Lab 2, Exercise 5, you will assign roles to the users. So when you reach the **Optional settings** window, select **Next** to bypass assigning a role.
	> **Alan Yoo** with username **alan**; assign an **Office 365 E5** license but no role  
	**Ada Russell** with username **ada**; do not assign a license or role  
	**Adam Hobbs** with username **adam**; do not assign a license or role  
	**Libby Hayward** with username **libby**; do not assign a license or role  
	**Laura Atkins** with username **laura**; do not assign a license or role 
1. Review the list of **Active users**. Verify that each user you added has *.onmicrosoft.com** as the domain portion of their username.
	> If any of the users has the lab domain as the domain portion of their username, select the checkbox near these users, select the **Change domains** icon in the menu bar. Then in the **Change domains** window, select the **.onmicrosoft.com** domain and then select **Save changes**. 
1. Remain logged into LON-CL1 with the Microsoft 365 admin center open in your browser for the next task.


## Tâche 2 : Profil d'entreprise de Adatum
A travers les ateliers de ce stage, vous allez prendre l'identité de Dominique Skyetson, administrateur Microsoft 365 de Adatum. En tant que Dominique, il vous a été demandé de configurer le profil de l'entreprise sur le tenant de test. Dans cette tâche, vous allez procéder à cette configuration. Puisque Dominique ne s'est pas encore créé de compte personnel dans l'environnement (ce sera fait à l'atelier suivant), vous allez d'abord vous connecter avec le compte *MOD Administrator* par défaut, dont vous avez précédemment noté le mot de passe.  
1. Lors de l'ouverture de votre environnement d'ateliers, vous devez vous connecter sur la machine virtuelle **LON-DC1**. Si votre environnement s'est ouvert sur une autre machine virtuelle par défaut, basculez sur la machine **Lon-DC1**.
1. Connectez-vous sur LON-DC1 avec le compte **ADministrator** et le mot de passe **Pa55w.Rd**.
    > **Note :** Si un panneau **Networks** s'affiche sur la droite de votre écran demandant si vous souhaitez activer la découverte sur le réseau, cliquez sur **Yes**.
1. Le **Server Manager** va s'ouvrir automatiquement. Laissez cette fenêtre ouverte mais réduisez-là dans la barre des tâches pour le moment.
1. Sur la barre des tâches, cliquez sur l'icône de **Microsoft Edge**. Passez les éventuelles pages de bienvenue (vous pouvez choisir **Continue without signing in**).
1. Dans le navigateur, accédez au portail d'administration de Microsoft 365 en utilisant l'url suivante :
```https://admin.microsoft.com```  
1. Dans la fenêtre **Sign in**, saisissez le nom de connexion du compte *MOD Administrator* (sous la forme **admin@WWWLxxxxxxxxxx.onmicrosoft.com**) et cliquez sur **Next**
1. Dans la fenêtre **Enter password**, saisissez ou collez le **mot de passe du tenant** que vous avez précédemment noté et cliquez sur **Sign in**
1. Sur la fenêtre **Stay signed in?**, cochez la case **Don’t show this again** et cliquez sur **Yes.**
1. Si un popup **Welcome to Microsoft 365** apparaît, cliquez deux fois sur la flèche droite pour pouvoir le fermer.
1. Dans le **Microsoft 365 admin center**, dans le menu de navigation de gauche, sélectionnez **...Show all** pour voir tous les choix dudit menu.
    > **Note :** Si le menu de navigation n'apparait pas, cliquez sur les trois lignes horizontales en haut à gauche de la fenêtre pour le faire apparaitre.
1. Dans le menu de navigation, cliquez sur **Settings** pour en ouvrir le groupe d'options, puis cliquez sur **Org Settings**.
1. Dans la fenêtre **Org Settings**, c'est l'onglet **Services** qui est affiché par défaut. Puisque vous souhaitez modifier le profil de l'entreprise, cliquez sur l'onglet **Organization profile** pour l'afficher. sélectionnez ensuite **Organization information**.
1. Dans la fenêtre **Organization information** qui s'affiche, modifiez les informations suivantes :
    - Name : **Adatum**
	- Technical contact : (l'adresse email du compte *MOD Administrator*)
1. Cliquez ensuite sur **Save**.
1. Une fois les modifications sauvegardées, un message ***Saved*** apparaît en haut de la fenêtre dans un encadré vert. Cliquez sur le **X** tout en haut à droite de la fenêtre **Organization information** pour la fermer.
1. Vous êtes de retour sur l'onglet **Organization profile** de la fenêtre **Org settings**, sélectionnez dès lors **Release preferences**.
1. Dans la fenêtre **Release preferences**, sélectionnez **Targeted release for select users** et cliquez sur **Save**.
	> **Note :** Un des avantages de Microsoft 365 est la possibilité de tirer parti des dernières fonctionnalités et mises à jour automatiquement dans votre tenant, ce qui va réduire les couts de maintenance et la surcharge administrative pour une entreprise.
    L'option **Targeted release for select users** vous permet de garder le contrôle des utilisateurs qui auront les mises à jour et nouvelles fonctionnalités en premier, afin de préparer sereinement l'entreprise à l'arrivée de ces nouveautés pour tout le monde.
1. Sous votre choix **Targeted release for select users** S'affichent désormais les possibilités **Select users** et **Upload users** (depuis un fichier CSV). Cliquez sur **Select users**.
1. Dans la fenêtre **Choose users for targeted release**, cliquez dans le champ **Who should receive targeted releases?**. Vous allez ainsi avoir accès à la liste des compte utilisateurs existant.
1. Dans la liste des utilisateurs, sélectionnez *MOD Administrator* avant de cliquer sur **Save**.
1. Dans la fenêtre **Release preferences** , clique sur le **X** de fermeture en haut à droite.
1. De retour sur l'onglet **Organization profile** de la fenêtre **Org settings**, sélectionnez **Custom themes**.
1. Dans la fenêtre **Custom themes**, cliquez sur le thème **Default theme**.
1. Dans la fenêtre **Default theme**, prenez le temps de parcourir les différentes options d'affichage et de branding qui s'offrent à vous. Pour les besoins de l'atelier, n'hésitez pas à modifier quelques paramètres ici pour voir comment ils seront appliqués aux utilisateurs de Adatum.
1. Si vous avez fait des changements dans le thème par défaut, cliquez sur **Save** lorsque vous avez terminé. Cliquez ensuite sur le **X** en haut à droite pour fermer la fénêtre **Default theme**.
1. Restez connecté sur LON-DC1 VM et laissez votre navigateur Internet ouvert pour la tâche suivante de cet atelier.

## Tâche 3: Vérification de la création du tenant
Bien que le fournisseur d'atelier ait initié la création du tenant Microsoft 365 pour Adatum, il reste nécessaire de finaliser cette création. En tant que Dominique Skyetson, administrateur de Adatum, vous allez finaliser cette création afin de pouvoir poursuivre vos tests pour le projet pilote.
1. A la suite de la tâche précédente, vous devriez toujours être connecté sur **LON-DC1** avec le compte **Administrator** et être connecté sur le portail d'administration de Microsoft 365 sous le compte **MOD Administrator**.
1. Dans le portail **Microsoft 365 admin center**, dans le menu de navigation, sélectionnez le groupe **Users**, puis le choix **Active users**. 
1. Dans la liste **Active users**, vous voyez la liste des utilisateurs qui ont été pré-créés dans le tenant.
1. En bas du menu de navigation, dans la section **Admin centers** section, sélectionnez **Exchange**.
1. Un nouvel onglet s'ouvre dans votre navigateur, affichant le portail **Exchange admin center**. Dans le menu de navigation, ouvrez le groupe **Recipients** pour sélectionner **Mailboxes**.
1. Une liste d'utilisateurs, similaires à celle présentée précédemment sous **Active users** dans le portail **Microsoft 365 admin center** devrait être affichée sur cette page  **Manage mailboxes**.  
1. Dans votre navigateur, fermez l'onglet **Exchange admin center** mais laissez ouvert l'onglet **Microsoft 365 admin center** pour la suite et fin de cet exercice. 

## Tâche 4: Vérification du service Microsoft 365
Dans cette tâche, vous allez vérifier l'état de santé du service Microsoft 365 sur votre tenant.
1. A la suite de la tâche précédente, vous devriez toujours être connecté sur **LON-DC1** avec le compte **Administrator** et être connecté sur le portail d'administration de Microsoft 365 sous le compte **MOD Administrator**.
1. Dans le portail **Microsoft admin center**, dans le menu de navigation, ouvrez le groupe **Health** pour choisir l'option **Service health**. Cela fait apparaitre le dashboard **Service health**.
1. Sur la page **Service health**, l'onglet **Overview** est affiché apr défaut. Cet onglet affiche les problèmes concernant actuellement les services Microsoft 365 disponibles avec vos abonnements.
	> **Note** : Vous Si aucun problème n'est actuellement listé, vous pouvez toujours cliquer sur l'onglet **Issue history** pour réaliser l'opération suivante.
1. Cliquez sur une ligne représentant un problème pour observer le détail des informations fournies par l'éditeur sur ce problème et son état actuel de prise en charge et/ou de résolution.
1. Après avoir observé les détails d'un problème, cliquez sur le **X** en haut à droite pour le fermer et n'hésitez pas à aller en observer d'autres.
1. Restez connecté sur LON-DC1 VM et laissez votre navigateur Internet ouvert pour l'exercice suivant de vos ateliers.

## Résultat
A l'issue de ce premier exercice, vous avez vérifié la création du tenant pilote pour Adatum, configuré quelques options pour toute l'entreprise et vérifié l'état de santé du service Microsoft 365.