---
layout: stage
title: "Lab2-Ex4 - Gestion des utilisateurs et des groupes avec Windows PowerShell"
length: "00"
date: "15/05/2024"
script: "msms030.js"
---
# Scénario
Windows Powershell permet aux administrateurs d'automatiser, d'accélérer et de fluidifier les tâches qui seraient faites dans le portail Microssoft 365 admin center, les plus compliquées comme les plus simples.  
Dans cet exercice, vous allez continuer, en tant que Dominique, à faire des opérations administratives de maintenance dans Microsoft 365 en utilisant Windows Powershell. Cela vous permettra de comparer l'expérience de création et de maintenance des utilisateurs et des groupes entre le centre d'administration et le scripting Powershell.
Vous souhaitez donc utiliser Windows Powershell pour créer des comptes utilisateurs, leur affecter des licences, modifier des comptes, créer des groupes...

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- Le module Windows Powershell Microsoft Graph
- La création d'utilisateurs par script
- La création d'utilisateurs par import depuis un fichier
- La création et modification de groupes 365 en Powershell
- Le travail avec les stratégies de mot de passe en Powershell

## Tâche 1 - Installation du module Windows Powershell pour Entra ID
Dans cette tâche vous allez mettre en place l'environnement fondamental pour la gestion de Microsoft 365 à l'aide de Windows Powershell.
1. Suite à l'exercice précédent, vous devriez être resté connecté sur la machine **LON-CL1** avec le compte **Administrator** et le mot de passe **Pa55w.rd**.
1. Dans la zone de recherche en bas à gauche de la barre des tâches, tapez ```powershell```
1. Faites un clic-droit sur **Windows Powershell ISE** et, dans le menu qui apparait, choisissez **Run as administrator**.
1. Si une fenêtre **Do you want to allow this app to make changes to your device** apparait, cliquez sur **Yes**.
1. Dans la partie basse (fond bleu) de la fenêtre **Administrator: Windows PowerShell ISE**, tapez ```install-module microsoft.graph -force``` et faites **[Entrée]** si nécessaire.
	>**Note :** Si le système Windows n'est pas correctement à jour dans la machine virtuelle, réalisez ces opérations préparatoires dans une invite **Windows Powershell** standard (en fermant la fenêtre *Windows Powershell ISE** pour la réouvrir ensuite à partir de la tâche 2...)
