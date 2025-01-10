---
layout: stage
title: "Lab2-Ex4 - Délégation d'administration"
length: "00"
date: "10/01/2025"
script: "ms365.js"
---
# Scénario
Dans cet exercice, en tant que Dominique Skyetson et pour le projet pilote Microsoft 365 de Adatum, vous allez gérer la délégation administrative en affectant des rôles d'administrateurs à plusieurs utilisateurs. Vous allez procéder à ces affectations de rôle à la fois par le portail d'administration et en Powershell. Une fois ces rôles affectés, vous vous connecterez avec les comptes concernés pour tester la délégation administrative.

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- L'affectation de rôles administratifs par le centre d'administration
- L'affectation de rôles administratifs avec Windows Powershell
- L'interaction entre certains rôles administratifs

## Tâche 1 - Délégation administrative dans le portail administratif
Connecté avec un compte *Global Admin*, vous allez commencer cet exercice par tester l'affectation de droits administratifs via le portail **Microsoft 365 Admin Center**.
1. Vous devriez encore être connecté sur **LON-CL1** à l'issue du précédent atelier. Le **Microsoft 365 admin center** devrait encore être resté ouvert dans votre navigateur et vous devriez y être connecté avec le compte *Dominique Skyetson*.
1. Dans le portail **Microsoft 365 admin center**, dans le menu de navigation de gauche, ouvrez **Users** pour sélectionner **Active users**.
1. Dans la liste **Active users**, cliquez sur le nom de **Elvis Cress**. 
1. Dans le panneau d'informations de Elvis Cress qui s'affiche, l'onglet **Account** est affiché par défaut. Descendez dans la section **Roles** pour cliquer sur **Manage roles**.
1. Dans la fenêtre **Manage roles**, c'est l'option **User (no admin center access)** qui est actuellement sélectionnée par défaut. Puisque vous souhaitez affecter un rôle administratif à Elvis, sélectionnez l'option **Admin center access**. Cela va vous permettre de faire votre choix parmi les rôles administratif.
1. Elvis doit être promu au rang d'administrateur facturation. Cependant, comme le rôle **Billing administrator** n'est pas affiché parmi les plus utilisés, descendez un peu dans la fenêtre et cliquez sur **Show all by category**.
1. Dans la liste complète des rôles qui apparait en dessous, dans la catégorie **Other**, cochez la case à gauche du rôle **Billing administrator**, aavnt de cliquer sur **Save changes**.
1. Cliquez ensuite sur le **X** en haut à droite afin de fermer le panneau **Manage admin roles**. Vous êtes de retour sur la liste des utilisateurs.
1. Répétez les étapes précédentes pour affecter le rôle **User Administrator** à **Leanna Goodwin**.(Ce rôle fait partie de la liste des rôles administratifs les plus utilisés, vous n'aurez pas besoin de cliquer sur **Show all by category**).
1. Restez connecté sur la machine virtuelle LON-CL1 pour la tâche suivante.

## Tâche 2 - Délégation administrative avec Windows PowerShell  
Cette tâche est assez similaire à la précédente, mais vous allez la réaliser avec l'outillage Windows Powershell.
1. Vous devriez être toujours connecté sur la machine virtuelle LON-CL1, avec l'outil **Administrator : Windows Powershell ISE** réduit dans la barre des tâches. Agrandissez en la fenêtre (ou relancez l'outil en administrateur si vous l'aviez fermé).
1. Vous allez d'abord vous (re)connecter à l'environnement Microsoft 365 avec le module Microsoft Graph. Utilisez la commande suivante : 
	```Connect-MgGraph -scopes user.Read.All,RoleManagement.ReadWrite.Directory```
1. Dans la fenêtre **Sign in** qui apparaît, connectez-vous avec le compte de Dominique Skyetson : **dom@WWLxxxxx.onmicrosoft.com** et son mot de passe (**ibForm@tion**). 
1. Dans la fenêtre **Permission requested**, cochez la case **Consent on behalf of your organization** et cliquez sur **Accept**.	
1. Pour voir tous les rôles diponibles, vous poubvez utiliser la commande suivante :
	```Get-MgRoleManagementDirectoryRoleDefinition |Select-Object -Property DisplayName,Description | Out-GridView```
1. Dominique souhaite affecter le rôle **Service support administrator** à **Nona Snider**. Pour ce faire, vous pouvez urtiliser la commande suivante :
	```New-MgRoleManagementDirectoryRoleAssignment -DirectoryScopeId '/' -RoleDefinitionId (Get-MgRoleManagementDirectoryRoleDefinition | where DisplayName -eq 'Service support administrator').Id -PrincipalId (Get-MgUser -Search 'DisplayName:nona' -ConsistencyLevel eventual).Id```
1. Vous souhaitez désormais vérifier quels utilisateurs se sont vu affecter quels rôles. Pour réaliser cette recherche en Powershell, vous pouvez utiliser la commande suivante :
	```Get-MgRoleManagementDirectoryRoleAssignment -Filter "roleDefinitionId eq '$((Get-MgRoleManagementDirectoryRoleDefinition |Select-Object -Property DisplayName,Description,Id | Out-GridView -PassThru).Id)'" | ForEach-Object {Get-MgUser -UserId $_.PrincipalId -ErrorAction SilentlyContinue}```
1. Dans la fenêtre affichant la liste des rôles, sélectionnez la ligne **Service Support Administrator** (Vous pouvez cliquer sur le titre de colonne **DisplayName** pour en trier le contenu) et cliquez sur **OK**.
1. Vérifiez que le compte de **Nona Snider** est dans la liste des utilisateurs a qui le rôle **Service support administrator** A été affecté.
	>**Note :** Vous pouvez utiliser la même commande pour vérifier les utilisateurs à qui a été affecté le rôle **Billing Administrator**. Vous devriez ainsi pouvoir retrouver le compte de **Elvis Cress**.
1. Laissez l'outil **Windows Powershell ISE** ouvert pour d'autres opération dans la suite des ateliers, vous pouvez le réduire en icône dans la barre des tâches.

## Tâche 3 - Vérification de la délégation administrative
Dans cette tâche, Dominique va vérifier la délégation administrative mise en oeuvre précédemment, concernant les utilisateurs Allan Yoo et Leanna Goodwin. En se connectant sur le portail 365 avec le compte de chacun, il sera possible de confirmer les opérations administratives disponibles à ces administrateurs. Au final, en tant que Leanna Goodwin, récemment promue au rang d'administratrice des utilisateurs de Adatum, vous réaliserez quelques opérations de maintenance des utilisateurs, comme réinitialiser les mots de passe ou bloquer un compte utilisateur.
1. Vous devriez encore être connecté sur **LON-CL1** à l'issue du précédent atelier. Le **Microsoft 365 admin center** devrait encore être resté ouvert dans votre navigateur et vous devriez y être connecté avec le compte *Dominique Skyetson*.
1. Dans le portail **Microsoft 365 admin center**, dans le menu de navigation de gauche, ouvrez **Users** pour sélectionner **Active users**.
1. Dans la liste **Active users**, cliquez sur le nom de **Alan Yoo**. 
1. Dans le panneau d'informations sur **Alan Yoo**, l'onglet **Account** est affiché par défaut. Sous la section **Roles**, vous devriez voir que Alan est un simple utilisateur de la solution : **No administrator access**. Cliquez sur le **X** en haut à droite pour fermer le panneau d'informations sur Alan.
1. Dans la liste **Active users**, cliquez sur **Leanna Goodwin**.
1. Dans le panneau d'informations sur **Leanna Goodwin**, l'onglet **Account** est affiché par défaut. Sous la section **Roles**, vous devriez voir que Leanna administratrice des utilisateurs : **User Administrator**. Cliquez sur le **X** en haut à droite pour fermer le panneau d'informations de Leanna.
1. Utilisez le menu en haut à droite de votre navigateur **Edge** pour ouvrir une nouvelle fenêtre de navigation privée (**New InPrivate window**).
1. Dans cette nouvelle fenêtre privée, saisissez l'adresse ```https://www.microsoft365.com``` pour vous rendre sur le portail Microsoft 365.
1. Vous allez commencer par vous connecter avec le compte de **Alan Yoo**. Cliquez sur **Sign In**
1. Dans la fenêtre **Sign-in**, entrez **Alan@Wlabxxxxx.godeploylabs.com** (remplacez bien par votre nom DNS d'entreprise).  
1. Dans la fenêtre **Enter password**, tapez ```Pa55w.rd```.
1. Dans la fenêtre **Update your pasword**, changez le mot de passe de Alan comme déjà vu précédemment de **Pa55w.rd** vers ```ibForm@tion```.
1. Dans la fenêtre **Stay signed in?**, cliquez sur **Yes**.
1. Si une fenêtre **Welcome to Microsoft 365** apparait, cliquez deux fois sur la flèche de droite pour pouvoir la fermer.
1. Notez que sur la page d'accueil de **Microsoft 365**, Alan n'a pas d'option **Admin** pour ouvrir le portail d'administration.
	Vous venez donc de vérifier que Alan ne peut accéder au **Microsoft 365 admin center** puisqu'il ne s'est vu affecter aucun rôle administratif.
1. Dans **Microsoft Edge**, en haut à droite de la page, cliquez sur l'icône utilisateur de **Alan Yoo** (Le cercle contenant ses initiales **AY**), et cliquez sur **Sign out.**
1. Vous allez désormais vous connecter avec le compte de **Leanna Goodwin**. Dans votre page actuelle sur **Edge** en navigation privée, vous devriez être face à un message indiquant **Alan, you're signed out now**. Sur cette page, cliquez sur **Switch to a different account**, et saisissez l'adresse **Leanna@labxxxxx.godeploylabs.com** dans le champ **Email address** qui s'affiche avant de cliquer sur **Sign in**.
1. Dans la fenêtre **Sign in**, vérifiez que l'adresse de Leanna est correctement saisie avant de cliquer sur **Next**.
1. Dans la fenêtre **Enter password**, entrez ```Pa55w.rd```.
1. Cliquez sur **Yes** sur la fenêtre **Stay signed in?**.
1. Si une fenêtre **Welcome to Microsoft 365** s'affiche, fermez-la comme vu précédemment.
1. Notez que, vu que Leanna s'est vu affecter un rôle administratif, elle peut accéder au centre d'administration : La tuile **Admin** Apparaît à gauche sur la page d'accueil. Cliquez sur **Admin** pour ouvrir le **Microsoft 365 admin center** dans un nouvel onglet.
1. Sur le portail **Microsoft 365 admin center**, sélectionnez le groupe d'options **Users** dans le menu de navigation pour cliquer sur l'option **Active users**.
1. De par son rôle **User admin**, Leanna a la permission de réinitialiser les mots de passe des utilisateurs. Leanna a récemment été contactée par **Elvis Cress** et **Alan Yoo**, chacun lui indiquant que son mot de passe aurait été compromis. La stratégie de sécurité de Adatum préconise dans ce cas que Leanna réinitialise le mot de passe des utilisateurs dont le compte a pu être compromis et exige que les utilisateurs changent ensuite leur mot de passe à la prochaine connexion.  
Dans la liste **Active users**, notez que, en passant la souris sur les lignes représentant les comptes utilisateurs, une clef apparait à droite du nom de l'utilisateur : c'est l'icône **Reset a password**. Cliquez sur la clef correspondant à la ligne de  **Elvis Cress**.
1. Dans le panneau **Reset password** de Elvis, décochez la case **Automatically create a password**, et saisissez **Pa55w.rd** dans le champ **Password**. Si nécessaire, cochez la case **Require this user to change their password when they first sign in**.
1. Cliquez sur **Reset password**.
1. Vous devriez recevoir un message d'erreur indiquant que vous ne pouvez réinitialiser le mot de passe de Elvis car il s'est vu affecté un rôle administratif. En effet, Elvis est *Billing Administrator*. Comme seul le *Global Admin* permet de réinitialiser le mot de passe d'un autre administrateur, Leanna devra demander à Dominique de s'occuper du cas de Elvis. Cliquez sur **Close**.
1. Si un sondage d'option s'affiche, fermez-le en cliquant sur **Cancel**.
1. Dans la liste **Active users**, cliquez sur la clef **Reset a password** en regard du compte de **Alan Yoo**.
1. Dans le panneau **Reset password** pour Alan, si nécessaire, décochez la case **Automatically create a password** et saisissez ```Pa55w.rd``` dans le champ **Password**. Si nécessaire,  sélectionnez la case à cocher **Require this user to change their password when they first sign in**.
1. Cliquez sur **Reset password**.
1. Dans la fenêtre **Password has been reseet**, vous devriez voir un message vert indiquant que la réinitialisation du mot de passe a correctement eu lieu. Cliquez sur **close**.
1. Adatum suppute que le compte de Leila Macdonald's ait pu être compromis récemment. En conséquence, Leanna s'est vu demander de bloquer le compte de Leila pour l'empêcher de se connecter jusqu'à ce que l'équipe sécurité détermine l'étendue du problème. Dans la liste **Active users**, cliquez sur le nom de **Leila Macdonald**.   
1. Dans le panneau d'informations sur Leila, cliquez sur le bouton **Block sign-in**.
1. Dans la fenêtre **Block sign-in**, cochez la case **Block this user from signing in** avant de cliquer sur **Save changes**.
1. La fenêtre **Block sign-in** devrait afficher un message vert indiquant que le compte de Leila est désormais bloqué et qu'en plus de ne plus pouvoir ouvrir de session, elle sera déconnectée de ses session existantes dans les 60 minutes. Cliquez sur le **X** en haut à droite du panneau **Block sign-in** pour le fermer.
1. Leanna vient de recevoir notification que le compte de Dominique Skyetson a également été potentiellement compromis. Répétez les étapes précédentes pour bloquer le compte de Dominique Skyetson.
1. En tentant de bloquer le compte de Dominique, vous devriez recevoir un message d'erreur vous indiquant que cette opération ne peut être faite (**Changes could not be saved**). La raison à cette impossibilité est similaire à l'impossibilité de réinitialiser le mot de passe de Elvis précédemment : Dominique est *Global Admin*, et pas Leanna. Seul un *Global Administrator* peut bloquer un *Global Administrator*.
1. Pour vérifier si, oui ou non, Leila Macdonald peut se connecter après que son compte ait été bloqué, vous allez tenter de vous connecter en tant que Leila. Déconnectez-vous, sur Microsoft 365, du compte de **Leanna Goodwin** (En cliquant sur le cercle en haut à droite puis sur **Sign out**).
1. Fermez ensuite tous les autres onglets de la fenêtre de navigation privée de Edge sauf l'onglet **Sign out**. Sur ce dernier onglet, naviguez sur l'adresse ```https://www.microsoft365.com```.
1. Sur la page **Login - Microsoft 365**, cliquez sur **Switch to a different account**.
1. Saisissez l'adresse **leila@labxxxxx.godeploylabs.com** dans le champ **Email address** avant de cliquer sur **Sign in**.
1. Sur la page **Sign in**, vérifiez l'adresse saisie pour Leila avant de cliquer sur **Next**.
	>La fenêtre **Pick an account** devrait apparaître et afficher un message d'erreur rouge indiquant **Your account has been locked. Contact your support person to unlock it, then try again.**  
	Vous venez de vérifier que Leila (ou quelqu'un ayant obtenu son nom de connexion et son mot de passe) ne peut ouvrir de session.
1. Fermez maintenant la fenêtre de navigation privée de **Edge** et basculez sur votre autre fenêtre **Edge**, dans laquelle vous devriez être resté connecté sur l'environnement **Microsoft 365** en tant que Dominique Skyetson. La liste **Active users** devrait être affichée dans le portail **Microsoft 365 admin center** depuis les précédentes tâches.
1. Après investigation, l'équipe sécurité de Adatum a déterminé que le compte de Leila Macdonald's n'a finalement pas été compromis ; Il a ainsi été demandé à Dominique de supprimer le blocage du compte de Leila.  
Répétez les étapes vues précédemment pour débloquer le compte de Leila. (Notez que le panneau **Block sign-in** s'intitulera cette fois-ci **Unblock sign-in**).
1. Dans le panneau **Unblock sign-in**, la case à cocher **Block this user from signing in** est actuellement cochée. Décochez-la puis cliquez sur **Save changes**.
1. Une fois que le compte de Leila a été débloqué, cliquez sur le **X** en haut à droite pour fermer le panneau **Unblock sign-in**.
# Fin de l'atelier 2