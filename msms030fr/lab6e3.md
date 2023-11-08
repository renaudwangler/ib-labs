---
layout: stage
title: "Lab6-Ex3 - Configuration des stratégies d'accès clients"
length: "00"
---
# Scénario
Outlook on the web permet aux utilisateurs d'Adatum d'accèder à leur boite aux lettres depuis un navigateur Interner. Après qu'Adatum ait créé son tenant Microsoft 365 avec Exchange Online, ce dernier inclut une unique stratégie nommée **OWAMailboxPolicy-Default**. Cette stratégie définit les paramètres Outlook on the web pour tous les utilisateurs. Cependant, Dominique Skyetson, par son rôle d'administrateur de Adatum, souhaite créer une stratégie Outlook on the web policy qui s'appliqera à un utilisateur particulier (dans notre cas Alan Yoo). En vérifiant si une telle affectation de straégie par utilisateur fonctionne, Dominique sera dès lors capable de gérer les paramètres de boite aux lettres pour les différentes populations d'utilisateurs de l'entreprise.  
Dominique configurera ensuite une stratégie de boite aux lettres pour les périphériques mobiles qui exige un mot de passe de périphérique, ainsi qu'une stratégie de périphérique mobile permettant de placer en quarantaine tout nouveau périphérique; nécessitant approbation de celui-ci pour qu'il puisse synchroniser les messages.

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- La stratégie permettant de gérer le comportement de *Outlook on the web*
- La stratégie de mise en quarantaine des nouveaux périphériques mobiles
- La stratégie d'accès à la boite aux lettres depuis des périphériques mobiles