1. S'il vous est demandé si vous souhaitez faire confiance à **NuGet provider**, tapez **Y** pour répondre oui.
1. S'il vous est demandé de confirmer si vous souhaitez installer les modules depuis la **Powershell Gallery** (PSGallery), tapez **A** pour répondre *Oui à tous*
1. Attendez que l'installation des modules se termine et que l'ISE vous rende la main (Vous pouvez vérifier la couleur du bouton **Stop** en haut de l'outil qui doit être repassé au gris, s'il est rouge c'est que le processus d'installation n'est pas encore terminé, il peut se passer quelques minutes pendant lesquelles vous aurez l'impression que plus rien n'évolue).
1. Pour être sûr que tous les scripts Windows Powershell puissent s'exécuter correctement, il vous faut désactiver le *garde-fou* des stratégies d'exécution. Pour ce faire, utilisez la commande suivante : ```Set-ExecutionPolicy bypass -force```
	>**Note :** Comme pour les commandes précédentes, il vous faudra taper sur la touche **[Entrée]** pour lancer l'exécution de chaque commande. Nous partirons de ce principe et ne le rappellerons plus après chaque commande.
1. Laissez la fenêtre **Administrator: Windows Powershell ISE** ouverte pour la tâche suivante.
>**Note :** Si vous n'êtes pas intéressé par le détail des commandes PowerShell, vous pouvez utiliser le script suivant qui va réaliser l'équivalent des commandes des tâches suivantes. Si vous souhaitez utiliser le script, vous pouvez le faire à l'aide de la commande suivante (à l'issue de laquelle vous pouvez passer à l'exercice 5) :  
```Invoke-Command -ScriptBlock ([Scriptblock]::Create((Invoke-WebRequest 'https://raw.githubusercontent.com/renaudwangler/ib-labs/master/msms030fr/lab2e4.ps1' -useBasicParsing).Content))```

## Tâche 2 - Créer de nouveaux utilisateurs et leur affecter des licences.
Dans un exercice précédent, vous avez créé des comptes utilisateurs en utilisant le portail **Microsoft 365 admin center**. Dans cette tâche, vous allez créer deux nouveaux utilisateurs en utilisant Windows PowerShell, avant de leur affecter une licence **Microsoft 365 E5** à chacun. Vous apprendrez ensuite à supprimer un utilisateur et le remettre en production.
1. Vous devriez être resté connecté sur la machine **LON-CL1** avec le compte **Administrator** et le mot de passe **Pa55w.rd**; l'outil **Windows Powershell ISE** devrait être resté ouvert en tant qu'administrateur. Si nécessaire, maximisez sa fenêtre.
1. Dans la partie basse (fond bleu) de l'outil, tapez la commande suivante : ```Connect-MgGraph -scopes User.ReadWrite.All,Group.ReadWrite.All,Domain.ReadWrite.All,Organization.Read.All,UserAuthenticationMethod.ReadWrite.All```.
1. Dans la fenêtre **Sign in** qui apparaît, connectez-vous avec le compte de Dominique Skyetson : ```dom@[onmicrosoftDomain].onmicrosoft.com``` et son mot de passe (```ibForm@tion```). 
1. Dans la fenêtre **Permission requested**, cochez la case **Consent on behalf of your organization** et cliquez sur **Accept**.
1. Utilisez désormais la commande suivante pour créer le premier compte utilisateur nommé **Catherine Richard** avec un mot de passe **Pa55w.rd** et un emplacement **CH**.   
	>**Note :** La valeur *False* pour *ForceChangePasswordNextSignIn* signifie que Catherine n'aura pas besoin de modifier son mot de passe lors de sa première connexion.  
	```$user1 = New-MGuser –UserPrincipalName catherine@[onmicrosoftDomain].onmicrosoft.com –DisplayName "Catherine Richard" -GivenName Catherine -SurName Richard -PasswordProfile @{password='Pa55w.rd';ForceChangePasswordNextSignIn=$false} -UsageLocation CH -AccountEnabled -MailNickname catherine```
	>**Note :** Vous pouvez simplement taper la commande ```$user1``` pour afficher le résultat de l'opération précédente avant de passer à la suite.
1. la commande suivante va créer un second compte utilisateur pour **Tameka Reed**:
	```$user2 = New-MGuser –UserPrincipalName tameka@[onmicrosoftDomain].onmicrosoft.com –DisplayName "Tameka Reed" -GivenName Tameka -SurName Reed -PasswordProfile @{password='Pa55w.rd';ForceChangePasswordNextSignIn=$false} -UsageLocation CH -AccountEnabled -MailNickname tameka```
	>**Note :** Vous pouvez simplement taper la commande ```$user2``` pour afficher le résultat de l'opération précédente avant de passer à la suite.
1. Utilisez la commande suivante pour obtenir la liste des comptes qui n'ont pas de licence associée à leur compte :
	```Get-MgUser -Filter "assignedLicenses/`$count eq 0 and userType eq 'Member'" -ConsistencyLevel eventual -CountVariable unlicensedUserCount -All```
1. Utilisez la commande suivante pour obtenir la licence **Microsoft 365 E5** disponible dans le contexte du projet pilote :
	```$license = Get-MgSubscribedSku|where SkuPartNumber -like "*_365_E5*"```
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
1. Maintenant que le compte de Catherine a été restauré, il ne devrait plus se trouver dans la liste des utilisateurs restaurables (celle-ci devrait désormais être vide).
1. Utilisez la commande suivante pour afficher la liste des utilisateurs actifs :
	```Get-MgUser```
1. Vérifiez que le compte de Catherine fait bien partie de cette liste. 
1. Utilisez la commande suivante pour débloquer le compte de Catherine Richard et lui permettre de nouveau de se connecter :
	```Update-MgUser -UserId $user1.Id -AccountEnabled```
1. Laissez l'outil **Windows Powershell ISE** ouvert pour l'utiliser de nouveau dans la tâche suivante.

## Tâche 3 - Import d'utilisateurs multiples
Dans cette tâche, vous allez utiliser Windows Powershell pour importer un fichier CSV de nouveaux utilisateurs dans Microsoft 365. 
 
1. Vous devriez être resté connecté sur la machine **LON-CL1** avec le compte **Administrator** et le mot de passe **Pa55w.rd**; l'outil **Windows Powershell ISE** devrait être resté ouvert en tant qu'administrateur. Si nécessaire, maximisez sa fenêtre.
1. Dans la partie basse (fond bleu) de l'outil, tapez la commande suivante avant de taper sur **[Entrée]** pour la valider : ```Invoke-WebRequest "https://raw.githubusercontent.com/renaudwangler/ib-labs/master/msms030fr/users.csv" | Select-Object -ExpandProperty Content | Out-File ".\users.csv"```.
1. En utilisant la commande suivante, vous allez pourvoir visualiser le contenu du fichier CSV dans **Notepad** :
```notepad .\users.csv```
1. Dans la fenêtre **users.csv - Notepad** qui s'ouvre, passez en revue les informations présentes pour les utilisateurs. Notez que, pour chaque utilisateur, le domaine de connexion est **labxxxgodeploylabs.com**. Il vous faut désormais remplacer ce nom de domaine par votre **Nom DNS d'entreprise**. Dans le menu de Notepad, cliquez sur **Edit** puis **Replace**.
1. Dans la fenêtre de remplacement, tapez ```labxxxxx.godeploylabs.com``` dans le champ **Find what** et ```[godeployDomain].godeploylabs.com``` dans le champ **Replace with**.
1. Cliquez sur le bouton **Replace All** avant de fermer la fenêtre de remplacement.
1. Cliquez sur la case **X** de fermeture de **Notepad**. Dans la boite de dialogue qui apparaît vous demandant si vous souhaitez sauvegarder vos modifications, cliquez sur **Save**.
1. Retournez à **Administrator : Windows Powershell ISE** pour utiliser la commande suivante pour procéder à l'import des utilisateurs contenus dans le fichier :
	```Import-Csv -Path .\users.csv | ForEach-Object {New-MGuser –UserPrincipalName $_.UPN –DisplayName $_.DisplayName -GivenName $_.LastName -SurName $_.FirstName -PasswordProfile @{password='Pa55w.rd';ForceChangePasswordNextSignIn=$false} -UsageLocation $_.UsageLocation -AccountEnabled -MailNickname $_.FirstName -jobTitle $_.Title -Department $_.department -StreetAddress $_.StreetAddress -City $_.city -PostalCode $_.PostalCode -Country $_.Country}```
1. Constatez le résultat de cette commande : chaque utilisateur est ajouté à l'environnement Microsoft 365 (sans licence affectée cependant).
1. Vous pouvez ensuite utiliser la commande suivante pour obtenir la liste des comptes utilisateurs et constater qu'elle contient désormais les nouveaux utilisateurs importés à l'instant :
	```Get-MgUser```
1. Minimiser l'outil **Administrator : Windows Powershell ISE** et retournez dans votre navigateur Internet. 
1. Dans le portail **Microsoft 365 admin center** navigez jusqu'à la liste **Active users**. Jetez un oeil au contenu de cette liste pour vérifier que les utilisateurs importés sont bien présents, ainsi que Catherine Richard et Tameka Reed, que vous avez ajouté précédemment par commandes PowerShell.
1. Dans le **Microsoft 365 admin center**, cliquez syr **Show all** (si nécessaire) pour afficher toutes les entrées de menu. Dans le groupe d'options **Admin centers**, cliquez sur **Exchange**.
1. Dans le portail **Exchange admin center**, ouvrez le groupe d'options **Recipients** pour sélectionner **Mailboxes** si vous n'y êtes pas arrivé par défaut. Parcourrez les boites aux lettres et notez qu'aucune boite aux lettres n'a été créée pour les utilisateurs sans licence.
1. Fermez l'onglet **Exchange Admin Center** dans le navigateur, pour retourner sur l'onglet **Microsoft 365 admin center**. 
1. Conservez la session ouverte sur la machine virtuelle LON-CL1 pour la tâche suivante

## Tâche 4 - Configurez les groupes et leur appartenance
Dans un exercice antérieur, vous avez utilisé le portail d'administration Microsoft 365 pour créer quelques groupes. Dans cette tâche, vous allez utiliser Windows Powershell pour créer un groupe et ajouter deux membres à celui-ci.
1. Vous devriez être resté connecté sur la machine **LON-CL1** avec le compte **Administrator** et le mot de passe **Pa55w.rd**; l'outil **Windows Powershell ISE** devrait être resté ouvert en tant qu'administrateur. Si nécessaire, maximisez sa fenêtre.
1. Dans la partie basse (fond bleu) de l'outil, tapez la commande suivante avant de taper sur **[Entrée]** pour la valider : 
	```$mktGroup = New-MgGroup -DisplayName Marketing -Description 'Marketing department users' -groupTypes unified -MailEnabled -securityEnabled -mailNickName marketing```
1. Utilisez la commande suivante pour ajouter **Catherine** (compte utilisateur créés précédemment et encore référencé par la variable powershell) dans le nouveau groupe **Marketing** :
	```New-MgGroupMember -groupId $mktGroup.Id -DirectoryObjectId $user1.Id```
1. Utilisez la commande suivante pour ajouter le compte de **Tameka** dans le nouveau groupe **Marketing** :
	```New-MgGroupMember -groupId $mktGroup.Id -DirectoryObjectId $user2.Id```
1. Pour vérifier votre mise en oeuvre, vous pouvez utiliser la commande suivante :
	```Get-MgGroupMember -groupId $mktGroup.Id | ForEach-Object {Get-MgUser -UserId $_.Id}```
1. Vérifiez que Catherine Richard et Tameka Reed apparaissent dans la liste des membres du groupe Marketing.
1. Laissez l'outil **Windows Powershell ISE** ouvert pour l'utiliser de nouveau dans la tâche suivante.

## Tâche 5 - Configurer les mots de passe des utilisateurs
Vous avez précédemment utilisé le portail **Microsoft 365 admin center** pour mettre à jour la stratégie de mots de passe de Adatum en changeant la durée de vie de mot de passe pour la faire passer de 90 jours à 60. Vous souhaitez désormais utiliser Windows Powershell pour replacer cette durée d'expiration de mots de passe à 90 jours.  
Vous allez d'ailleurs en profiter pour modifier le timing de notification de cette expiration de mots de passe pour le faire passer à 10 jours.
1. Vous devriez être resté connecté sur la machine **LON-CL1** avec le compte **Administrator** et le mot de passe **Pa55w.rd**; l'outil **Windows Powershell ISE** devrait être resté ouvert en tant qu'administrateur. Si nécessaire, maximisez sa fenêtre.
1. Dans la partie basse (fond bleu) de l'outil, tapez la commande suivante avant de taper sur **[Entrée]** pour la valider : 
	```Get-MgDomain | ForEach-Object { update-MgDomain -DomainId $_.Id -PasswordNotificationWindowInDays 10 -PasswordValidityPeriodInDays 90 }```
1. Utilisez la commande suivante pour modifier le mot de passe du compte utilisateur Tameka :
	```Reset-MgUserAuthenticationMethodPassword -UserId $user2.id -NewPassword 'P@$$w0rd' -AuthenticationMethodId (Get-MgUserAuthenticationPasswordMethod -userId $user2.Id).id```
1. Utilisez la commande suivante pour que le mot de passe de tous les utilisateurs expire (et s'assurer ainsi que la stratégie choisie à l'instant soit bien appliquée par tout le monde) : 
```Get-MGuser -All | ForEach-Object { Update-MgUser -UserId $_.Id -PasswordPolicies None}```	
1. Conservez la session ouverte sur la machine virtuelle LON-CL1, réduisez l'outil **Administrator : Windows Powershell ISE** dans la barre des tâches et maximisez la fenêtre de votre navigateur Internet pour l'exercice suivant.

## Résultat :
Après avoir réalisé cet exercice, vous avez parcouru le module Windows Powershell **Microsoft Graph** pour diverses actions administratives comme créer des utilisateurs, affecter des licences, créer des groupes par exemple.

Vous pouvez poursuivre par [l'exercice 5 - Délégation d'administration](lab2e5)