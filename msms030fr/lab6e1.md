---
layout: stage
title: "Lab6-Ex1 - Paramètres de transport des messages"
length: "00"
date: "15/05/2024"
script: "msms030.js"
---
# Scénario
Vous avez pris l'identité de Dominique Skyetson, Administrateur de l'entreprise Adatum, et vous avez commencé à déployer Microsoft 365 dans un environnement virtuel pilote. Dans cet exercice, Dominique veut créer des connecteurs Exchange Online d'émission et de réception en utilisant le portail Exchange admin center. Exchange utilise ces connecteurs pour gérer les flux de messages entrant et sortant vers et depuis les serveurs Exchange Online.  
Vous allez ensuite créer une série de règles de transport pour modifier le flux de messages dans l'environnement Adatum. Une première règle ajoutera un disclaimer à chaque message reçu, tandis qu'une seconde fera suivre les messages à destination de Megan Bowen vers la boite de Dominique Skyetson pour approbation avant livraison.

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- Les connecteurs Exchange Online
- Les règles de transport Exchange online
- La modération des messages
- La traçabilité des messages

## Tâche 1 - Changement du domaine de messagerie
Microsoft ayant eu de nombreux problèmes d'utilisation des domaines *onmicrosoft.com* pour des attaques cyber, ces domaines sont désormais marqués comme étant illégitimes (spam) par défaut. Dans cette première tâche, vous allez ajouter une adresse email basée sur le domaine [godeployDomain].godeploylabs.com à toutes les boites qui seront utilisées pour test.
1. Ouvrez une session sur LON-CL1 en utilisant le compte ```adatum\administrator``` et le mot de passe ```Pa55w.rd```.
1. Cliquez sur l'icône de **Microsoft Edge** dans la barre des tâches pour lancer votre navigateur Internet. Maximisez sa fenêtre.
1. Dans votre navigateur internet, utilisez l'adresse ```https://admin.microsoft.com``` pour ouvrir le portail **Microsoft 365 admin center**.
1. Connectez-vous au centre d'administration avec le compte de Dominique (```dom@[onmicrosoftDomain].onmicrosoft.com``` et mot de passe ```ibForm@tion```)
1. Dans le menu de navigation du portail **Microsoft 365 Admin center**, sous la section **Admin Centers** cliquez sur **Exchange**. Cela va ouvrir le portail administratif de Exchange Online dans un nouvel onglet.
1. Si nécessaire, dans le portail **Exchange admin center**, dans le menu de navigation à gauche, ouvrez le groupe d'options **Recipients** pour sélectionner **Mailboxes**.
1. Cliquez sur le nom de *Dominique Skyetson** puis, dans le panneau d'informations qui apparait, cliquez sur le lien **Manage email address types** dans la section **Email addresses**.
1. Sur le panneau **Manage email address types**, cliquez sur **+ Add email address type**
1. Sur le panneau **New email address**, saisissez ```dom``` dans le champ **Email address**, avant de sélectionner le domaine **[godeployDomain].godeploylabs.com** après le sigle @.
1. cliquez sur la case **Set as primary email address** afin de la sélectionner et valider en utilisant le bouton **OK** en bas de page.
1. De retour sur le panneau **Manage email adress types**, cliquez sur **Save** puis fermez le panneau d'informations de Dominique avec la croix de fermeture en haut à droite.  
**Important :** Répétez ensuite les étapes précedentes pour les comptes utilisateurs qui vont nous servir pour les test dans nos ateliers :  
> Alan Yoo | email : ```alan```@[godeployDomain].godeploylabs.com
	Megan Bowen | email : ```meganB```@[godeployDomain].godeploylabs.com

