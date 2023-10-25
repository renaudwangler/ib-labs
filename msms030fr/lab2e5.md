---
layout: stage
title: "Lab2-Ex5 - Délégation d'administration"
length: "00"
---
# Scénario
Dans cet exercice, en tant que Dominique Skyetson et pour le projet pilote Microsoft 365 de Adatum, vous allez gérer la délégation administrative en affectant des rôles d'administrateurs à plusieurs utilisateurs. Vous allez procéder à ces affectations de rôle à la fois par le portail d'administration et en Powershell. Une fois ces rôles affectés, vous vous connecterez avec les comptes concernés pour tester la délégation administrative.

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :

## Tâche 1 - Délégation administrative dans le portail administratif
Connecté avec un compte *Global Admin*, vous allez commencer cet exercice par tester l'affectation de droits administratifs via le portial **Microsoft 365 Admin Center**.
1. Vous devriez encore être connecté sur **LON-CL1** à l'issue du précéemier atelier. Le **Microsoft 365 admin center** devrait encore être resté ouvert dans votre navigateur et vous devriez y être connecté avec le compte *Dominique Skyetson*.
1. Dans le portail **Microsoft 365 admin center**, dans le menu de navigation de gauche, ouvrez **Users** pour sélectionner **Active users**.
1. Dans la liste **Active users**, cliquez sur le nom de **Elvis Cress**. 
1. Dans le panneau d'informations de Elvis Cress qui s'affiche, l'onglet **Account** est affiché par défaut. Descendez dans la section **Roles** pour cliquer sur **Manage roles**.
1. Dans la fenêtre **Manage roles**, c'est l'option **User (no admin center access)** qui est actuellement sélectionnée par défaut. Puisque vous souhaitez affecter un rôle administratif à Elvis, sélectionnez l'option **Admin center access**. Cela va vous permettre de faire votre choix parmi les rôles administratif.
1. Elvis doit être promu au rang d'administrateur facturation. Cependant, comme le rôle **Billing administrator** n'est pas affiché parmi les plus utilisés, descendez un peu dans la fenêtre et cliquez sur **Show all by category**.
1. Dans la liste complète des rôles qui apparait en dessous, dans la catégorie **Other**, cochez la case à gauche du rôle **Billing administrator**, aavnt de cliquer sur **Save changes**.
1. Cliquez ensuite sur le **X** en haut à droite afin de fermer le panneau **Manage admin roles**. Vous êtes de retour sur la liste des utilisateurs.
1. Répétez les étapes précédentes pour affecter le rôle **User Administrator** à **Leanna Goodwin**.(Ce rôle fait partie de la liste des rôles administratifs les plus utilisés, vous n'aurez pas besoin de cliquer sur **Show all by category**).
1. Restez connecté sur la machine virtulle LON-CL1 pour la tâche suivante.

## Tâche 2 - Délégation administrative avec Windows PowerShell  
Cette tâche est assez similaire à la précédente, mais vous allez la réaliser avec l'outillage Windows Powershell.
1. Vous devriez être toujours connecté sur la machine virtuelle LON-CL1, avec l'outil **Administrator : Windows Powershell ISE** réduit dans la barre des tâches. Agrandissez en la fenêtre (ou relancez l'outil en administrateur si vous l'aviez fermé).
1. Vous allez d'abord vous (re)connecter à l'environnement Microsoft 365 avec le module Microsoft Graph. Utilisez la commande suivante :
1. You should begin by running the following command that connects your PowerShell session to the Microsoft Online Service:  
	```Connect-MgGraph -scopes user.Read.All,RoleManagement.ReadWrite.Directory``
1. Dans la fenêtre **Sign in** qui apparaît, connectez vous avec le compte de Dominique Skyetson : **dom@WWLxxxxx.onmicrosoft.com** et son mot de passe (**ibForm@tion**). 
1. dans la fenêtre **Permission requested**, cochez la case **Consent on behalf of your organization** et cliquez sur **Accept**.	
1. Pour voir tous les rôles diponibles, vous poubvez utiliser la commande suivante :
	```Get-MgRoleManagementDirectoryRoleDefinition |Select-Object -Property DisplayName,Description | Out-GridView```
1. Dominique souhaite affecter le rôle **Service support administrator** à **Nona Snider**. Pour ce faire, vous pouvez urtiliser la commande suivante :
	```New-MgRoleManagementDirectoryRoleAssignment -DirectoryScopeId '/' -RoleDefinitionId (Get-MgRoleManagementDirectoryRoleDefinition | where DisplayName -eq 'Service support administrator').Id -PrincipalId (Get-MgUser -Search 'DisplayName:nona' -ConsistencyLevel eventual).Id```
1. Vous souhaitez désormais vérifier quels utilisateurs se sont vu affecter quels rôles. Pour réaliser cette recherche en Powershell, vous pouvez utiliser la commande suivante :
	```Get-MgRoleManagementDirectoryRoleAssignment -Filter "roleDefinitionId eq '$((Get-MgRoleManagementDirectoryRoleDefinition |Select-Object -Property DisplayName,Description,Id | Out-GridView -PassThru).Id)'" | ForEach-Object {Get-MgUser -UserId $_.PrincipalId -ErrorAction SilentlyContinue}```
1. Dans la fenêtre affichant la liste des rôles, sélectionnez la ligne **Service Support Administrator** (Vous pouvez cliquer sur le tire de colonne **DisplayName** pour en trier le contenu) et cliquez sur **OK**.
1. Vérifiez que le compte de **Nona Snider** est dans la liste des utilisateurs a qui le rôle **Service support administrator** A été affecté.
	>**Note :** Vous pouvez utiliser la même commande pour vérifier les utilisateurs à qui a été affecté le rôle **Billing Administrator**. Vous devriez ainsi pouvoir retrouver le compte de **Elvis Cress**.
1. Laissez l'outil **Windows Powershell ISE** ouvert pour d'autres opération dans la suite des ateliers, vous pouvez le réduire en icône dans la barre des tâches.

## Tâche 3 - Vérification de la délégation administrative
In this task, you will begin by examining the administrative properties of two users, Allan Yoo and Leanna Goodwin. You will then log into the Office 365 home page on the Client 1 VM (LON-CL1) as each user to confirm several of the changes that you made when managing their administrative delegation in the prior tasks. Finally, as Leanna Goodwin, Adatum's newly assigned User Administrator, you will perform several user account maintenance tasks, such as resetting passwords and blocking a user account.  
1. In LON-CL1, you should still be logged into the Microsoft 365 admin center as Holly Dickson. If not, then do so now.
1. In the **Microsoft 365 admin center**, if you are not displaying the **Active users**, then navigate to there now.  
1. In the **Active users** list, click on **Alan Yoo**. 
1. In the **Alan Yoo** properties window, the **Account** tab is displayed by default. Under the **Roles** section, it should indicate that Alan has **No administrator access**. Select the **X** in the upper right corner to close Alan's properties window.
1. In the **Active users** list, click **Leanna Goodwin**.
1. In the **Leanna Goodwin** properties window, it should indicate that Leanna has been assigned the **User Administrator** role. Close Leanna's properties window**.
1. In your **Edge** browser, open a **New InPrivate window, and navigate to **https://portal.office.com**.
1. You will begin by signing into Office 365 as **Alan Yoo**. In the **Sign-in** window, enter **AlanD@xxx.onmicrosoft.com** (where xxx is your unique tenant ID).  
1. In the **Enter password** window, enter **Pa55w.rd****.
1. On the **Update your pasword** Window, change your Alan's password from **Pa55w.rd** to **ibForm@tion**.
1. On the **Stay signed in?** window, select **Yes**.
1. If a **Welcome to Microsoft 365** window appears, close it.
1. In the **Microsoft 365** homepage, note how the **Admin** option is not available.  
	You have just verified that Allan cannot access the Microsoft 365 admin center since he was never assigned an administrator role.
1. In **Microsoft Edge**, at the top right of the **Microsoft Office Home**, select the user icon for **Alan Yoo** (the circle in the upper right-hand corner with AY initials in it), and in his **My account** pane, select **Sign out.**
1. You will now sign into Office 365 as **Leanna Goodwin**. In your current **Edge** browser tab, it should display a message indicating **Alan, you're signed out now**. In this window, it gives you the option of signing back in as Alan, or signing in as a different user. Select **Switch to a different account**, and in the **Email address** field that appears, enter **Leanna@Mxxx.onmicrosoft.com** (where xxx is your unique tenant ID) and then select **Sign in**. In the **Enter password** window, enter **Pa55w.rd**.
1. Select **Yes** on the **Stay signed in?** window.
1. If a **Welcome to Microsoft 365** window appears, close it.
1. In the **Microsoft 365** home, since Leanna has been assigned to an administrator role, note how **Admin** appears. Select the **Admin** option.
1. On the **Microsoft 365 admin center**, select **Users** on the left-hand navigation pane and then select **Active users**.
1. As the **User admin**, Lynne has permission to change user passwords. Leanna was recently contacted by **Elvis Cress** and **Alan Yoo**, each of whom reported that their passwords may have been compromised. Per Adatum's company policy, Leanna must reset their passwords to a temporary value, and then force them to reset their password at their next login.  
In the **Active users** list, as you move your mouse from one user account to another, notice the **key (Reset a password)** icon that appears to the right of each user's name. Select the key icon that appears to the right of **Elvis Cress** name.
1. In the **Reset password** window for Elvis, unselect the **Automatically create a password** option, and then enter **Pa55w.rd** in the **Password** field. If necessary, select the **Require this user to change their password when they first sign in** check box so that it displays a check mark.
1. Select **Reset password**.
1. You should receive an error message indicating that you cannot reset Elvis' password because he has been assigned an admin role. In Elvis' case, he was assigned to the Billing Admin role. Since only Global Admins can change another admin’s password, Leanna will need to ask Holly Dickson to make this change. Select **Close**. 
1. If a survey request window appears, close it by selecting the **X**.
1. In the **Active users** list, select the **key (Reset a password)** icon for **Alan Yoo**.
1. In the **Reset password** window for Alan, if necessary, unselect the **Automatically create a password** option, and then enter **Pa55w.rd** in the **Password** field. If necessary, select the **Require this user to change their password when they first sign in** check box so that it displays a check mark.
1. Select **Reset password**.
1. On the **Reset password** window, you should receive a message indicating the password was successfully reset. Select **close**.
1. Management has recently discovered that Leila Macdonald's username may have been compromised. As a result, Leanna has been asked to block Leila's account so that no one can sign in with her username until management is able to determine the extent of the issue. In the **Active users** list, select the circle to the left of **Leila Macdonald**'s name (do NOT select Leila name itself).   
	>**Note:** If any other user account is selected, you must unselect that user account before proceeding. Check Alan Yoo's account, since you just reset his password; uncheck his account if necessary. Only Leila's account should be selected. 
1. In the menu bar at the top of the page, select the **ellipsis icon (...)** to display a drop-down menu of additional options. In the menu that appears, select **Edit sign-in status**.
1. In the **Block sign-in** window, select the **Block this user from signing in** check box, and then select **Save changes**.
1. The **Block sign-in** window should display a message indicating that Leila is now blocked from signing in (and no one can sign in with Leila's username in the event that her username was actually compromised). In addition, Leila will automatically be signed out of Microsoft services within 60 minutes. Select the **X** in the upper right-hand corner of the window to close it.
1. Leanna has just been informed that Holly Dickson's username has also been potentially compromised. Repeat steps 27 through 30 to block Holly from signing in (and to block anyone else from using her username to sign in).
1. When you tried to block Holly's sign in, you should have received an error message indicating **Changes could not be saved**. The reason that you received this error is that Holly is a Global Admin, and Leanna is not. Only a Global Admin can block another Global Admin from being able to sign in.
1. To verify whether Leila Macdonald can sign in after you blocked her account, you will attempt to sign in as Leila. Log out of Microsoft 365 by selecting the user icon for **Leanna Goodwin** (the circle with LG initials in the upper right-hand corner), and in her **My account** pane, select **Sign out.**
1. As a best practice, close all your browser tabs except for the **Sign out** tab once you have been signed out. On the **Sign out** tab, navigate to **https://portal.office.com**.
1. In the **Pick an account** window, select **+ Use another account**. In the **Sign in** window, enter **leila@xxx.onmicrosoft.com** (where xxx is your unique tenant ID). In the **Enter password** window, enter **Pa55w.rd**.
	>The **Pick an account** window should appear, and it should display an error message indicating **Your account has been locked. Contact your support person to unlock it, then try again.**  
	You have just verified that Leila (or someone who has obtained Leila's username and password) cannot log in.
1. Close the **Edge** Inprivate window and switch back to your other **Edge** window, where you should still be logged into **Microsoft 365** as Holly Dickson. The **Active users** list should be displayed in the **Microsoft 365 admin center** from earlier in this task.
1. Upon further investigation, Adatum's CTO has determined that Leila Macdonald's account has, in fact, not been compromised; therefore, the CTO has asked Holly to remove the block on Leila's sign in. Repeat steps 29 through 32 to unblock her account. Note how the **Block sign-in** window from step 31 now displays the **Unblock sign-in** window instead.
1. In the **Unblock sign-in** window, the **Block this user from signing in** check box is currently selected. Unselect this check box to clear it, select **Save changes**, and once Alex has been unblocked from signing in, close this window.
# Fin de l'atelier 2