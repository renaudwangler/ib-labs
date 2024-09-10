---
layout: stage
title: "Lab2-Ex1 - Gestion des utilisateurs avec le centre d'administration Microsoft 365"
length: "00"
date: "15/05/2024"
script: "msms030.js"
---
# Scénario
Dominique Skyetson est l'administrateur de l'entreprise Adatum. Comme il n'a pas de compte utilisateur Microsoft 365 déclaré pour lui-même, Dominique s'est jusqu'à présent connecté à l'administration du tenant avec le compte *Mod Administrator*. Dans cet exercice, il va se créer son compte et y assigner le rôle *Global Administrator* qui lui permettra ensuite de faire toutes les actions administratives sur le tenant de manière nominative.
Prenant le rôle de Dominique, vous allez ensuite créer plusieurs comptes utilisateurs en utilisant le centre d'administration 365 que vous serez par la suite amené à ajouter à des groupes pour gérer la sécurité. Bien que les administrateurs de plus haut niveau de l'entreprise ne créent pas habituellement des comptes utilisateurs, il vous est nécessaire de le faire en attendant que la configuration complète du tenant pilote soit terminée et que les comptes soient automatiquement synchronisés.  
**Important :** Pour votre environnement réel, il est très fortement conseillé de noter le mot de passe du compte *Global Admin* original (*Mod Administrator* dans notre atelier) et de le stocker de manière particulièrement sécurisée. Ce compte est un compte non nominatif sur lequel il vous faudra peut-être compter lorsque tous les autres moyens de vous en sortir ne fonctionneront plus. La MFA ne sera jamais activée sur ce compte (car il n'est pas nominatif) et son mot de passe sera potentiellement partagé par plusieurs personnes, en faisant une cible idéale pour les attaques de sécurité. Il est donc conseillé de ne jamais l'utiliser au quotidien et de toujours préférer l'utilisation de comptes personnalisés et nominatifs (comme celui de Dominique dans notre atelier) sur lesquels la MFA sera systématiquement exigée.  
Dans le contexte de l'atelier, vous activerez la MFA pour le compte de Dominique dans le prochain exercice au cours duquel vous vous occuperez des stratégies de mots de passe.

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- la création de comptes utilisateurs dans le portail *Microsoft 365 Admin Center*
- la modification d'options sur les comptes utilisateurs dans le portail *Microsoft 365 Admin Center*

## Préparation - Désaffectation de licences
1. Vous devriez encore être connecté sur **LON-CL1** à l'issue du premier atelier. Le **Microsoft 365 admin center** devrait encore être resté ouvert dans votre navigateur et vous devriez y être connecté avec le compte *MOD Administrator*. 
1. Dans le portail **Microsoft 365 admin center**, dans le menu de navigation à gauche, ouvrez le groupe **Billing** pour sélectionner l'entrée **Licenses**.  
1. Dans la fenêtre licenses, cliquez sur la ligne **Microsoft 365 E5 (no Teams)**.
1. Dans le panneau **Microsoft 365 E5 (no Teams)**, cochez les cases en regard des utilisateurs suivant avant de cliquer sur **Unassign licenses** :  
	- Adele Vance
	- Alex Wilber
	- Christie Cline
	- Debra Berger
	- Grady Archie
	- Irvin Sayers
	- Johanna Lorenz
	- Lee Gu
	- Lidia Holloway
	- Miriam Graham
	- Pradeep Gupta
	> Nota 1 : Si tous les utilisateurs de la liste ne sont pas présent dans votre tenant de test, contentez-vous de désaffecter les licences de celles et ceux qui s'y trouvent, ce n'est pas pénalisant pour la suite....  
	> Nota 2 : Si, sur votre tenant, les licenses présentes sont **Office 365 E5 (no teams)** et non **Microsoft 365 E5 (no Teams)**, merci d'adapter des énnonçés des ateliers en conséquence...
1. Dans la fenêtre de confirmation **Unassign 11 licenses?**, cliquez sur le bouton **Unassign**.
1. Dans le menu de navigation à gauche du portail administratif, ouvrez le groupe **Billing** pour resélectionner l'entrée **Licenses**.  
1. Répétez la procédure précédente pour désaffecter la license **Microsoft Teams Enterprise** des mêmes utilisateurs.

## Tâche 1 - Création d'utilisateurs
1. Vous devriez encore être connecté sur **LON-CL1** à l'issue du premier atelier. Le **Microsoft 365 admin center** devrait encore être resté ouvert dans votre navigateur et vous devriez y être connecté avec le compte *MOD Administrator*. 
1. Dans le portail **Microsoft 365 admin center**, dans le menu de navigation à gauche, ouvrez le groupe **Users** pour sélectionner l'entrée **Active users**.  
	>Puisque vous prenez le rôle de Dominique Skyetson pour cet exercice, vous allez vous créer un compte utilisateur pour vous même et lui affecter le rôle *Global Administrator*, donnant ainsi à Dominique l'accès à toutes les prérogatives administratives dans l'environnement Microsoft 365.
1. Dans la fenêtre **Active Users**, cliquez sur **Add a user**.
1. Sur la page **Set up the basics**, saisissez les informations suivantes :
	- First name : ```Dominique```
	- Last name : ```Skyetson``` 
	- Display name : En tabulant dans ce champ, il sera automatiquement rempli avec la valeur ```Dominique Skyetson```.
	- Username : ```dom```  
		>**IMPORTANT :** A droite du champ **Username** se trouve le domaine de l'utilisateur. Il sera rempli avec le domaine DNS configuré comme étant le domaine par défaut. Pour Adatum, il s'agit du domaine que vous avez ajouté lors du premier atelier.  
		Cependant, pour les besoin des exercices concernant la synchronisation d'identité, il vous est conseillé de sélectionner le domaine **[onmicrosoftDomain].onmicrosoft.com** pour tous les utilisateurs que vous créez dans cet exercice.  
		C'est pourquoi vous devez sélectionner la flèche à droite du champ **Domains** pour sélectionner le domaine **[onmicrosoftDomain].onmicrosoft.com** (s'il vous est impossible de sélectionner ce domaine à la création des utilisateurs, vous pouvez le changer à postériori).  
		Après avoir configuré ce champ, le nom utilisateur de Dominique devrait apparaitre sous la forme:
		**dom@[onmicrosoftDomain].onmicrosoft.com**  
	- Décochez l'option **Automatically create a password**
	- Password : ```Pa55w.rd``` (Astuce : cliquez sur l'icône d'oeil à droite pour vérifier le mot de passe saisi)
	- Cochez la case **Require this user to change their password when they first sign in**