## Tâche 2 - Création de connecteurs pour TLS
Dans cette tâche, vous allez créer deux connecteurs pour forcer l'utilisation de TLS avec Trey Research, qui est une entreprise partenaire de Adatum avec laquelle des échanges de données sensibles doivent être sécurisés lors de leur transmission par email. Un connecteur servira pour la gestion des messages sortant vers Trey Research et un autre permettra d'accepter les messages entrant depuis l'entreprise partenaire.  
1. Ouvrez une session sur LON-CL1 en utilisant le compte ```adatum\administrator``` et le mot de passe ```Pa55w.rd```.
1. Cliquez sur l'icône de **Microsoft Edge** dans la barre des tâches pour lancer votre navigateur Internet. Maximisez sa fenêtre.
1. Dans votre navigateur internet, utilisez l'adresse ```https://admin.microsoft.com``` pour ouvrir le portail **Microsoft 365 admin center**.
1. Connectez-vous au centre d'administration avec le compte de Dominique (```dom@[onmicrosoftDomain].onmicrosoft.com``` et mot de passe ```ibForm@tion```)
1. Dans le menu de navigation du portail **Microsoft 365 Admin center**, sous la section **Admin Centers** cliquez sur **Exchange**. Cela va ouvrir le portail administratif de Exchange Online dans un nouvel onglet.
1. Dans le portail **Exchange admin center**, dans le menu de navigation à gauche, ouvrez le groupe d'options **Mail flow** pour sélectionner **Connectors**.
1. Sur la page **Connectors**, vous souhaitez ajouter un nouveau connecteur. Cliquez sur le bouton **+ Add a connector** sur la barre de menu au-dessus de la liste des connecteurs.
1. Sur le panneau **New connector**, sélectionnez **Office 365** sous **Connection from**.
1. Sous **Connection to**, sélectionnez **Partner organization** avant de cliquer sur **Next**.
1. Sur la page **Connector name**, entrez ```Trey Research Outgoing``` dans le champ **Name** et cliquez sur **Next**.
1. Sur la page **Use of connector**, sélectionnez l'option **Only when email messages are sent to these domains**.
	Dans la boite de texte en-dessous, saisissez ```treyresearch.net``` et cliquez sur le bouton **+** avant de cliquer sur **Next**.
1. Sur la page **Routing**, sélectionnez l'option **Use the MX record associated with the partner’s domain** et cliquez sur **Next**.
1. Sur la page **Security restrictions**, cochez la case **Always use Transport Layer Security (TLS) to secure the connection**, sélectionnez l'option **Issued by a trusted certificate authority (CA)** et cliquez sur **Next.**
1. Sur la page **Validation email**, dans le champ texte, entrez ```postmaster@treyresearch.net``` et cliquez sur le bouton **+**.
1. Cliquez sur le bouton **Validate** et attendez le résultat de la validation.
1. Notez que le statut de la tâche **Send test email** est **Failed**.
1. Sur la page **Validation email**, cliquez sur **Next** avant de cliquer sur **Yes proceed** pour sauvegarder le connecteur bien que la validation ait échoué.  
	>**Note :** La validation du flux de message n'aboutit pas car vous avez ici utilisé une entreprise fictionnelle qui n'existe pas. C'est le comportement attendu pour cet atelier.
1. Sur la page **Review Connector**, cliquez sur **Create connector** puis sur **Done**.
1. Vous venez d'ajouter un connecteur d'émission (*outbound*) de Adatum vers Trey Research. Vous allez maintenant créer un connecteur de réception (*inbound*) de Trey Research vers Adatum. Dans le centre d'admin Exchange Online, sur la page **Connectors**, cliquez de nouveau sur le bouton **+ Add a connector**.
1. Sur le panneau **New connector**, sélectionnez **Partner organization** sous la section **Connection from**.
1. Notez que **Office 365** est présélectionné automatiquement sous la section **Connection to**. Cliquez sur **Next**.
1. Sur la page **Connector name**, saisissez ```Trey Research Incoming``` dans le champ **Name** avant de cliquer sur **Next**.
1. Sur la page **Authenticating sent email**, sélectionnez l'option **By verifying that the sender domain matches one of the following domains**.
1. Dans le champ texte, saisissez ```treyresearch.net```, cliquez sur le bouton **+** et cliquez sur **Next**.
1. Sur la page **Security restrictions**, cochez la case **Reject email messages if they aren’t sent over TLS** et cliquez sur **Next**.
1. Sur la page **Review connector**, cliquez sur **Create connector**, puis cliquez sur **Done** une fois les informations sauvegardées.
1. Sur la page **Connectors**, vous devriez désormais voir le connecteur d'envoi (*outbound*) et de réception (*inbound*) que vous venez de créer.  
1. Laissez votre navigateur ouvert pour réaliser la tâche suivante.

