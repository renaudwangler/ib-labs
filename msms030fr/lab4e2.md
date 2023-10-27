---
layout: stage
title: "Lab4-Ex2 - Mise en oeuvre de la synchronisation d'identités"
length: "00"
---
# Scénario
Dans cet exercice, vous allez activer la synchronisation entre l'ADDS de Adatum et Entra Id. Antra Connect continuera ensuite à synchroniser les changements toutes les 30 minutes.  
Vous allez ensuite utiliser des objets groupes pour faire quelques modifications sur l'ADDS et vérifier l'effet de la synchronisation sur les objets équivalents dans Entra Id. Dominique souhaite aussi comprendre comment forcer la synchronisation si une opération urgente ne peut attendre le délai de 30 minutes.  
>**Important :** En démarrant cet exerice, préparez-vous à réaliser les 3 premoières tâches sans délai entre elles pour éviter que Entra Connect ne synchronise automatiquement les changements que vous souhaitez forcer.

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- L'outil Entra Connect
- La synchronisation d'objets
- La synchronisation forçée
- La vérification de la synchronisation

## Tâche 1 - Installer Entra Connect
Dans cet tâche, vous allez utiliser l'assistant d'installation de Entra Connect pour activer la synchronisation entre l'ADDS de Adatum et Entra Id. Une fois la configuration terminée, le processus de synchronisation démarre automatiquement.
1. Vous devriez encore être connecté sur **LON-DC1** avec le compte **Administrator** à l'issue de la tâche précédente.
1. Dans votre navigateur Internet, rendez-vous à l'adresse ```https://admin.microsoft.com```.
	>**Note :** Vous pouvez réutiliser l'onglet **Step 2: Install IdFix - Microsoft** de la tâche précédente qui ne sera pas réutilisé.
1.	1. Si besoin, dans la boite **Sign in**, utilisez l'adresse de connexion de Dominique Skyetson (**dom@WWLxxxxx.onmicrosoft.com**) et cliquez sur **Next**.
	1. Dans la boite **Enter password**, saisissez **ibForm@ion** et cliquez sur **Sign in**.
	1. Dans la boite **Stay signed in?**, cochez la case **Don’t show this again** et cliquez sur **Yes.**
