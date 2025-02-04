---
layout: stage
title: "Lab6-Ex2 - Gestion des bibliothèques de documents"
length: "00"
date: "10/01/2025"
script: "ms365.js"
---
# Scénario
Dans cet exercice, Dominique Skyetson veut commencer à explorer les sites *SharePoint Online*. Pour en comparer le fonctionnement, Dominique va créer un site en utilisant le portail *SharePoint Online admin center*, avant d'en créer un second en utilisant Windows PowerShell. Elle va ensuite mettre en place les permissions d'accès sur les sites et vérifier leur mode de fonctionnement.

## Tâche 1 - Créer un site dans le SharePoint admin center
Dans cette tâche, vous allez utiliser le portail Sharepoint admin center pour créer un site pour le service formation de Adatum.
1. Sur la machine LON-CL1, les portails **Microsoft 365 admin center** et **Sharepoint admin center** devraient être resté ouverts dans votre navigateur (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. Dans le menu de navigation du **Sharepoint admin center**, cliquez sur le choix **Active sites** dans le groupe d'options **Sites**.
1. Sur la barre de menu au-dessus de la liste de sites, cliquez sur le bouton **+ Create**.
1. Sur la page **Create a site: Select the site type**, cliquez sur la tuile **Communication Site**.
1. Sur la page **Select a template**, choisissez le modèle de site qui semble convenir pour la communication sur les formations proposées par Adatum en cliquant sur la première tuile. Validez votre choix en cliquant sur **use template**.
1. Sur la page **Give your site a name**, saisissez ```Training``` dans le champ **Site name**.
1. Dans le champ **Site description**, saisissez ```Adatum training department catalog```.
1. Dans le champ **Site owner**, tapez ```dominique``` et cliquez sur le compte de Dominique Skyetson.
1. Sur la page **Give your site a name**, cliquez sur le bouton **Next**.
1. Sur la page **Set language and other options**, cliquez sur le bouton **Create site**. Vous allez retourner sur la page **Active sites**.
	>**Note :** La création d'un site Sharepoint Online peut prendre quelques minutes. Ne passez pas à la suite des opérations tant que vous ne voyez pas apparaître le site **Training** dans la liste.

1. Sur la page **Active sites**, passez votre souris sur la ligne du site **Training**. Sélectionnez la case à cocher qui s'affiche à gauche du nom du site.
1. Sélectionnez la ligne du site **Training** devrait faire apparaître le bouton **Sharing** dans la barre de menu au-dessus de la liste de sites. Si ce bouton n'apparaît pas, vous pouvez tenter de rafraichir la page de votre navigateur.
1. Cliquez sur le bouton **Sharing** une fois qu'il est apparu sur la barre de menu.
1. Dans le panneau **Sharing**, sélectionnez **Anyone** avant de cliquer sur **Save** et de fermer le panneau.
	>**Note :** Les paramètres de site changent pour permettre le partage d'éléments de ce site de la manière la plus ouverte possible.

1. Conservez votre navigateur Internet ouvert pour les tâches ultérieures.

## Tâche 2 - Créer un site avec Windows Powershell
Après avoir créé un site avec le portail d'administration de Sharepoint Online, vous allez désormais utiliser Windows Powershell pour créer un site pour le service comptabilité de Adatum.
1. Sur **LON-CL1**, tapez ```Powershell ISE``` dans la recherche à droite du bouton **Démarrer** sur la barre des tâches.
1. Sur le menu **Démarrer**, dans le panneau de détail sur l'application **Windows PowerShell ISE**, cliquez sur **Run as administrator**.
1. Si une fenêtre **User Account Control** apparaît, connectez-vous avec le compte **adatum\administrator** et le mot de passe **Pa55w.rd**.
1. Dans la partie basse (bleue) de la fenêtre **Administrator: Windows Powershell ISE**, utilisez la commande suivante pour installer le module Powershell de gestion de Sharepoint Online :  
	```Install-Module Microsoft.Online.SharePoint.PowerShell -Force```
1. Dans l'invite de commande de l'ISE, utilisez la commande suivante pour vous connecter à votre environnement Sharepoint Online :  
	```Connect-SPOService –Url https://WWLxxxxx-admin.sharepoint.com```
	>**Note :** WWLxxxxx est votre préfixe de tenant que vous avez noté au début de vos ateliers. Notez que, dans cette commande, il est suffixé de *-admin*.

1. Dans la boite de dialogue **Sign in**, saisissez le nom de connexion de Dominique Skyetson (dom@WWLxxxxx.onmicrosoft.com) et cliquez sur **Next**.
1. Dans la boite de dialogue **Enter password**, saisissez ```ibForm@tion``` et cliquez sur **Sign in**.
1. Dans l'invite Powershell, utilisez la commande suivante pour créer un nouveau site nommé **Accounting** :  
	```New-SPOSite -Url https://WWLxxxxx.sharepoint.com/sites/Accounting -Owner dom@WWLxxxxx.onmicrosoft.com -StorageQuota 500 -NoWait -Template PROJECTSITE#0 –Title Accounting```
	>**Note :** WWLxxxxx est votre préfixe de tenant que vous avez noté au début de vos ateliers. Notez que, dans cette commande, il est **n'est pas** suffixé de *-admin* !

1. Minimisez la fenêtre **Administrator: Windows Powershell ISE**.
1. Dans votre navigateur Internet, la page **Active sites** devrait toujours être affichée à l'issue de la tâche précédente. Si le site **Accounting** ne s'affiche pas, rafraichissez la page du navigateur. (Il vous faudra peut-être attendre quelques instants et répéter l'opération). Ne passez pas à la tâche suivante tant que vous n'avez pas constaté l'affichage du site **Accounting** dans la liste des sites actifs.
1. Conservez votre navigateur Internet ouvert pour la tâche suivante.

## Tâche 3 - Configurer des permissions sur les sites
Après avoir ajouté les sites de la formation et de la comptabilité d'Adatum, vous allez configurer des permissions pour le site de la formation. Vous allez affecter le rôle d'administrateur sur le site Formation à Alan Yoo.

1. Sur la machine LON-CL1, les portails **Microsoft 365 admin center** et **Sharepoint admin center** devraient être resté ouverts dans votre navigateur (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. Dans le menu de navigation du portail **SharePoint admin center**, cliquez sur **Active sites** dans le groupe d'options **Sites**.
1. Sur la page **Active sites**, constatez que les sites **Accounting** et **Training** apparaissent dans la liste des sites actifs. Cliquez sur le nom du site **Training**.
	>**Note :** Cliquez sur le nom du site et non sur son adresse *../sites/training*.

1. A la création du site **Training**, Dominique Skyetson a été affecté comme seul administrateur. Vous souhaitez désormais ajouter **Alan Yoo** comme administrateur secondaire.  
	Sur le panneau **Training** qui s'affiche à droite de l'écran, sélectionnez l'onglet **Membership**.
1. Sur l'onglet **Membership**, sous la section **Site admins** cliquez sur **+ Add site admins**.
1. Sur la page **Add site admins to training**, tapez ```Alan``` dans le champ **Search by name or email address**. Sélectionnez le compte de **Alan Yoo** lorsqu'il apparaît puis cliquez sur **Add (1)**.
1. Fermez le panneau **Add site admins to Training**.
1. Basculez sur la machine virtuelle **LON-CL2** ou vous devriez encore être connecté avec le compte **.\admin**.
1. Dans le navigateur Edge, le Webmail **Outlook** devrait être resté ouvert (et vous devriez y être connecté avec le compte de *Alan Yoo*).
1. Dans la barre d'adresse du navigateur, utilisez l'adresse suivante : ```https://WWLxxxxx.sharepoint.com/sites/Training``` pour ouvrir le site Sharepoint du service formation de Adatum.
1. Une fois que le site **Training** s'ouvre, attendez que l'icône d'engrenage s'affiche en haut à droite (à gauche des initiales de Alan Yoo). Cliquez sur cette icône d'engrenage.
1. Sur le panneau **Settings**, cliquez sur **Site permissions**.
1. Sur le panneau **Permissions**, cliquez sur **Advanced permissions settings**.
1. Sur l'onglet **Permissions: Training**, cliquez sur **Site Collection Administrators** dans la section **Manage** du ruban.
1. Vérifier que **Alan Yoo** apparaît dans le champ. Vous venez de vérifier que Alan est administrateur du site du service Formation, car il peut accéder aux paramètres administratifs de celui-ci.
1. Conservez votre navigateur Internet ouvert pour la tâche suivante. 

## Tâche 4 - Vérification de l'accès aux sites
Dans cette tâche, Alan Yoo, en tant qu'administrateur du site Sharepoint de la formation va donner l'accès au site du service Formation à deux utilisateurs qui en ont besoin : Libby Hayward et Elvis Cress. Tandis que Libby va demander l'accès au site, Alan sait déjà que Elvis a besoin d'accès et va lui assigner directement.
1. Sur **LON-CL2**, faites un clic-droit sur l'icône de **Edge** sur la barre des tâches, et dans le menu qui apparaît, choisissez **New InPrivate window**.
1. Dans la nouvelle session **InPrivate Browsing** de votre navigateur Internet, entrez l'adresse suivante pour ouvrir le site Sharepoint du service formation : ```https://WWLxxxxx.sharepoint.com/sites/Training```.
1. Dans la boite de dialogue **Sign in**, entrez **libby@WWLxxxxx.onmicrosoft.com** et cliquez sur **Next**.
1. Sur la page **Enter password**, saisissez ```ibForm@tion``` et cliquez sur **Sign in**.
1. Sur la page **Stay signed in?**, cliquez sur **Yes**.
1. Une page s'affiche **Access required** qui indique **You need permission to access this site.** Un champ de message est prérempli avec la valeur : **I'd like access, please**.  
	Puisque ce message peut être personnalisé, Libby souhaite saisir un message justifiant pourquoi elle a besoin d'accéder à ce site. Remplacez le message existant par le suivant : ```Bonjour. Je m'appelle Libby Hayward. Je m'occupe du suivi post-formation de nos stagiaires internes et externes en France. J'aurai donc besoin d'accéder à ce site pour pouvoir participer à la vie du service Formation d'Adatum.```
1. Cliquez sur le bouton **Request Access**.
1. Minimisez la fenêtre de navigation privée dans la barre des tâches et retournez sur le navigateur Edge ou Alan Yoo est resté connecté.
1. Sur la page du site Sharepoint **Training**, Cliquez sur l'icône d'engrenage.
1. Sur le panneau **Settings**, cliquez sur **Site contents**.
1. en haut à droite de la page, cliquez sur le bouton **Access requests**.
1. Sur la page **Access Requests**, vérifiez que la demande de Libby Hayward apparaît sous la section **Pending Requests**. Cliquez sur le bouton **Approve** en regard de la demande de Libby Hayward.
1. Sur la page du site Sharepoint **Training**, Cliquez sur l'icône d'engrenage pour sélectionner le lien **Site settings**
1. Sur la page **Site Settings**, dans la section **Users and Permissions**, cliquez sur **Site permissions**.
1. Sur l'onglet **Permissions: Training**, dans la liste des utilisateurs ayant accès au site, sélectionnez **Training Visitors**.
1. Dans la page **People and Groups - Training Visitors**, vérifiez que Libby Hayward soit dans la liste.
1. Vous souhaitez désormais inviter Elvis Cress à devenir membre du site Formation. Dans la barre de menu au-dessus de la liste des utilisateurs, cliquez sur le bouton **New** et choisissez **Add Users**.
1. Sur la boite de dialogue **Share 'Training'**, l'onglet **Invite People** est affiché par défaut. Dans le champ **Enter names or email addresses**, entrez ```Elvis```. Cliquez sur le compte de **Elvis Cress** lorsqu'il apparaît avant de cliquer sur **Share**.  
	Le nom de Elvis Cress apparaît désormais dans la page **People and Groups - Training Visitors** au côté de Libby Hayward.
1. Vous allez maintenant vérifier que Libby peut accéder au site Sharepoint du service Formation. Basculez sur la session de navigation privée que vous aviez minimisée.
1. Rafraichissez la page de demande d'accès au site **Training** (Si nécessaire, retentez l'accès sur l'adresse ```https://WWLxxxxx.sharepoint.com/sites/Training```)
1. Le site **Training** s'ouvre : vous venez de confirmer que Libby peut accéder au site formation d'Adatum suite à l'acceptation de sa demande.
1. Fermez la fenêtre de navigation privée de Libby.
1. Faites de nouveau un clic-droit sur l'icône de **Edge** sur la barre des tâches, et dans le menu qui apparaît, choisissez **New InPrivate window**.
1. Dans la nouvelle sesssion **InPrivate Browsing** de votre navigateur Internet, entrez l'adresse suivante pour ouvrir le site Sharepoint du service formation : ```https://WWLxxxxx.sharepoint.com/sites/Training```.
1. Dans la boite de dialogue **Sign in**, entrez **elvis@labxxxxx.godeploylabs.com** et cliquez sur **Next**.
1. Sur la page **Enter password**, saisissez ```Pa55W.Rd``` et cliquez sur **Sign in**.
1. Sur la page **Stay signed in?**, cliquez sur **Yes**.
1. Le site **Training** s'ouvre, confirmant que Elvis Cress y a accès après que l'administrateur du site lui ait donné accès.
1. Fermez la session de navigation privée de Elvis Cress.
1. Conservez votre navigateur Internet ouvert pour de futurs exercices. 

## Résultat
Après avoir réalisé cet exercice, vous devriez savoir créer et configurer des sites Sharepoint Online de base et analysé les permissions sur ceux-ci.

Vous pouvez poursuivre par [l'exercice 3 - Définition des autorisation](lab6e3)