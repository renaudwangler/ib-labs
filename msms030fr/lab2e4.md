---
layout: stage
title: "Lab2-Ex4 - Gestion des utilisateurs et des groupes avec Windows PowerShell"
length: "00"
---
# Scénario
Windows Powershell permet aux administrateurs d'automatiser, d'accélérer et de fluidifier les tâches qui seraient faites dans le portail Microssoft 365 admin center, les plus compliquées comme les plus simples.
Dans cet exerice, vous allez continuer, en tant que Dominique, à faire des opérations administratives de maintenance dans Microsoft 365 en utilisant Windows Powershell. cela vous permettra de comparer l'expérience de création et de maintenance des utilisateurs et des groupes entre le centre d'administration et le scripting Powershell.
Vous souhaitez donc utiliser Windows Powershell pour créer des comptes utilisateurs, leur affecter des les licences, modifier des comptes, crééer des groupes...


# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- 

## Tâche 1 - Installation du module Windows Powershell pour Entra ID
Dans cette tâche vous allez mettre en place l'environnement fondamental pour la gestion de Microsoft 365 à l'aide de Windows Powershell.
1. Suite à l'exerice précédent, vous devriez êtres resté connecté sur la machine **LON-CL1** avec le compte **Administrator** et le mot de passe **Pa55w.rd**.
1. Dans la zone de recherche en bas à gauche de la barre des tâches, tapez ```powershell```
1. Faites un clic-droit sur **Windows Powershell ISE** et, dans le menu qui apparait, choisissez **Run as administrator**.
1. Si une fenêtre **Do you want to allow this app to make changes to your device** apparait, cliquez sur **Yes**.
1. Dans la partie basse (fond bleu) de la fenêtre **Administrator: Windows PowerShell ISE**, tapez ```install-module mircosoft.graph -force``` et faites **[Entrée]**.
1. S'il vous est demandé si vous souhaitez faire confiance à **NuGet provider**, tapez **Y** pour répondre oui.
1. S'il vous est demandé de confirmer si vous souhaitez installer les modules depuis la **Powershell Gallery** (PSGallery), tapez **A** pour répondre *Oui à tous*
1. Attendez que l'installation des modules se termine et que l'ISE vous rende la main (Vous pouvez vérifier la couleur du bouton **Stop** en haut de l'outil qui doit être repassé au gris, s'il est rouge c'est que le processus d'installation n'est pas encore terminé, il peut se passer quelques minutes pendant lesquelles vous aurez l'impression que plus rien n'évolue).
1. Laissez la fenêtre **Administrator: Windows Powershell ISE** ouverte pour la tâche suivante.

## Tâche 2 - Créer de nouveaux utilisateurs et leur affecter des licences.
Dans un exercice précédent, vous avez créé des comptes utilisateurs en utilisant le portail **Microsoft 365 admin center**. Dans cette tâche, vous allez créer deux nouveaux utilisateurs en utilisant Windows PowerShell, avant de leur affecter une licence **Office 365 E5** à chacun. Vous apprendrez ensuite à supprimer un utilisateur et le remettre en production.
1. Vous devriez êtres resté connecté sur la machine **LON-CL1** avec le compte **Administrator** et le mot de passe **Pa55w.rd**; l'outil **Windows Powershell ISE** devrait être resté ouvert en tant qu'administrateur. Si nécessaire, maximisez sa fenêtre.
1. Dans la partie basse (fond bleu) de l'outil, tapez la commande suivante avant de taper sur **[Entrée]** pour la valider : ```Connect-MgGraph -scopes User.ReadWrite.All,Organization.Read.all```.
1. Dans la fenêtre **Sign in** qui apparaît, connectez vous avec le compte de Dominique Skyetson : **dom@WWLxxxxx.onmicrosoft.com** et son mot de passe (**ibForm@tion**). 
1. dans la fenêtre **Permission requested**, cochez la case **Consent on behalf of your organization** et cliquez sur **Accept**.
1. Pour être sur que tous les scripts Windows Powershell puissent s'éxecuter correctement, il vous faut désactiver le *garde-fou* des stratégies d'exécution. Pour ce faire, utilisez la commande suivante : ```Set-ExecutionPolicy bypass -force```
	>**Note :** Comme pour les commandes précédentes, il vous faudra taper sur la touche **[ENtrée]** pour lancer l'exécution de chaque commande. Nous partirons de ce principe et ne le rappelerons plus après chaque commande.
1. Utilisez désormais la commande suivante pour créer le premier compte utilisateur nommé **Catherine Richard** avec un mot de passe **Pa55w.rd** et un emplacement **CH**. Dans la commande suivante, pensez bien à remplacer WWLxxxx.onmicrosoft.com par le nom de domaine pertinent dans votre contexte d'atelier. 
	>**Note :** La valeur *False* pour *ForceChangePasswordNextSignIn* signifie que Catherine n'aura pas besoin de modifier son mot de passe lors de sa première connexion.  
	```$user1 = New-MGuser –UserPrincipalName catherine@WWLxxxxx.onmicrosoft.com –DisplayName "Catherine Richard" -GivenName Catherine -SurName Richard -PasswordProfile @{password='Pa55w.rd';ForceChangePasswordNextSignIn=$false} -UsageLocation CH -AccountEn,abled -MailNickname catherine```
	>**Note :** Vous pouvez simplement taper la commande ```$user1``` pour afficher le résultat de l'opération précédente avant de passer à la suite.
1. la commande suivante va créer un second compte utilisateur pour **Tameka Reed** (pensez à remplacer le nom du domaine):
	```$user2 = New-MGuser –UserPrincipalName tameka@WWLxxxxx.onmicrosoft.com –DisplayName "Tameka Reed" -GivenName Tameka -SurName Reed -PasswordProfile @{password='Pa55w.rd';ForceChangePasswordNextSignIn=$false} -UsageLocation CH -AccountEnabled -MailNickname tameka```
	>**Note :** Vous pouvez simplement taper la commande ```$user2``` pour afficher le résultat de l'opération précédente avant de passer à la suite.
1. Utilisez la commande suivante pour obtenir la liste des comptes qui n'ont pas de licence associée à leur compte :
	```Get-MgUser -Filter "assignedLicenses/`$count eq 0 and userType eq 'Member'" -ConsistencyLevel eventual -CountVariable unlicensedUserCount -All```
1. Utilisez la commande suivante pour obtenir la licence **Office 365 E3** disponible dans le contexte du projet pilote :
	```$license = Get-MgSubscribedSku|where SkuPartNumber -eq ENTERPRISEPACK```
	>**Note :** Vous pouvez simplement taper la commande ```$license``` pour afficher le résultat de l'opération précédente avant de passer à la suite.
1. Utilisez la commande suivante pour affecter la licence au premier compte utilisateur :
	```Set-MgUserLicense -userId $user1.id -AddLicenses @{SkuId=$license.SkuId} -RemoveLicenses @()```
1. Utilisez la commande suivante pour affecter la même licence au second compte utilisateur :
	```Set-MgUserLicense -userId $user2.id -AddLicenses @{SkuId=$license.SkuId} -RemoveLicenses @()```	
1. Utilisez la commande suivante pour bloquer le compte de Catherine et l'empècher de se connecter à l'environnement Mixcrosoft 365 :
	```Update-MgUser -UserId $user1.Id -AccountEnabled:$false```
1. Utilisez la commande suivante pour supprimer le compte de Catherine :
	```Remove-MgUser -UserId $user1.Id```
	>**Note :** Cette commande supprimer le compte utilisateur sans demande aucune confirmation.
1. Utilisez la commande suivante pour afficher tous les utilisateurs supprimés (et restaurables) :
	```Get-MgDirectoryDeletedUser```
1. Vérifiez que Catherine Richard fait partie des comptes supprimés remontés par la précédente commande.
1. Utilisez la commande suivante pour restaurer le compte de Catherine :
	```Restore-MgDirectoryDeletedItem -DirectoryObjectId (Get-MgDirectoryDeletedUser|where DisplayName -like catherine*).id```
1. Utilisez la commande suivante pour afficher tous les utilisateurs supprimés (et restaurables) :
	```Get-MgDirectoryDeletedUser```
1. At the Powershell prompt, type the following command and then press Enter to view the list of deleted users:  
	```Get-MsolUser –ReturnDeletedUsers```
1. Maintenant que le compte de Catherine a été restauré, il ne devrait plus se trouver dans la liste des utilisateurs restaurables (celle-ci devrait désormais être vide).
1. Utilisez la commande suivante pour afficher la liste des utilisateurs actifs :
	```Get-MgUser```
1. Vérifiez que le compte de Catherine fait bien partie de cette liste. 
1. Utilisez la commande suivante pour débloquer le compte de Catherine Richard et lui permettre de nouveau de se connecter :
	```Update-MgUser -UserId $user1.Id -AccountEnabled```
1. Laissez l'outil **Windows Powershell ISE** ouvert pour l'utiliser de nouveau dans la ta^che suivante.

## Tâche 3 - Import d'utilisateurs multiples
In this task, you will use Windows PowerShell to import a csv file of new user account records into Microsoft 365. The file path is **C:\labfiles\O365Users.csv**.  
At first you will attempt to import the users and assign each an **Microsoft 365 Business Premium** license. Based on the outcome of that import, you will make an adjustment to the csv file and re-import the users without a license.  
1. You should still be logged into the **LON-CL1** VM as the **Administrator** account with a password of **Pa55w.rd**.
1. You should still have the **Windows PowerShell** window open from the prior task.
1. On the taskbar at the bottom of the screen, select the **File Explorer** icon.
1. In **File Explorer** navigate to **C:\labfiles**, right-click on the **O365users.csv** file, and in the menu that appears select **Open with** and then Select **Notepad**.
1. In **Notepad**, review the records for each user account. Note the domain portion of each username is **yourdomain.hostdomain.com**. You need to replace this with **xxx.onmicrosoft.com** for each user (where you will enter the unique tenant ID in place of xxx). The easiest way to do this is by doing a Find and Replace. In the menu bar at the top of the **Notepad** window, select **Edit** and then select **Replace**.
1. In the **Replace** window, copy **yourdomain.hostdomain.com** from one of the records and paste it in the **Find what** field, enter **xxx.onmicrosoft.com** in the **Replace with** field (replacing xxx with your tenant ID), and then select **Replace All**.
1. In **Notepad**, review the records for each user account. Note the license assigned to each user is **adatumyyxxxx:ENTERPRISEPACK**. You need to replace this with **xxx:SPB** for each user (where you will enter your unique tenant ID in place of xxx). The easiest way to do this is by doing a Find and Replace. The **Replace** window should still be open; if you closed it after the prior step, then open it again.
1. In the **Replace** window, copy **adatumyyxxxx:ENTERPRISEPACK** from one of the records and paste it in the **Find what** field, enter **xxx:SPB** in the **Replace with** field (replacing xxx with your tenant ID), and then select **Replace All**.
1. Close the **Replace** window.
1.  Select the X in the upper right corner of the **Notepad** window to close it.  
In the **Notepad** dialog box that appears asking if you want to save the changes to the O365Users.csv file, select **Save**.
1. Close File Explorer.
1. In **Windows PowerShell**, copy the following command and paste it in at the command prompt and then press Enter to bulk import the users from the O365Users.csv file into Microsoft 365:
	```Import-Csv -Path C:\labfiles\O365Users.csv | ForEach-Object { New-MsolUser -UserPrincipalName $_."UPN" -AlternateEmailAddresses $_."AltEmail" -FirstName $_."FirstName" -LastName $_."LastName" -DisplayName $_."DisplayName" -BlockCredential $False -ForceChangePassword $False -LicenseAssignment $_."LicenseAssignment" -Password $_."Password" -PasswordNeverExpires $True -Title $_."Title" -Department $_."Department" -Office $_."Office" -PhoneNumber $_."PhoneNumber" -MobilePhone $_."MobilePhone" -Fax $_."Fax" -StreetAddress $_."StreetAddress" -City $_."City" -State $_."State" -PostalCode $_."PostalCode" -Country $_."Country" -UsageLocation $_."UsageLocation" }```
1. Notice what happens when you run this command. Each of users in the import file is successfully added into Microsoft 365, and the **isLicensed** column displays **True** for each record.  
1. At the Powershell prompt, type the following command and then press Enter to view the list of active users:  
	```Get-MsolUser```
1. Verify the new users from the .csv file are included in the active users list. 
1. Minimize the PowerShell window and switch back to your Edge browser. 
1. In the **Microsoft 365 admin center** navigate to the **Active users** list. Review the active users and verify the new users you just imported in PowerShell appear in the list, along with Catherine Richard and Tameka Reed, who you added individually using PowerShell.
1. In the **Microsoft 365 admin center**, in the left-hand navigation pane, select **Show all** (if necessary) to display all the menu options. Under the **Admin centers** section, select **Exchange**.
1. In the **Exchange admin center**, in the left-hand navigation pane, expand **Recipients** and select **Mailboxes**. Review the mailboxes. Note that no Exchange mailbox was created for any of the unlicensed users.
1. Close the **Mailboxes** tab in your browser, which takes you back to the **Microsoft 365 admin center** tab. 
1. Leave Windows PowerShell and your Edge browser open and proceed to the next task.

## Tâche 4 - Configure groups and group membership by using Windows PowerShell
In a previous lab exercise, you used the Microsoft 365 admin center to create several Microsoft 365 groups. In this task, you will use PowerShell to create a group and add two members to the group.
1. You should still be logged into the **LON-CL1** VM as the **Administrator** account with a password of **Pa55w.rd**.
1. Towards the end of the prior task, you minimized the **Windows PowerShell** window. Select the **PowerShell** icon on the taskbar to maximize the window. 
1. In **Windows PowerShell**, at the command prompt type the following command and press Enter to create a new Microsoft 365 group called **Marketing**:  
	```New-MsolGroup –DisplayName “Marketing” –Description "Marketing department users"```  
1. At the Powershell prompt, type the following command and then press Enter to configure a variable for the group. This command will create a macro cmdlet that will retrieve all objects that belong to Marketing.  
	```$MktGrp = Get-MsolGroup | Where-Object {$_.DisplayName -eq "Marketing"}```  
1. At the Powershell prompt, type the following command and then press Enter to configure a variable for the first user account. This command will create a macro cmdlet that retrieves all users that have a display name Catherine Richard.  
	```$Catherine = Get-MsolUser | Where-Object {$_.DisplayName -eq "Catherine Richard"}```  
1. At the Powershell prompt, type the following command and then press Enter to configure a variable for the first user account. This command will create a macro cmdlet that retrieves all users that have a display name Tameka Reed.  
	```$Tameka = Get-MsolUser | Where-Object {$_.DisplayName -eq "Tameka Reed"}```  
1. At the Powershell prompt, type the following command and then press Enter to add Catherine Richard to the newly created Marketing department users group:  
	```Add-MsolGroupMember -GroupObjectId $MktGrp.ObjectId -GroupMemberType "User" -GroupMemberObjectId $Catherine.ObjectId```  
1. At the Powershell prompt, type the following command and then press Enter to add Tameka Reed to the newly created Marketing department users group:  
	```Add-MsolGroupMember -GroupObjectId $MktGrp.ObjectId -GroupMemberType "User" -GroupMemberObjectId $Tameka.ObjectId```  
1. At the Powershell prompt, type the following command and then press Enter to retrieve all members associated with the new Marketing department users group:  
	```Get-MsolGroupMember -GroupObjectId $MktGrp.ObjectId```
1. Verify that Catherine Richard and Tameka Reed appear in the list of group members for the Marketing department users group.
1. Leave Windows PowerShell open and proceed to the next task.

## Tâche 5 - Configure user passwords by using Windows PowerShell
In a previous lab, you used the Microsoft 365 admin center to update Adatum's password policy by first changing the expiration period from 90 days to 14. You then reset the expiration days from 14 days back to 90.  
For this task, you will use PowerShell to set the expiration days from 90 to 60, and the notification period from 14 days to 10.  
In a previous lab, you reset a user's password using the Microsoft 365 admin center. In this task, you will change a user's password using PowerShell. You will also use PowerShell to update every user account by turning off the **Password Never Expires** parameter for all users. This will ensure that all users will be subject to the new password policy in which their password will expire after 60 days.
1. You should still be logged into the **LON-CL1** VM as the **Administrator** account with a password of **Pa55w.rd**.
1. In **Windows PowerShell**, at the command prompt, type the following command and then press Enter to update the password policy for Adatum's **xxx.onmicrosoft.com** domain. You will change the expiration period to **60 days** and the notification period to **10 days**. In the command, don't forget to replace the **xxx** with your unique tenant ID.  
	```Set-MsolPasswordPolicy -DomainName "xxx.onmicrosoft.com" –ValidityPeriod "90" -NotificationDays 14```  
1. At the Powershell prompt, type the following command and then press Enter to change Tameka Reed's password to **P@$$W0rd**. In the command, don't forget to replace the **xxx** with the unique tenant ID provided by your lab hosting provider.   
	```Set-MsolUserPassword –UserPrincipalName "Tameka@xxx.onmicrosoft.com" –NewPassword 'P@$$W0rd'```  
1. At the Powershell prompt, type the following command and then press Enter to turn off **Password Never Expires** parameter for all users. This will ensure that all users will be subject to the new password policy in which their password will expire after 60 days.  
	```Get-MsolUser | Set-MsolUser –PasswordNeverExpires $false```
1. Leave your Windows PowerShell session open for future lab exercises; simply minimize it before going on to the next exercise. In addition, leave your browser and all its tabs open.  

**Results**: After completing this exercise, you should have created new users, assigned licenses, modified existing users, and configured groups and Adatum's password policies, and reset a user password by using the Windows PowerShell command-line interface.

Vous pouvez poursuivre par [l'exercice 5 - Délégation d'administration](lab2e5)