## Tâche 3 - Créer des règles de transport
1. Vous devriez être resté connecté sur **LON-CL1** avec le compte **adatum\Administrator** et le mot de passe **Pa55w.rd**.
1. Votre navigateur Internet devrait être resté ouvert et connecté sur les portails **Microsoft 365 admin center** et **Exchange admin center** avec le compte de Dominique Skyetson.
1. Dans le portail **Exchange admin center**, le groupe d'options **Mail flow** devrait être resté ouvert suite à la tâche précédente, cliquez sur **Rules** dans ce groupe d'options.
1. Vous allez commencer par créer une règle qui ajoute un message d'avertissement à chaque email reçu. Sur la page **Rules**, cliquez sur **+ Add a rule** sur la barre de menu. Dans le menu qui apparaît, sélectionnez **Apply disclaimers**.
1. Dans le panneau **Set rule conditions** qui s'affiche, entrez les informations suivantes :  
	- Dans le champ **Name**, saisissez ```A. Datum Disclaimer```
	- Dans la section **Apply this rule if**, sélectionnez **The recipient** et **is external/internal**. Une fenêtre **Select recipient location** apparaît. Sélectionnez **Inside the organization** avant de cliquer sur **Save**.
	- Sous la section **Do the following**, cliquez sur le lien hypertexte **Enter text**. Dans la fenêtre **specify disclaimer text**, saisissez le message suivant dans le champ de texte avant de cliquer sur **Save** : ```If you are not the intended recipient of this message, you must delete it.```
	- Sous la section **Do the following** et sous le texte que vous venez de saisir, cliquez sur le lien hypertexte **Select one**. Dans la fenêtre **specity fallback action**, vous devez sélectionner une action à réaliser si le serveur ne peut ajouter le message d'avertissement. Dans notre cas, sélectionnez **Wrap** et cliquez sur **Save**.
1. Cliquez sur **Next**.
1. Sur la page **Set rule settings** choisissez **Enforce** et un niveau de sévérité de **Medium** avant de cliquer sur **Next**.
1. Sur la page **Review and finish**, cliquez sur **Finish**.
1. Une fois la règle créée, cliquez sur le bouton **Done** pour quitter l'assistant de création de règle.
1. Cliquez sur la règle que vous venez de créer et basculez le choix **Enable or disable rule** sur **Enabled** avant de fermer le panneau de la règle.
1. Vous allez désormais créer une seconde règle qui fait suivre automatiquement à la boite aux lettres de Dominique Skyetson pour modération les messages envoyés à Megan Bowen.
	Sur la page **rules** cliquez sur **+ Add a rule**. Dans le menu qui apapraît, sélectionnez **Send messages to a moderator**.
1. Dans le panneau **Set rule conditions** qui s'affiche, entrez les informations suivantes :  
	- Dans le champ **Name**, saisissez ```Messages that must be moderated```
	- Dans la section **Apply this rule if**, sélectionnez **The recipient** et **is this person**. Une fenêtre **Select members** apparaît. Sélectionnez **Megan Bowen** dans la liste des boites aux lettres et cliquez sur **Save**.
	- Sous la section **Do the following**, sélectionnez **Forward the message for approval** et **to these people**. Une fenêtre **Select members** apparaît. Sélectionnez **Dominique Skyetson** (dom@[godeployDomain].godeploylabs.com) dans la liste des boites aux lettres et cliquez sur **Save**.
1. Cliquez sur **Next**.
1. Sur la page **Set rule settings** choisissez **Enforce** et un niveau de sévérité de **Low** avant de cliquer sur **Next**.
1. Sur la page **Review and finish**, cliquez sur **Finish**.
1. Une fois la règle créée, cliquez sur le bouton **Done** pour quitter l'assistant de création de règle.
1. Cliquez sur la règle que vous venez de créer et basculez le choix **Enable or disable rule** sur **Enabled** avant de fermer le panneau de la règle.
1. Laissez votre navigateur ouvert pour réaliser la tâche suivante.

## Tâche 4 - Validation des règles de transport
Dans cette tâche, vous allez tester les nouvelles règles de transport que vous venez de créer. Vous allez envoyer un email de Alan Yoo à Megan Bowen, ce qui devrait déclencher la règle de transport de modération. Vous vérifierez ensuite que le message d'avertissement a été ajouté, respectant la première règle.
1. Basculez vers la machine virtuelle **LON-CL2**. Vous devriez être resté connecté avec le compte **Admin**, le navigateur Internet étant resté ouvert et connecté avec le compte de **Alan Yoo**. Sur l'onglet **Home - Microsoft 365**, cliquez sur l'icône de **Outlook** dans le menu des applications à gauche.
1. Sur la page **Mail - Alan Yoo - Outlook**, cliquez sur le bouton **New mail**.
1. Dans le formulaire de nouveau message, saisissez ```Megan``` dans le champ **To**. Sélectionnez **Megan Bowen** une fois que son compte a été trouvé.
1. Dans le champ **Subject**, entrez ```Message de test du transport Exchange```.
1. Dans le corps du message, saisissez ```Message de test de l'avertissement et de la modération par règles de transport Exchange```.
1. Cliquez sur le bouton **Send**.
1. Vous allez maintenant vous connecter sur la boite aux lettres de Dominique Skyetson. Basculez vers la machine virtuelle **LON-CL1**. Dans votre navigateur Internet, utilisez le menu des application 365 (la grille de 3x3 en haut à gauche des pages 365) pour lancer l'application web Outlook.
1. Dans l'onglet **Mail - Dominique Skyetson - Outlook**, Vérifiez la boite de réception **Inbox** de Dominique. Si vous voyez le message de Alan Yoo, ouvrez le message et vérifiez que le message d'avertissement (**If you are not the intended \[...] delete it.**) a été ajouté à la suite du corps du message.  
	Si jamais le message ne se trouve pas dans la boite de réception de Dominique, vérifiez le dossier **Junk Email**. Si le message attendu n'est toujours pas visible, attendez un peu et/ou rafraichissez votre onglet de navigateur Internet.