1. Dans le menu de navigation à gauche, ouvrez le groupe d'options **Users** pour cliquer sur **Active Users**.
1. Au-dessus de la liste **Active users**, dans la barre de menu, cliquez sur les points de suspension à droite pour sélectionner **Directory synchronization**.
1. Sur la page **About user synchronization**, cliquez surle bouton **Next**.
1. Sur la page **Select a migration option**, cochez la case the **Continuous sync** avant de cliquer sur **Next**.
1. Sur la page **Prepare by running IdFix**, cliquez sur **Next** (vous avez déjà réalisé ce nettoyage lors de l'exercice précédente de cet atelier).
1. Sur la page **Review synchronization tools**, sélectionnez **Microsoft Entra Connect Sync** et clmiquez sur **Next**.
1.Sur la page **Sync your users** page, cliquez sur la tuile **Download Microsoft Entra Connect Sync**.
1. Dans la notification en haut à droite (si la notification n'apparaît pas, allez chercher le fichier **AzureADConnect.msi** dans le dossier **Downloads** de LON-DC1), cliquez sur **Open File** sous le nom du fichier téléchargé : **AzureADConnect.msi**.
1. Si une boite de dialogue **Do you want to run this file?** s'affiche, cliquez sur **Run**.
1. L'installation de l'outil Entra Connect a démarré, sur la fenêtre **Welcome to Azure AD Connect**, cochez la case  **I agree to the license terms and privacy notice** avant de cliquer sur **Continue**.
	>**Note :** Si la fenêtre **Welcome to Azure AD Connect** n'apparait pas, cherchez son icône dans la barre des tâches (la plus à droite) et cliquez dessus.
1. Sur la page **Express Settings**, lisez les mentions concernant la synchronisation de la forêt **Adatum** et cliquez sur le bouton **Use express settings**.
1. Sur la page **Connect to Azure AD**, saisissez ```dom@WWLxxxxx.onmicrosoft.com``` dans le champ **USERNAME**, ```ibForm@tion``` dans le champ **password**, et cliquez sur **Next**.
1. Sur la page **Connect to AD DS**, saisissez ```ADATUM\Administrator``` dans le champ **USERNAME**, et ```Pa55w.rd``` dans le champ **PASSWORD** avant de cliquer sur **Next**.
1. Dans la page **Azure AD sign-in configuration**, cochez la case **Continue without matching all UPN suffixes to verified domains** et cliquez sur **Next**.
1. Sur la page **Ready to configure**, vérifiez que la case **Start the synchronization process when configuration completes** soit cochée avant de cliuquer sur **Install**.
1. Attendez la fin de la mise en oeuvre de la synchronisation (cela prendra quelques minutes) et cliquez sur **Exit**.
1. Cliquez sur le bouton démarrer en bas à gauche de la barre des tâches. Dans le menu **Démarrer**, ouvrez le groupe **Azure AD Connect** sur l'onglet **All apps** et cliquez sur **Synchronization Service** pour lancer cet outil.  
	>**Note :** Si, en sélectionnant **Azure AD Connect** dans le menu **Démarrer** vous ne pouvez ouvrir le groupe et sélectionner **Synchronization Service**, il pourra être nécessaire de vous déconnecter et reconnecter sur LON-DC1.
1. Dans la fenêtre **Synchronization Service Manager**, l'onglet **Operations** est affiché par défaut, vous permettant de surveiller le processus de synchronisation.
1. Attentez que la tâche **Export** pour **WWLxxxxx.onmicrosoft.com** soit terminée ; la colonne **Status** devrait indiquer **success**. Une fois terminée, cliquez sur cette ligne.
1. Dans la partie inférieure de la fenêtre, un panneau de détail affiche les informations concernant cette opération de synchronisation.
1. Dans la section **Export Statistics**, notez le nombre d'utilisateurs qui ont été ajoutés et mis à jour.
1. Maintenant que Entra Connect a réalisé la première synchronisation, les suivantes auront lieu toutes les 30 minutes. fermez l'outil **Synchronization Service Manager**. 
1. Retournez sur votre navigateur Internet et fermez tous les onglets ouverts sauf **Microsoft 365 admin center** pour la tâche suivante. 

## Tâche 2 - Créer des groupes pour Tester la synchronisation
Vous allez maintenant créer un nouveau groupe de sécurité dans ADDS, le mettre à jour et l'inclure dans un groupe *built-in* de l'ADDS.  
Chaque groupe se verra affecté plusieurs membres. Après la synchronisation forçée, vous vérifierez que le groupe de sécurité est désormais visible dans Entra Id. Vous vérifierez également que le groupe *built-in* n'est PAS visible dans Entra Id, bien qu'il comporte des utilisateurs présent dans l'annuaire.  
Les groupes *Built-in* sont des groupes prédéfinis dans l'ADDS, situés dans le conteneur système **Builtin**. Ils sont créés nativement lors de l'installation de l'ADDS et n'ont d'utilité que dans la mise ne place de la sécurité de l'ADDDS. N'étant pas utiles dans le cloud, vous vérifierez ici qu'ils n'y sont pas synchronisés.
1. Vous devriez toujours être connecté sur **LON-DC1** avec le compte **Administrator** à l'issue de la tâche précédente.
1. Si vous aviez fermé l'outil **Server Manager**, réouvrez-le maintenant ; sinon, cliquez sur son icône dans la barre des tâches pour le maximiser.
1. Dans l'outil **Server Manager**, cliquez sur le menu **Tools** en haut à droite et lancez le **Active Directory Administrative center**.
1. Vous allez commencer par ajouter des membres dans un groupe *built-in*. Dans la console **Active Directory Administrative Center**, sélectionnez **Adatum (local)**, dans la navigation à gauche.
1. Double-cliquez sur le conteneur **Builtin**. Cela va fficher tous les groupes *built-in* qui ont été créés uatomatiquement lors de l'installationd de l'ADDS de Adatum.
1. Dans le panneau détail à doite, double-cliquez sur le groupe **Print Operators**.
1. Dans la fenêtre des propriétés de **Print Operators**, choisissez l'onglet **Members**et cliquez sur le bouton **Add**.
1. Dans la boite de dialogue **Select Users, Contacts, Computers, Service Accounts, or Groups**, tapez les noms d'utilisateur suivant dans le champ **Enter the object names to select** :```Ashlee; Juanita; Morgan``` avant de cliquer sur le bouton **OK**.
1. Dans la fenêtre **Print Operators**, cliquez encore sur **OK** pour revenir sur la fenêtre **Active Directory Administrative Center**.
1. Vous allez maintenant créér un groupe de sécurité. Dans l'arborescence de la console, double-cliquez sur **Adatum (local)**.
1. Faites un clic-droit sur l'OU **Research**, choisissez successivement **New >** puis **Group**.
1. Dans la fenêtre **Create Group:** saisissez les informations suivantes :
	- Group name: ```Manufacturing```
	- Group type: **Security**
	- Group scope: **Universal**
1. Basculez sur l'onglet **Members** et répétez les opérations que vous avez faites sur le premier groupe pour ajouter les utilisateurs suivant à ce groupe : ```Bernardo; Charlie; Dawn```.
1. Cliquez sur **OK** mais laissez l'outil **Active Directory Administrative Center** ouvert pour la tâche suivante.  
 
## Tâche 3 - Modifier des groupes pour Tester la synchronisation 
1. Dans l'outil **Active Directory Administrative Center**, docuble-cliquez sur **Adatum (local)** puis sur l'OU **Research** dans l'arborescence de la console.
1. Dans le panneau de droite, parcourez la liste des utilisateurs et des groupes pour double-cliquer sur le groupe de sécurité **Research**.
1. Dans la fenêtre de propriétés du groupe **Research**, sélectionnez l'onglet **Members** pour visualiser les membres du groupe.
1. Vous souyhaitez supprimer plusieurs membres du groupe : sélectionnez la ligne de **Cai Chu**
1. En maintenant la touche **[Ctrl]**, cliquez sur les lignes de **Shannon Booth** et **Tia Zecirevic**.
1. Une fois les trois utilisateurs sélectionnés, clisquez sur le bouton **Remove**.
1. Vérifiez que les utilisateurs choisis ne sont plus dans la liste des membres et cliquez sur **OK**.
1. Fermez la console **Active Directory Administrative Center**.

## Task 4 - Forcer la synchronisation
Dans cette tâche, vous allez forcer volontairement la synchronisation entre l'ADDS et Entra Id, plutôt que d'attendre jusqu'à 30 minutes qu'elle ait lieu. Vous allez utiliser Windows PowerShell pour lancer cette synchonisation.
1. Sur LON-DC1, si la console **Administrator: Windows PowerShell** est toujorus ouverte, **vous devez la fermer maintenant**.  
	>**Important :** Le module Powershell n'était pas encore installé lorsque vous avez précédemment lançé la console Windows Powershell : il vous faut donc désormais la relancer pour avoir accès aux commandes de ce module que vous allez utiliser dans cette tâche.
1. Faites un clic-droit sur le bouton Démarrer, tout à gauche de la barre des tâches et sélectionnez **Windows Powershell (Admin)**.
1. Dans la fenêtre **Administrator: Windows PowerShell**, utilisez la comande suivante pour lancer la synchronisation : ```Start-ADSyncSyncCycle -PolicyType Delta```
	>**Note :** Le paramêtre **Delta** est utilisé pour ne synchoniser que les mises à jour.
1. Une fois la synchrnonisation lançée, minimisez la console PowerShell window (ne la fermez pas) et passez à la tâche suivante.

## Task 5 - Résultat de la Synchronisation   
1. Basculez sur la machine virtuelle **LON-CL1**.
1. Log into LON-CL1 as the **Administrator** with the password **Pa55w.rd**.
1. Examinons maintenant les résultats de la synchronisation. Lancez votre navigateur Edge et ouvrez le centre d'administration Microsoft 365 en utilisant l'adresse suivante : ```https://admin.microsoft.com```.
1. Connectez vous avec le compte de Dominique (```dom@WWLxxxxx.onmicrosoft.com``` avec son mot de passe ```ibForm@tion```.
1. Dans le portail **Microsoft 365 admin center**, dans le menu de navigation à gauche, ouvrez le groupe d'options **Teams & groups** pour sélectionner **Active teams & groups**.
1. Dans la liste **Active teams & groups**, vérifiez qu'un groupe **Manufacturing** apparaît sous l'onglet **Security groups**.
1. Vérifiez que, au contraire le groupe **Print Operators** n'est pas présent.
	>**Note :** Il vous faudra peu-être attendre quelques minutes pour que le groupe **Manufacturing** apparaisse, continuez à rafraichir la liste avec le bouton **Refresh** jusqu'à ce qu'il soit présent.
1.	Dans la liste **Active teams & groups**, sur la ligne du groupe **Manufacturing** vérfiiez que la colonne **Sync status** contiend une icône **Synced from on-premises**.
	Cliquez sur le groupe **Manufacturing** pour ouvrir son panneau de propriétés.
1. Sur le panneau **Manufacturing**, notez le message indiquant que vous ne pouvez gérer cet objet ici car il a été synchronisé depuis votre ADDS.  
	CLiquez sur l'onglet **Members** et vérifiez que trois utilisateurs sont memebres de ce groupe : ceux que vous avez ajouté lors d'une précédente tâche de cet exercice.
1. Fermez le panneau **Manufacturing**.
1. Regardons maintenant le contenu de ce groupe en PowerShell. Dans la barre des tâches, cliquez sur l'icone de l'outil **Administrator: Windows PowerSHell ISE** que vous aviez réduit précédemment.
1. Dans la partie basse (fond bleu) de l'outil, tapez la commande suivante pour vous connecter à Entra Id : ```Connect-MgGraph -scopes User.Read.All,Group.Read.All```.
1. Dans la fenêtre **Sign in** qui apparaît, connectez-vous avec le compte de Dominique Skyetson : **dom@WWLxxxxx.onmicrosoft.com** (ou sélectionnez le dans la fenêtre **Pick an Account** le cas échéant) et son mot de passe (**ibForm@tion**). 
1. Dans la fenêtre **Permission requested**, cochez la case **Consent on behalf of your organization** et cliquez sur **Accept**.
1. Utilisez la commande suivante pour chercher le groupe **Print Operators** :
	```Get-MgGroup -Filter "DisplayName eq 'Print Operators' and MailEnabled eq false"```
1. Vérifiez que la commande ne renvoit pas de réponse, ceci indiquant que le groupe **Print Operators** est introuvable car il n'a pas été synchronisé.
1. Utilisez la commande suivante pour obtenir identifier le groupe **Marketing** :
	```$mktGroup = Get-MgGroup -Filter "DisplayName eq 'Marketing' and MailEnabled eq false"```
1. Vous pouvez utiliser la commande suivante pour vérifier si le groupe **Marketing** a été trouvé :
	```$mktGroup```
1. Utilisez la commande suivante pour afficher la liste des utilisateurs inclus dans le groupe **Marketing** :
	```Get-MgGroupMember -GroupId $mktGroup.Id | ForEach-Object { Get-MgUser -UserId $_.Id} | Out-GridView```

1. VVérifiez que les utilisateurs suivants, que vous aviez enlevé à la tâche précédente **ne sont pas présents** dans la liste affichée :
	- Cai Chu
	- Shannon Booth
	- Tai Zecirevic
1. Vérifiez que les utilisateurs suivants, que vous aviez ajouté à la tâche précédente sont présents dans la liste affichée :
	- Bernardo Rutter
	- Charlie Miller
	- Dawn Williamson
1. Une fois votre vérification effectuée, fermez la fenêtre d'affichage des membres du groupe mais laissez ouvert l'outil **Administrator: WIndows PowerShell** pour l'exercice suivant.

## Résultat
Dans cet exerice, vous avez installé l'outil de synchronisation Entra Connect et utilisé certaines de ses fonctionnalités.

Vous pouvez poursuivre par [l'exercice 3 - Activation de la jonction de domaine hybride](lab4e3)