1. Cliquez **Next**.
1. Sur la page **Assign product licenses** , saisissez les informations suivantes:
	- Select location : **United States**
	- Licences : Vérifier que l'option **Assign user a product license** est sélectionnée et cochez les cases en regard des licences **Microsoft 365 E5 (no Teams)**  et **Microsoft Teams Enterprise**
	- **Apps** : Ouvrez cette section pour décocher **Skype for Business (plan 1)**
1. Cliquez sur **Next.**
1. Sur la page **Optional settings**, cliquez sur la ligne **Roles (User : no administration access).**
1. Sélectionnez le titre **Admin center access**. Les rôles les plus souvent affectés vont alors s'afficher.
	>**Note :** Si vous souhaitez affecter un autre rôle qui ne se trouve pas dans cette liste, sélectionnez la ligne **Show all by category** pour afficher l'intégralité des rôles disponibles. Cependant, dans notre cas, Dominique veut s'assigner le rôle Global Administrator. Il peut le faire, étant connecté avec le compte *MOD Administrator*, qui est aussi Global admin. Seul un Global admin peut affecter le rôle Global Administrator à un utilisateur.
1. Sélectionnez **Global Administrator** avant de cliquer sur **Next**.
1. Sur la page **Review and finish** , vérifiez les informations saisies. Si quoi que ce soit nécessite d'être changé, cliquez sur le lien **Edit** correspondant et réalisez les changements nécessaires. Sinon, si tout est correct, cliquez sur **Finish adding**. 
1. Sur la page **Dominique Skyetson added to active users**, cliquez sur **Show** à coté de **Password** pour vérifier que vous avez bien saisi correctement **Pa55w.rd**.
1. En bas de la page, cliquez sur le lien **Add another user** et recommencez les étapes 3 à 12 précédentes, pour ajouter les utilisateurs avec les informations suivantes :
	- **Username domain :** Lors de la saisie du **Username** pour chaque utilisateur, assurez-vous de sélectionner le domaine **[onmicrosoftDomain].onmicrosoft.com** comme vous l'avez fait pour le compte de Dominique (Si vous ne pouvez le sélectionner à la création, changez-le une fois le compte créé).
	- **Password :** Utilisez le mot de passe ```Pa55w.rd```, et, comme pour le compte de Dominique, exigez le changement de mot de passe à la première connexion.
	- **Licenses :** Affectez une licence **Microsoft 365 E5 (no Teams)** et une licence **Microsoft Teams Enterprise** à l'utilisateur **Alan Yoo**, en décochant l'App **Skype for Business Online (plan1)** comme vous l'avez fait pour Dominique Skyetson. Pour tous les autres utilisateurs, sélectionner l'option **Create user without product license (not recommended)**.
	- **Roles :** Par défaut chaque utilisateur se verra affecter le rôle **User role (no administration access)**; Cela suffira pour le moment. Dans un futur exercice, vous affecterez des rôles administratifs à certains utilisateurs pour tester la délégation administrative. Ainsi, en arrivant sur la page **Optional settings**, cliquez directement sur **Next**.
	> ```Alan Yoo``` | username ```alan``` | Licence **Microsoft 365 E5** et **Microsoft Teams Enterprise** mais pas de rôle admin  
	```Ada Russell``` | username ```ada``` | Ni licence ni rôle admin
	```Adam Hobbs``` | username ```adam``` | Ni licence ni rôle admin
	```Libby Hayward``` | username ```libby``` | Ni licence ni rôle admin
	```Laura Atkins```| username ```laura``` | Ni licence ni rôle admin