## Tâche 1 - Configuration de stratégie Outlook Web App
1. Vous devriez encore être connecté sur **LON-CL1** à l'issue de l'atelier précédent. Les portails **Microsoft 365 admin center**, **Exchange admin center** et **Mircosoft 365 Defender** (que vous pouvez désormais fermer) devraient encore être resté ouverts dans votre navigateur (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. Dans le portail **Exchange admin center**, ouvrez le groupe d'options **Roles** pour cliquer sur **Outlook Web App policies**.
1. Sur la page **Outlook Web App policies**, constatez la présence d'une stratégie par défaut, nommée **OWAMailboxPolicy-Default**. Cette stratégie définit les paramètres de 
 *Outlook on the web* pour tous les utilisateurs.  
	Puisque Dominique souhaite ajouter une stratégie spécifique, cliquer sur **New OWA policy** sur a barre de menu au-dessus de la liste.
1. Dans le panneau **new Outlook Web App mailbox policy**, sur la page **Set up the basics**, entrez ```Limited features``` dans le champ **Name**.
	>**Note :** Cette sratégie est nommée **Limited features** car elle réduit les fonctionnalités accessibles depuis le webmail.
1. Cliquez sur le bouton **Next**.
1. Sur la page **Select features**, sont affichées toutes les fonctionnalités activées dans *Outlook on the web*. La plupart de ces fonctionnalités sont activées par défaut. Décochez les cases en regard des fonctionnalités suivantes que Dominique ne veut plus voir accessibles dans cette stratégie :  
	- **Instant messaging**
	- **Text messaging**
	- **LinkedIn contact sync**
	- **Information management/Journaling**
1. Cliquez sur le bouton **Next**.
1. sur la page **View and access attachments**, décochez la case sous **Private computers**.
1. Cliquez sur **Next** puis **Create**.
1. Cliquez sur **Done** une fois que la stratégie a été créée.
1. Dans le menu de navigation du portail **Exchange admin center**, cliquez sur **Mailboxes** dans le groupe d'options **Recipients**.
1. Sur la page **Manage mailboxes**, cliquez sur la ligne correspondante à l'utilisateur **Alan Yoo**.
1. Sur le panneau d'informations de **Alan Yoo** qui s'affiche, cliquez sur **Manage email apps settings** dans la section **Email apps & mobile devices**.
1. Sur la page **Manage settings for email apps**, remplacez (vous pouvez cliquer sur le **x** à droite de la stratégie actuelle) le contenu du champ **Outlook web app mailbox policy** en tapant ```Limited features```.
1. Sélectionnez votre stratégie **Limited features** avant de cliquer sur **Save**.
1. Fermez le panneau d'information d'**Alan Yoo** une fois le changement sauvegardé.
1. Vous allez maintenant ouvrir le client Outlook sur LON-CL2. Basculez sur la machine virtuelle **LON-CL2** sur laquelle vous devriez être connecté avec l'utlisateur **.\admin**. Cliquez sur le bouton **Démarrer** de la barre des tâches et, dans le menu **Démarrer**, cliquez sur **Outlook**.
1. Si votre client Outlook n'est pas configuré, configurez le, par exemple, pour le compte de Alan Yoo (alan@WWLxxxxx.onmicrosoft.com).
1. Dans **Outlook**, cliquez sur **+ New Email**.
1. Dans la fenêtre de composition de nouveau message, cliquez sur le bouton **To** et, dans la liste des utilisateurs qui apparaît, sélectionnez **Alan Yoo** avant de cliquer sur **To** et **OK**.
1. Dans le champ **Subject**, entrez ```Attachment Test```.
1. Dans le bandeau, cliquez sur l'icône de pièce jointe et choisissez **Browse This PC**.
1. Dans la fenêtre **Insert File**, naviguez vers **C:\Windows\Logs\DISM**, sélectionnez **dism.log** puis cliquez sur **Insert**.
1. Cliquez sur **Send**.
1. Après que le message soit envoyé, fermez Outlook.
1. Si un navigateur Internet est ouvert sur LON-CL2, fermez-le. Lancez ensuite une nouvelle session de navigation en cliquant sur l'icône de **Edge** dans la barre des tâches.
1. Ouvrez *Outlook on the Web* pour **Alan Yoo** en vous rendant à l'adresse suivante : ```https://outlook.office365.com```. Si la boite aux lettres de Alan ne s'ouvre pas, connectez-vous avec son compte (**alan@WWLxxxxx.onmicrosoft.com** et le mot de passe **Pa55w.rd**).
1. Dans la boite de réception de Alan (*Inbox*), sélectionnez le message reçu de la tâche précédente dont le sujet est **Attachment Test**.
1. Sélectionnez la flèche descendante à droite du fichier joint **dism.log**.
1. Dans la boite de Alan, vous ne devriez pas avoir l'option **Donwload** si la stratégie s'est correctement appliquée.
	>**Note :** La prise en coimpte de votre stratégie peut prendre quelques minutes. Vous pouvez aussi essayer de faire un *force-refresh* de votre navigateur pour vous assurer que le moteur de webmail que Alan utilise n'est pas celui qui a été précédemment mis en cache par exemple.
1. Conservez votre navigateur Internet ouvert pour les ateliers suivants.

## Tâche 2 - Configurer l'acçés mobile
Dans cette tâche, vous allez créer une stratégie d'accès mobile qui place tous les nouveaux périphériques mobiles en quarantaine, après quoi la synchronisation de ces nouveaux périphériques devra être validée par un administrateur.  
1. Basculez sur **LON-CL1**. Les portails **Microsoft 365 admin center** et **Exchange admin center** devraient encore être resté ouverts dans votre navigateur (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. Dans le portail **Exchange admin center**, ouvrez le groupe d'options **Mobile** pour cliquer sur **Mobile device access**.
1. Sur la page **Quarantined Devices**, cliquez sur le bouton **Edit** en haut à droite.
1. Dans le panneau **Exchange ActiveSync access settings** qui s'affiche, dans la section **Connection Settings**, sélectionnez l'option **Quarantine – Let me decide to block or allow later**.
1. Sous la section **Quarantine Notification Email Messages**, enter l'adresse email de Dominique (**dom@WWLxxxxx.onmicrosoft.com**).
1. Cliquez sur le bouton **Save** avatn de fermer le panneau **Exchange ActiveSync access settings**.
1. Conservez votre navigateur Internet ouvert pour la tâche suivante.

## Tâche 3 - Configurer la boite aux lettres pour les mobiles
Dans cette tâche, vous allez configurer une stratégie de boite aux lettres accédée par les périphériques mobiles afin d'exiger un mot de passe de périphérique et une longeur minimum dudit mot de passe.
1. Dans le portail **Exchange admin center**, ouvrez le groupe d'options **Mobile** pour cliquer sur **Mobile device mailbox policy**.
1. Sur la page **Mobile device mailbox policy**, cliquez sur la stratégie **Default**.
1. Sur le panneau **Edit mobile device mailbox policy**, cliquez sur l'onglet **security** pour l'afficher en lieu et place de l'onglet *General*.
1. Sur l'onglet **Security**, cochez la case en regard de **Require a mobile device mailbox password**.
1. Cochez la case en face de **Allow simple passwords** (si elle n'est pas déjà cochée).
1. Dans le champ **Minimum password length**, entrez une valeur de **6**.
1. Dans le champ **Password recycle count**, entrez une valeur de **5**.
1. Cliquez sur **Save** et fermez le panneau **Edit mobile device mailbox policy** une fois vos chanegments sauvegardés.
1. Conservez votre navigateur Internet ouvert pour les ateliers suivants.

## Résultat
Dans cet exerice, vous avez découvert les stratégie permettant de gèrer le comportement du webmail et de l'utilisation de Echange Online depuis des périphériques mobiles.

# Fin de l'atelier 6