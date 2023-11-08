---
layout: stage
title: "Lab7-Ex1 - Configuration de Microsoft Teams"
length: "00"
---
# Scénario
Dans cet exercice, vous allez apprendre à gérer et configurer les principales fonctionnalités de l'environnement *Teams* depuis *le Teams admin center*. Dans son rôle d'amdinistrateur d'Adatum, Dominique Skyetson a décidé de customiser la stratége de l'entreprise concernant les réunions. Les stratégies de réunion contrôlent les fonctionnalités disponibles pour les participants. une stratégie à l'échelle de l'entreprise, nommée *Global* est créée par défaut et est affectée à tous les utilisateurs de l'entreprise lors de la création du tenant. Dominique a choisi de modifier cette stratégie par défaut.  
Dominique souhaite également utiliser les paramètres des rénuions *Teams* pour contrôler si des utilisateurs anonymes peuvent rejoindre les réunions et customiser les messages d'invitation dans ces réunions. Dans le contexte du projet pilote d'Adatum, il ui a été demandé de vérifier les paramètres modifiables concernant ces messages d'invitation. 
Ensuite, Dominique veut créer une nouvelle stratégie de messages qui concernera les messages interpersonnels et les canaux. Il va ensuite créer un compte de resource pour une file d'attente téléphonique qui devra accueillir les appels des clients, jouer un message d'accueil avant de placer l'appel du client en attente, pendant la recherche d'un agent pré-configuré pour répondre à l'appel. Une fois le compte de resource créé, il procédera à la création de la file d'attente elle-même.  
Arrivé à ce point, Dominique va se pencher sur les stratégies d'appel. Il lui a été demandé de créer une stratégie d'appels pour Adatum. Au lieu de customiser la stratégie globale apr défaut, il suivra le conseil générique et créera sa propre stratégie qui sera utilisée par défaut ensuite par Adatum.  
Finalement, Dominique souhaite gérer l'accès à *Teams*, spécifiquement l'accès externe et l'accès invité. Il souhaite bloquer la communication avec les utilisateurs d'un domaine spécifique qui a été source de multiple attaques de spam envers Adatum l'an passé. En même temps, il souhaite autoriser les communications avec les utilisateurs d'un autre domaine qui est un partenaire clef de Adatum.

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :


## Tâche 1 - Gestion de la stratégie globale de réunion
Les stratégies de réunion contrôlent les fonctionnalités disponibles pour les participants dans les réunions *Teams* qui ont été plannifiées par les utilisateur de l'entreprise. Une stratégie par défaut pour l'entreprise nommée *Global* a été créée par défaut et elle a été appliquée à tous les utilisaturs de l'entreprise. Vous pouvez soit faire des changements à cette stratégie par défaut, soit créer votre propre stratégie spécifique. En créant une stratégie spécifique, il est possible d'autoriser ou d'interdire la disponibilité de certaines fonctionnalités à vos utilisateurs.
Dans le rôle de Dominique Skyetson, vous souhaitez maintenant customiser la stratégie globale de réunions pour l'entreprise, comme souhaité dans le cadre du projet pilote de mise en oeuvre de *Teams* chez Adatum.
1. Votre session devrait déjà ouverte sur **LON-CL1**, avec le compte **ADATUM\Administrator** et le mot de passe **Pa55w.rd**.
1. Les portails **Microsoft 365 admin center** et **Exchange admin center** (que vous pouvez désormais fermer) devraient encore être resté ouverts dans votre navigateur (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. Dans le portail **Microsoft 365 admin center**, dans le menu de navigation de gauche, cliquez sur **Show all** (if necessary), puis descendez dans ce menu pour cliquer sur **Teams** dans la section **Admin centers**. Cela va ouvrir le **Microsoft Teams admin center** dans un nouvel onglet.
1. Dans le portail **Microsoft Teams admin center**,  dans le menu de navigation, cliquez sur **Show All**.
1. Ouvrez le groupe d'options **Meetings** pour cliquer sur le choix **Meeting policies**.
1. Descendez dans la fenêtre **Meeting policies** pour cliquer sur la stratégie **Global (Org-wide default)**.  
1. Dans la fenêtre **Global (Org-wide default)** qui s'affiche, sous la section **Meeting join &amp; lobby**, observez chaque paramètre. Comme Adatum a rencontré des problèmes par le passé avec des invités en accès téléphonique entrant de manière inopinée dans des réunion, il vous a été demandé de vérifier que l'option **People dialing-in can bypass the lobby** soit sur **Off**.
1. Sous la section **Content Sharing**, observez chaque paramètre. Sur le choix **Screen sharing mode**, cliquez sur **Entire screen** pour le changer en **Single application**.
1. Toujours sous la section **Content Sharing**, baculez le choix **External participants can give or request control** à **On**.
1. Sous la section **Recording and transcription**, observez chaque paramètre et passez la fonctionnalité de  **Transcription** à **On**.
1. Cliquez sur le bouton **Save** en bas de la page.
1. Cliquez sur le bouton **Confirm** dans la boite de dialogue **Changes will take time to take effect**.
1. Conservez votre navigateur Internet ouvert pour la tâche suivante. 

## Tâche 2 – Gestion des paramètres de réunions
Toujours en tant que Dominique Skyetson, Administrateur de l'entreprise Adatum, vous allez ici utiliser les paramètres de contrôle des réunions *Teams* pour contrôler sir les utilisateurs anonymes peuvent rejoindre des réunion, et customiser les messages d'invitation. Vous pourriez aussi utiliser ces paramètres pour activer la QOS (*Quality of Service*) et définire les ports utilisés pour le traffic temps-réel. Tous ces paramètres s'appliquent à toutes les réunions *Teams* que les utilisateurs de l'entrepise vont plannifier.
1. Les portails **Microsoft 365 admin center** et **Microsoft Teams admin center** devraient encore être resté ouverts dans votre navigateur (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. sur le portail **Microsoft Teams admin center**, cliquez sur **Meeting settings** dans le groupe d'options **Meetings**.
1. Sur la page **Meetings settings**, dans la section **Email invitation**, Saisissez les informations suivantes :
	- **Logo URL** : ```https://renaudwangler.github.io/ib-labs/assets/logo_ibcegos.png```
	- **Legal URL** : ```https://adatum.com/legal.html```
	- **Help URL** : ```https://adatum.com/joiningmeetinghelp.html```
	- **Footer :** ```Please accept at your earliest convenience. Thank you!```
1. CLiquez sur le bouton **Preview invite**.
1. Sur la boite de dialogue **Email invite preview**, consultez l'apperçu de l'inviation avant de cliquer sur le bouton **Close** pour la fermer.
1. De retour sur la page **Meetings settings**, sous la section **Network**, consultez les paramètres actuels.  
	>**Note :** Si vous aviez besoin de ports réseau spécifiques que votre entreprise utilise pour envoyer et recevoir le flux multimédia, c'est l'endroit ou vous pourriez le configurer. Pour les besoins de notre atelier, vous n'avez pas besoin de toucher aux paramètres de cette section. 
1. Cliquez sur le bouton **Save**.
1. cliquez sur le bouton **Confirm** puis sur le
1. Select **Confirm** dans la boite de dialogue **Changes will take time to take effect**.
1. Conservez votre navigateur Internet ouvert pour la tâche suivante.

## Tâche 3 – Gestion des stratégies de messages
Les stratégies de messages sont utilisées pour contrôler quelles fonctionnaltés de messagerie sont disponibles aux utilisateurs *Teams* dans la messagerie interpersonnelle et dans les canaux d'équipes. Vous pouvez utiliser la stratégie par défaut qui a été créée automatiquement en même temps que votre tenant ou créer de nouvelles stratégies spécifiques répondant à des besoins particuliers de certains utilisateurs choisis dans l'entreprise.  
Dans le contexte de son projet pilote, Adatum demande la création d'une nouvelle stratégie de messages concernant les fonctionnalité dans les messages dans l'environnement *Teams*.
1. Les portails **Microsoft 365 admin center** et **Microsoft Teams admin center** devraient encore être resté ouverts dans votre navigateur (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. sur le portail **Microsoft Teams admin center**, cliquez sur **Messaging settings** dans le groupe d'options **Messaging**.
1. Sur la page **Messaging policies**, constatez que seule la stratégie par défaut **Global (Org-wide default)** existe. Cliquez sur **+ Add** dans la barre de menu au-dessus de la liste de stratégies.
1. Sur la fenêtre **Messaging policies \ Add**, saisissez ```Chat and Channel Messaging Policy``` dans le champ **Add a name for your messaging policy** en haut du formulaire.
1. Sélectionnez les valeurs suivantes pour chaque paramètre :
	- **Owners can delete sent messages** : **Off**
	- **Delete sent messages** : **Off**
	- **Delete chat** : **Off**
	- **Edit sent messages** : **On**
	- **Read receipts** : **Turned on for everyone**
	- **Chat** : **On**
	- **Chat with groups** : **On**
	- **Giphy in conversations** : **Off**
	- **Giphy content rating** : **Moderate**
	- **Memes in conversations** : **Off**
	- **Stickers in conversations** : **Off**
	- **URL previews** : **On**
	- **Translate messages** : **On**
	- **Immersive reader for messages** : **On**
	- **Send urgent messages using priority notifications** : **On**
	- **Create voice messages** : **Allowed in chats and channels**
	- **On mobile devices, display favorite channels about recent chats** : **Not enabled**
	- **Remove users from a group chat** : **Off**
	- **Text prediction** : **Off**
	- **Suggested replies** : **On**
	- **Chat permission role** : **Restricted permissions**
	- **Users with full chat permissions can delete any message** : **Off**
	- **Video messages** : **Off**
1. Cliquez sur **Save.** 
1. Conservez votre navigateur Internet ouvert pour la tâche suivante.

## Tâche 4 – Créer un compte de resource
Un compte de ressource, qui correspond à un objet utilisateur désactivé dans *Entr Id*, peut être utilisé pour représenter n'importe quelle ressource. Par exemple, un compte de ressource dans Exchange est utilisé pour représenter une salle de réunion et, dans *Teams*, les comptes de ressource seront utilisés pour les système de file d'attente et de répondeur de la téléphonie.  
Dans le contexte du projet pilote de Adatum, Dominique a été sollicité pour créer un compte de ressource pour un standard d'appel téléphonqiue qui devra accepter les appels des clients, jouer un message de bienvenue et placer ensuite le client en attente d'un agent qui décroche l'appel pour s'en occuper.  
Créer une file d'attente téléphonique est un processus en deux étapes, dans cette première tâche, vous allez créer le compte de ressource qui représente cette file d'attente. Dans la prochaine tâche, vous associerez réellemen la file d'attente au dit compte.
1. Sur l'onglet **Teams admin center** de votre navigateur, dans le menu de navigation, ouvrez le groupe d'options **Voice** et cliquez sur **Resource accounts.**
1. Sur la page **Resource accounts** cliquez sur **+ Add** dans la barre de menu au dessus de la liste des comptes de ressource.
1. Sur le panneau **Add resource account** qui apparaît, entrez les information suivantes:
	- **Display name** : **Calling Queue 1**
	- **Username** : **cq1**
	- **Domain name** : Dans le champ domaine à droite de l'adresse email, sélectionnez, dans le menu déroulant votre nom de domaine **WWLxxxxx.onmicrosoft.com**.
	- **Resource account type** : **Call queue**
1. Cliquez sur **Save**.
1. **Calling Queue 1** apparaît désormais dans la liste des comptes de ressource.
1. Conservez votre navigateur Internet ouvert pour la tâche suivante.

## Tâche 5 - Créer une file d'attente
Maintenant que vous avez créé un compte de ressource pour votre file d'atente, vous allez créer ladite file d'attente et de l'affecter au compte de ressource.
1. sur le portail **Microsoft Teams admin center**, cliquez sur **Call queues** dans le groupe d'options **Voice**.
1. Sur la page **Call queues**, cliquez sur **+ Add** dans la barre de menu en haut de la page.
1. Sur la page **Call queues \ Add a call queue**, entrez ```Call Queue 1``` dans le champ **Add a name for your call queue** en haut du formulaire.
1. La page affiche un message indiquant **You haven’t added any resource accounts yet.**. Sous ce message, cliquez sur le bouton **Add**.
1. Sur le panneau **Add account** qui apparaît à droite de l'écran, dans la boite **Search by display or username**, saisissez ```Calling```. Dans le popup qui apapraît, sélectionnez le compte **Calling Queue 1** (s'il n'apparaît pas, patientez un instant avant de rafraichir votre navigateur et de réessayer) en passant votre souris dessus et cliquez sur le bouton **Add** qui apparaît à sa droite.
1. En bas du panneau **Add accounts** cliquez sur le bouton **Add**. Vous retournez sur la page" **Call Queue 1**, qui affiche désormais **Calling Queue 1** dans la liste des comptes de ressource pour cette file d'attente.
1. Sur la fenêtre **Call Queue 1**, cliquez sur **Next**.
1. Sur la page **Greeting and music**, saisissez les valeurs suivantes :
	- **Greeting** : **No greeting**
	- **Music on hold** : **Play default music**
1. Sur la page **Greeting and music** window, cliquez sur **Next**.
1. Sur la page **Call answering** saisissez les valeurs suivantes :
	- Sélectionnez **Choose users and groups**, pour cliquer sur le bouton **Add users**. Dans le panneau **Add users**, entrez ```alan``` dans le champ **Search by display name or username**. Passez votre souris sur la ligne de **Alan Yoo** qui s'affiche pour cliquer sur le bouton **Add** à sa droite.  
		>**Important :** Constatez le message d'erreur rouge qui apparaît en haut du panneau, indiquant que Alan Yoo n'a pas de licence téléphonie *Teams* associée. Sur le panneau **Add users**, cliquez sur **Cancel**. 
	- Cliquez sur le bouton **Add groups**. Dans le panneau **Add call agents**, tapez ```sales``` dans le champ **Search by distribution list or group name**.Passez votre souris sur la ligne de **Sales department** qui s'affiche pour cliquer sur le bouton **Add** à sa droite. Select the **Add** button.  
	- En bas du panneau **Add call agents** cliquez sur le bouton **Add**.
1. Sur la page **Call answering**, cliquez sur **Next**.
1. Sur la page **Agen selection** renseignez les valeurs suivantes :
	- **Routing Method** : **Round Robin**   
	- **Presence-based routing** : **Off**
	- **Call agents can opt out of taking calls** : **On**
	- **Call agent alert time (seconds)** : **45** (il pourra être plus simple de taper la valeur dans le champ que d'utiliser le curseur)
1. Sur la page **Agent selection**, cliquez sur **Next**.
1. Sur la page **Exception handling**, laissez les valeurs par défaut et lciquez sur **Next**.
1. Sur la page **Authorized users**, cliquez sur **Submit**. **Call Queue 1** apparaît désormais dans la liste des files d'attente.
1. Conservez votre navigateur Internet ouvert pour la tâche suivante.

## Tâche 6 - Créer une stratégie d'appels
In Microsoft Teams, calling policies control which calling and call forwarding features are available to users. Calling policies determine whether a user can make private calls, use call forwarding or simultaneous ringing to other users or external phone numbers, route calls to voicemail, send calls to Call Groups, use delegation for inbound and outbound calls, and so on. A default global policy is created automatically, but admins can also create and assign custom calling policies.  
As part of her Microsoft Teams pilot project, Dominique Skyetson has been tasked with creating a custom calling policy for Adatum. Instead of customizing the default global policy, she will follow best practice guidelines and create her own customized policy that will be used as Adatum’s default policy
1. On **LON-CL1** you should still have the **Microsoft Teams admin center** open from the prior task. In the left-hand navigation pane, under the **Voice** group, select **Calling policies.**
1. In the **Calling policies** window, scroll down through the list to see the predefined calling policies and then select **+ Add** in the menu bar that appears above the list of calling policies.
1. In the **Calling policies \ Add** window, enter **Default Adatum Calling Policy** in the **Add a name for your calling policy** field at the top of the form.
1. Scroll down the page and select the following values for each setting (leave any other value to it default value):
	- Make private calls: **On**
	- Call forwarding and simultaneous ringing to people in your organization: **Off**
	- Voicemail is available for routing inbound calls: **Enabled**
	- Delegation for inbound and outbound calls: **Off**
	- Prevent toll bypass and send calls through the PSTN: **On**
	- Busy on busy when in a call: **Enabled**
1. Select **Save**, **Default Adatum Calling Policy** will appear in the list of Calling policies. Note the **yes** value in the Custom policy column.
1. Leave all tabs open in your browser and proceed to the next task.

## Task 7 – Manage External Access
With Microsoft Teams’ external access feature, Teams users from other domains can participate in your chats and calls. You can also block the users in specific domains from joining chats and calls.  
As part of her Microsoft Teams pilot project, Dominique Skyetson wants to block communication with users from a specific domain (spam.com) that has been the source of multiple spam attacks within Adatum over the past year. At the same time, Dominique wants to allow communication with the users from another domain (microsoft.com) that is one of Adatum's key business partners.
1. On **LON-CL1** you should still have the **Microsoft Teams admin center** open from the prior task. In the left-hand navigation pane, select the **Users** group, select **External access.**
1. In the **External access** window, select the **Allow all external domains** menu and change its value to **Allow only specific external domains**
1. To add the domain in which you want to allow communication, select the **Allow domains** button.
1. In the **Add xternal domain** window, enter **microsoft.com** in the **Domain** field
1. Select **Done.** 
1. Select **Save.**
1. Select **Confirm** in the **Changes will take time to take effect** window.
11. Leave all tabs open in your browser and proceed to the next task. 

## Task 8 – Manage Guest Access
Microsoft Teams’ guest access feature is a tenant-level setting that is turned Off by default. Once this setting is turned On, you can configure settings for guests. IT admins can add guests at the tenant level, set and manage guest user policies and permissions, and generate reports on guest user activity.  
As part of your Microsoft Teams pilot project for Adatum, you will turn on guest access and then customize a variety of the guest settings as defined by Adatum’s project team.
1. On **LON-CL1** you should still have the **Microsoft Teams admin center** open from the prior task. In the left-hand navigation pane, under the **Users** group, select **Guest access**.
1. In the **Guest access** window, ensure the **Allow guest access in Teams** setting is to **On**.
1. Scroll down the page and select the following values for the **Messaging** section :
	- Edit sent messages: **Off**
	- Delete sent Messages: **Off**
	- Delete chat : **Off**
	- Chat: **On**
	- Giphy in conversations: **Off**
	- Giphy content rating: **Strict**
	- Memes in conversations: **Off**
	- Stickers in conversations: **Off**
	- Immersive reader for messages: **On**
1. Select **Save.**
1. Select **Confirm** in the **Changes will take time to take effect** window.
1. Leave all tabs open in your browser and proceed to the next task. 

## Task 9 – Manage Teams Settings
Microsoft Teams includes a variety of global settings that control performance within Teams. As part of her Microsoft Teams pilot project, Dominique Skyetson will configure a number of these settings as determined by Adatum’s project team.
1. On **LON-CL1** you should still have the **Microsoft Teams admin center** open from the prior task. In the left-hand navigation pane, select the **Teams** group, select **Teams settings.**

2. In the **Teams settings** window, select the following values for each setting:
	- Notifications and feeds
		- Suggested feeds can appear in a user's activity feed: **On**
	- Tagging
		- Who can manage tags: **Team owners and members**
		- Team owners can change who can manage tags: **On**
		- Suggested tags: **Sales** (press the space bar after entering this value); **Manufacturing** (press the space bar after entering this value); **Accounting** (press the space bar after entering this value)
		- Custom tags: **On**
		- Shifts app can apply tags: **Off**
	- Email integration
		- Allow users to send emails to a channel email address: **On**
		- Accept channel email from these SMTP Domains: **microsoft.com** (press the space bar after entering this value)
	- Files
		- Citrix files: **On**
		- DropBox: **Off**
		- Box: **Off**
		- Google Drive: **On**
		- Egnyte: **Off**
	- Organization
		- Show Organization tab in chats: **On**
	- Devices
		- Require a secondary form of authentication to access meeting content: **No access**
		- Set content PIN: **Required for outside scheduled meeting**
		- Surface Hub accounts can send emails: **On**
	- Search by name
		- Scope directory search using an Exchange address book policy: **On**
	- Safety and communications
		- Role-based chat permissions: **Off**
1. Select **Save.**
1. Select **Confirm** in the **Changes will take time to take effect** window. 

## Résultat

# Fin de l'atelier 7