1. Basculez sur l'onglet **Microsoft 365 admin center** et référez-vous aux procédures que vous avez utilisé [l'atelier 2, exercice 5](lab2e5#t%C3%A2che-3---v%C3%A9rification-de-la-d%C3%A9l%C3%A9gation-administrative) pour réinitialiser le mot de passe de **Megan Bowen** vers **Pa55w.rd**.
1. Ouvrez le menu de votre navigateur Internet (en haut à droite) et lancez-en une nouvelle instance en choisissant **New Inprivate Window**.
1. Dans votre nouvelle fenêtre de navigation privée, utilisez l'adresse suivante pour ouvrir la boite aux lettres de Megan Bowen : ```https://outlook.office.com```.
1. Sur la page **Sign in**, connectez-vous avec le compte ```meganB@[onmicrosoftDomain].onmicrosoft.com```.
1. Sur la page **Enter password**, utilisez le mot de passe ```Pa55w.rd``` et cliquez sur **Sign in**.
1. Sur la page **Update your password**, saisissez ```Pa55w.rd``` dans le champ **Current password** et ```ibForm@tion``` dans les champs **New password** et **Confirm password** avant de cliquer sur **Sign in**.
1. Sur la page **Stay sign in?** cochez la case **Don't show this again** et cliquez sur **Yes**.
1. Sur la page **outlook** de Megan Bowen, jetez un oeil à la boite de réception **Inbox** :
	- Si votre message de test est arrivé, c'est probablement que la règle que vous avez créée ne s'est pas encore propagée sur la globalité de l'environnement Exchange Online : vous pouvez retenter l'envoi d'un nouveau message si vous souhaiter pousser le test plus loin.
	- Si votre message de test n'est pas arrivé, vous pouvez basculez entre vos sessions Outlook pour valider l'envoi du message depuis la boite de Dominique et vérifier sa réception après modération dans la boite de Megan Bowen.
1. Sur LON-CL1, fermez votre page de navigation privée de votre navigateur Internet.
1. Basculez sur LON-CL2 pour y fermer votre navigateur Internet.

## Tâche 5 - Traçabilité de la livraison des messages
1. Sur LON-CL1, vous devriez être resté connecté avec le compte **adatum\Administrator** et le mot de passe **Pa55w.rd**.
1. Votre navigateur Internet devrait être resté ouvert et connecté sur les portails **Microsoft 365 admin center** et **Exchange admin center** avec le compte de Dominique Skyetson (vous pouvez fermer l'onglet avec la boite aux lettres outlook de Dominique).
1. Dans le portail **Exchange admin center**, dans le menu de navigation, dans le groupe d'options **mail flow**, cliquez sur **Message trace**.
1. Prenez quelques instants pour consulter les différentes requêtes proposées par défaut.
1. Cliquez sur le bouton **+ Start a trace**.
1. Dans le panneau **New message trace**, vous pouvez jeter un oeil aux options de recherche avant de cliquer sur **Search**.
1. Dans la fenêtre **Message trace search results**, cliquez sur le message envoyé par **alan@[godeployDomain].godeploylabs.com** à **meganb@[godeployDomain].godeploylabs.com**.
1. Dans la fenêtre **Message de test du transport Exchange**, consultez les informations détaillées sur le transport du message. Sélectionnez la flèche en regard de **Message events**.
1. Dans la colonne **Event**, constatez la présence des évènements **Transport rule** qui ont appliqué le message d'avertissement et rerouté le message vers la boite de Dominique Skyetson.
1. Cliquez sur le **X** de fermeture en haut à droite du panneau.

## Résultat
A l'issue de cet exercice, vous avez configuré des paramètres de transport des messages et modifié ce transport par l'utilisation de simples règles. Vous avez de plus appris à tracer le transport des messages dans Exchange Online.

Vous pouvez poursuivre par [l'exercice 2 - Configuration de la protection de la messagerie](lab6e2)