1. Après avoir ajouté le dernier compte (celui de *Laura Atkins*) cliquez sur le bouton **Close** pour revenir à la liste des **Active users**
1. Vérifiez la liste **Active users**. Vérifiez que chacun des précédents utilisateurs a pour domaine **[onmicrosoftDomain].onmicrosoft.com** et changez-le si ce n'est pas le cas.
1. Restez connecté sur LON-CL1 et laissez votre navigateur Internet ouvert pour la tâche suivante de cet atelier.

## Tâche 2 : Modification d'utilisateurs Microsoft 365
Dans cette tâche, vous allez réaliser nombre des actions d'édition sur les comptes utilisateurs. Vous allez commencer par mettre à jour les informations de contact d'Alan Yoo, avant de l'empêcher de se connecter.  
Empêcher la connexion d'un utilisateur est un *best practice* lorsque vous pensez que le compte ou le mot de passe d'un utilisateur puisse avoir été compromis. Ceci évite que l'utilisateur en question puisse se connecter et, en plus, le déconnectera de tous les services Microsoft 365 dans les 60 minutes.
Vous affecterez ensuite une licence produit au compte de Ada Russell. Pour finir, vous allez supprimer le compte de Libby Hayward avant de voir comment le restaurer.
1. Vous devriez encore être connecté sur **LON-CL1** à l'issue du premier atelier. Le **Microsoft 365 admin center** devrait encore être resté ouvert dans votre navigateur et vous devriez y être connecté avec le compte *MOD Administrator*.
1. Dans le portail **Microsoft 365 admin center**, la page **Active users** devrait être encore affichée à l'issue de la première tâche de cet exercice. Sélectionnez la case à cocher en regard du compte de **Alan Yoo**, sans cliquer sur la ligne de ce compte en lui-même.
1. Dans la barre de menu au-dessus de la liste d'utilisateurs, sélectionnez les **points de suspension** (**More actions**). Dans le menu qui apparait, sélectionnez **Manage contact information**.
1. Dans le panneau **Manage contact information** qui apparait pour Alan Yoo, saisissez ```Accounts Receivable``` dans le champ **Department** avant de cliquer sur **Save changes**. 
1. Une fois que le bandeau vert indiquant **Contact information updated** apparait, cliquez sur le **X** de fermeture en haut à droite du panneau **Manage contact information**.
1. Le compte d'Alan Yoo devrait toujours être sélectionné dans la liste **Active Users**. Dans la barre de menu au-dessus de la liste d'utilisateurs, sélectionnez les **points de suspension** (**More actions**) de nouveau. Dans le menu qui apparait, sélectionnez **Edit sign-in status**.
1. Sur le panneau **Block sign-in**, cochez la case **Block this user from signing in** avant de cliquer sur le bouton **Save changes**. Notez le bandeau vert indiquant que le compte de Alan est désormais bloqué et qu'il sera déconnecté des services Microsoft dans les 60 minutes. Cliquez sur le **X** de fermeture en haut à droite du panneau **Block sign-in**.
1. Dans la liste **Active users**, désélectionnez la case à gauche de **Alan Yoo**, avant de sélectionner **Ada Russell**.
1. Pour Ada, vous souhaitez apprendre à affecter une licence à un utilisateur existant. Dans la barre des menus au-dessus des utilisateurs, cliquez sur **Manage product licenses** (utilisez les points de suspension **More Options** si le choix n'est pas affiché).
1. Sur le panneau **Ada Russell** qui s'affiche, l'onglet **Licenses and apps** est affiché par défaut (puisque vous avez sélectionné l'option **Manage product licenses**). Sous la liste des licences, cliquez sur les cases **Microsoft 365 E5 (no Teams)** et **Microsoft 
Teams Enterprise**. Déselectionnez l'*App* **Skype for business Online (plan 1)** avant de cliquer sur le bouton **Save changes**.  
1. Sélectionnez le **X** en haut à droite pour fermer le panneau d'informations de **Ada Russell**.
1. Dans la liste **Active users**, vous pouvez voir qu'une licence a été affectée au compte de **Ada Russell**. Décochez la case en regard de **Ada Russell** avant de sélectionner **Libby Hayward**.
1. A droite du nom de Libby Hayward, sélectionnez les points de suspension verticaux. Dans le menu qui apparait, notez que les options sont similaires à celle du menu que vous avez utilisé jusqu'à présent, même si moins nombreuses. 
1. Dans cette tâche vous allez supprimer le compte de Libby avant de le restaurer. Vous pouvez supprimer un utilisateur en sélectionnant l'option **Delete user** dans son menu.
1. Sur le panneau **Delete this user ?**, cliquez sur le bouton **Delete user** en bas de page.
1. Sur le panneau **Libby Hayward has been deleted**, cliquez sur le bouton **Close**.
1. Vérifiez que le compte de **Libby Hayward** n'apparait plus dans le liste **Active users**.  
1. Vérifiez maintenant que Libby apparait dans la liste des utilisateurs supprimés. Dans le portail **Microsoft 365 admin center**, dans le menu de navigation, cliquez sur **Deleted users**.
1. Sur la page **Deleted users**, vérifiez que **Libby Hayward** apparait dans la liste des utilisateurs supprimés.
1. Supprimer un utilisateur réalise un *soft-delete* de son compte ; ce qui permet aux entreprises de restaurer les utilisateurs pendant 30 jours après leur suppression. Dans la liste **Deleted users**, sélectionnez la case à cocher en regard de **Libby Hayward**. 
1. Sur la barre de menu, cliquez sur le bouton **Restore user**.
1. Dans le panneau **Restore Libby Hayward**, vous avez l'option d'affecter un nouveau mot de passe à Libby ou de demander la génération automatique d'un nouveau mot de passe. **Sur le terrain, il est conseillé de générer automatiquement un mot de passe et d'exiger que l'utilisateur le change à sa première connexion.**  
	Puisque l'option **Auto-generate password** est sélectionnée par défaut et que la case **Make this user change their password when they first sign in** est cochée, cliquez simplement sur le bouton **Restore** en bas de la page.
1. Le panneau **Libby Hayward has been restored** s'affiche pour confirmer que le compte de Libby a été restauré et son mot de passe remplacé. Prenez soin de copier le nouveau mot de passe (en en prenant par exemple note dans un notepad) vous en aurez besoin à la tâche suivante avant de cliquer sur le bouton **Close**.  
	>**Note :** Si vous avez procédé *trop* rapidement à la suppression et restauration de l'utilisateur, il se peut que le nom de connexion de celui-ci ne soit pas correct (restauration effectuée avant que le suppression ne soit complètement assumée). Dans ce cas, vous pourrez ensuite aisément modifier le nom de connexion de Libby pour lui remettre ```libby@[onmicrosoftDomain].onmicrosoft.com```...
1. Le compte de Libby ne devrait plus apparaitre dans la liste **Deleted users**. Dans le portail **Microsoft 365 admin center**, dans le menu de navigation, sélectionnez **Active users**.
1. Vérifiez que **Libby Hayward** apparait dans la liste.
1. Laissez votre navigateur Internet ouvert pour la suite des opérations en tâche suivante. 

## Tâche 3 - Vérification des paramètres utilisateurs
Dans cette tâche, vous allez vérifier l'impact des changements que vous avez fait aux comptes utilisateurs dans les tâches précédentes. Vous allez vous connecter avec le compte de Libby Hayward et donc avoir besoin du mot de passe temporaire qui lui a été affecté. Vous allez ensuite ouvrir une session Microsoft 365 en tant que Alan Yoo, afin de valider si son compte est bien empêché de se connecter. 
1. Vous devriez encore être connecté sur **LON-CL1** à l'issue du premier atelier. Le **Microsoft 365 admin center** devrait encore être resté ouvert dans votre navigateur et vous devriez y être connecté avec le compte *MOD Administrator*.
1. Vous devez vous déconnecter de Microsoft 365 et vous reconnecter avec le compte de Libby Hayward. Sélectionnez le cercle en haut à droite avec **MA** (les initiales de *MOD Administrator*) et cliquez sur **Sign out**.
1. Une fois qu'une invite apparait vous indiquant que vous êtes correctement déconnecté, fermez votre navigateur Internet pour éviter qu'une session soit restée ouverte sur un autre onglet.
1. Dans la barre des tâches, cliquez sur l'icône de **Microsoft Edge** pour relancer une session de navigation et connectez-vous sur le portail Microsoft 365 à l'adresse suivante :  
```https://www.microsoft365.com```
1. Cliquez sur le bouton **SIgn in**.
1. Dans la fenêtre **Pick an account**, sélectionnez **+ Use another account**.
1. Dans la fenêtre **Sign in**, entrez ```Libby@[onmicrosoftDomain].onmicrosoft.com``` et cliquez sur **Next**.
1. Dans la fenêtre **Enter password**, saisissez le mot de passe temporaire de Libby dont vous avez pris note dans la tâche précédente et cliquez sur le bouton **Sign in**.
1. Dans la fenêtre **Update your password**, entrez de nouveau le mot de passe temporaire de Libby dans le champ **Current password**, et utilisez le mot de passe ```ibForm@tion``` dans les champs **New password** et **Confirm password**. Cliquez sur **Sign in**.
1. Si une fenêtre **Welcome to Microsoft 365** apparait, cliquez deux fois sur la flèche de droite pour accéder à la validation vous permettant de la fermer.
1. Vérifiez que vous pouvez accéder à la page d'accueil de Microsoft 365. Notez qu'aucune application n'est présente sur le portail de Libby puisque vous n'avez affecté aucune licence au compte de Libby.
1. Vous devez désormais vous déconnecter du compte de Libby pour tenter de vous connecter avec le compte de Alan Yoo. Pour vous déconnecter, cliquez sur le cercle en haut à droite contenant **LH** (les initiales de Libby Hayward) et cliquez sur **Sign out**.
1. Une fois déconnecté, ressaisissez l'adresse suivante dans la barre d'adresse de votre navigateur si nécessaire :  
```https://www.microsoft365.com```
1. Dans la page **login**, cliquez sur le choix **Switch to a different account** en dessous du bouton **Sign in**
1. Saisissez ```Alan@[onmicrosoftDomain].onmicrosoft.com``` dans le champ **Email address** avant de cliquer sur **Sign in**.
1. Dans la fenêtre **Sign in**, cliquez sur **Next**
1. Dans la fenêtre **Enter password**, saisissez ```Pa55w.rd``` et cliquez sur **Sign in**.
1. Sur la fenêtre **Pick an account**, constatez qu'un message d'erreur apparait, indiquant que le compte de Alan a été bloqué. Vous venez de vérifier que Alan ne peut plus se connecter à Microsoft 365.
1. Vous allez finalement vous connecter avec votre compte admin de Dominique Skyetson, en utilisant le compte nominatif que vous avez créé dans la première tâche de cet exercice. Dans la fenêtre **Pick an account**, sélectionnez donc **+ Use another account**.
1. Dans la fenêtre **Sign in**, saisissez ```dom@[onmicrosoftDomain].onmicrosoft.com``` et cliquez sur **Next**.
1. Dans la fenêtre suivante, utilisez le mot de passe ```Pa55w.rd``` et cliquez sur **Sign in**.
1. Dans la fenêtre **Update your password**, saisissez ```Pa55w.rd``` dans le champ **Current password** et saisissez ```ibForm@tion``` dans les champs **New password** et **Confirm password**. Cliquez sur **Sign in**.
1. Si une fenêtre **Welcome to Microsoft 365** apparait, cliquez deux fois sur la flèche de droite pour accèder à la validation vous permettant de la fermer. 
1. Dans la page d'accueil **Welcome to Microsot 365**, cliquez sur la tuile **Admin**.
1. Dans le portail **Microsoft 365 admin center**, dans le menu de navigation à gauche, ouvrez le groupe **Users** pour y sélectionner **Active users**.
1. Dans la lite **Active users** cliquez sur le nom de **Alan Yoo**.
1. Sur le panneau d'informations de **Alan Yoo** qui apparait, notez qu'il vous est indiqué que le compte de Alan est actuellement bloqué, cliquez sur le bouton **Unblock sign-in**.
1. Dans le panneau **Unblock sign-in** qui apparait, la case à cocher **Block this user from signing in** est cochée. Décochez cette case avant de cliquer sur **Save changes**.
1. Une fois le message vert de confirmation apparu indiquant que le compte de Alan Yoo est désormais débloqué, cliquez sur le **X** en haut à droite afin de fermer le panneau **Unblock sign in**.  
1. Restez connecté avec le compte de Dominique Skyetson sur le centre d'administration ouvert dans LON-CL1 pour les opérations de l'exercice suivant.

## Résultat
A l'issue de ce premier exercice, vous avez créé et géré des comptes utilisateurs ainsi que leurs licences pour coller au plus près aux besoins métier de Adatum.

Vous pouvez poursuivre par [l'exercice 2 - Gestion des stratégies de mots de passe Microsoft 365](lab2e2)