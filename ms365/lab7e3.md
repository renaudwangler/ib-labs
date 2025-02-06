---
layout: stage
title: "Lab7-Ex3 - Fonctionnalités avancées de Microsoft Teams"
length: "00"
date: "10/01/2025"
script: "ms365.js"
---
# Scénario
Dans cet exercice, vous allez apprendre à gérer et configurer les principales fonctionnalités de l'environnement *Teams* depuis *le Teams admin center*. Dans son rôle d'administrateur d'Adatum, Dominique Skyetson a décidé de customiser la stratégie de l'entreprise concernant les réunions. Les stratégies de réunion contrôlent les fonctionnalités disponibles pour les participants. Une stratégie à l'échelle de l'entreprise, nommée *Global* est créée par défaut et est affectée à tous les utilisateurs de l'entreprise lors de la création du tenant. Dominique a choisi de modifier cette stratégie par défaut.  
Dominique souhaite également utiliser les paramètres des réunions *Teams* pour contrôler si des utilisateurs anonymes peuvent rejoindre les réunions et customiser les messages d'invitation dans ces réunions. Dans le contexte du projet pilote d'Adatum, il lui a été demandé de vérifier les paramètres modifiables concernant ces messages d'invitation. 
Ensuite, Dominique veut créer une nouvelle stratégie de messages qui concernera les messages interpersonnels et les canaux. Il va ensuite créer un compte de ressource pour une file d'attente téléphonique qui devra accueillir les appels des clients, jouer un message d'accueil avant de placer l'appel du client en attente, pendant la recherche d'un agent préconfiguré pour répondre à l'appel. Une fois le compte de ressource créé, il procédera à la création de la file d'attente elle-même.  
Arrivé à ce point, Dominique va se pencher sur les stratégies d'appel. Il lui a été demandé de créer une stratégie d'appels pour Adatum. Au lieu de customiser la stratégie globale par défaut, il suivra le conseil générique et créera sa propre stratégie qui sera utilisée par défaut ensuite par Adatum.  
Finalement, Dominique souhaite gérer l'accès à *Teams*, spécifiquement l'accès externe et l'accès invité. Il souhaite bloquer la communication avec les utilisateurs d'un domaine spécifique qui a été source de multiples attaques de spam envers Adatum l'an passé. En même temps, il souhaite autoriser les communications avec les utilisateurs d'un autre domaine qui est un partenaire clef de Adatum.

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- Les réunions *Teams* et leurs stratégies
- Les stratégies de messages
- Les files d'attente (standards téléphoniques) dans *Teams*
- Les stratégies d'accès externe et invité dans *Teams*
- Les paramètres globaux du client *Teams*


## Tâche 1 - Gestion de la stratégie globale de réunion
Les stratégies de réunion contrôlent les fonctionnalités disponibles pour les participants dans les réunions *Teams* qui ont été planifiées par les utilisateurs de l'entreprise. Une stratégie par défaut pour l'entreprise nommée *Global* a été créée par défaut et elle a été appliquée à tous les utilisateurs de l'entreprise. Vous pouvez soit faire des changements à cette stratégie par défaut, soit créer votre propre stratégie spécifique. En créant une stratégie spécifique, il est possible d'autoriser ou d'interdire la disponibilité de certaines fonctionnalités à vos utilisateurs.
Dans le rôle de Dominique Skyetson, vous souhaitez maintenant customiser la stratégie globale de réunions pour l'entreprise, comme souhaité dans le cadre du projet pilote de mise en oeuvre de *Teams* chez Adatum.
1. Votre session devrait déjà ouverte sur **LON-CL1**, avec le compte **ADATUM\Administrator** et le mot de passe **Pa55w.rd**.
1. Les portails **Microsoft 365 admin center** et **Exchange admin center** (que vous pouvez désormais fermer) devraient encore être resté ouverts dans votre navigateur (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. Dans le portail **Microsoft 365 admin center**, dans le menu de navigation de gauche, cliquez sur **Show all** (si nécessaire), puis descendez dans ce menu pour cliquer sur **Teams** dans la section **Admin centers**. Cela va ouvrir le **Microsoft Teams admin center** dans un nouvel onglet.
1. Dans le portail **Microsoft Teams admin center**,  dans le menu de navigation, cliquez sur **Show All**.
1. Ouvrez le groupe d'options **Meetings** pour cliquer sur le choix **Meeting policies**.
1. Descendez dans la fenêtre **Meeting policies** pour cliquer sur la stratégie **Global (Org-wide default)**.  
1. Dans la fenêtre **Global (Org-wide default)** qui s'affiche, sous la section **Meeting join &amp; lobby**, observez chaque paramètre. Comme Adatum a rencontré des problèmes par le passé avec des invités en accès téléphonique entrant de manière inopinée dans des réunion, il vous a été demandé de vérifier que l'option **People dialing-in can bypass the lobby** soit sur **Off**.
1. Sous la section **Content Sharing**, observez chaque paramètre. Sur le choix **Screen sharing mode**, cliquez sur **Entire screen** pour le changer en **Single application**.
1. Toujours sous la section **Content Sharing**, basculez le choix **External participants can give or request control** à **On**.
1. Sous la section **Recording and transcription**, observez chaque paramètre et passez la fonctionnalité de  **Transcription** à **On**.
1. Cliquez sur le bouton **Save** en bas de la page.
1. Cliquez sur le bouton **Confirm** dans la boite de dialogue **Changes will take time to take effect**.
1. Conservez votre navigateur Internet ouvert pour la tâche suivante. 

## Tâche 2 – Gestion des paramètres de réunions
Toujours en tant que Dominique Skyetson, Administrateur de l'entreprise Adatum, vous allez ici utiliser les paramètres de contrôle des réunions *Teams* pour contrôler si les utilisateurs anonymes peuvent rejoindre des réunions, et customiser les messages d'invitation. Vous pourriez aussi utiliser ces paramètres pour activer la QOS (*Quality of Service*) et définir les ports utilisés pour le trafic temps-réel. Tous ces paramètres s'appliquent à toutes les réunions *Teams* que les utilisateurs de l'entreprise vont planifier.
1. Les portails **Microsoft 365 admin center** et **Microsoft Teams admin center** devraient encore être resté ouverts dans votre navigateur (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. sur le portail **Microsoft Teams admin center**, cliquez sur **Meeting settings** dans le groupe d'options **Meetings**.
1. Sur la page **Meetings settings**, dans la section **Email invitation**, Saisissez les informations suivantes :
	- **Logo URL** : ```https://renaudwangler.github.io/ib-labs/assets/logo_ibcegos.png```
	- **Legal URL** : ```https://adatum.com/legal.html```
	- **Help URL** : ```https://adatum.com/joiningmeetinghelp.html```
	- **Footer :** ```Please accept at your earliest convenience. Thank you!```
1. Cliquez sur le bouton **Preview invite**.
1. Sur la boite de dialogue **Email invite preview**, consultez l'aperçu de l'invitation avant de cliquer sur le bouton **Close** pour la fermer.
1. De retour sur la page **Meetings settings**, sous la section **Network**, consultez les paramètres actuels.  
	>**Note :** Si vous aviez besoin de ports réseau spécifiques que votre entreprise utilise pour envoyer et recevoir le flux multimédia, c'est l'endroit où vous pourriez le configurer. Pour les besoins de notre atelier, vous n'avez pas besoin de toucher aux paramètres de cette section. 
1. Cliquez sur le bouton **Save**.
1. Cliquez sur le bouton **Confirm** puis sur le
1. Select **Confirm** dans la boite de dialogue **Changes will take time to take effect**.
1. Conservez votre navigateur Internet ouvert pour la tâche suivante.

## Tâche 3 – Gestion des stratégies de messages
Les stratégies de messages sont utilisées pour contrôler quelles fonctionnalités de messagerie sont disponibles aux utilisateurs *Teams* dans la messagerie interpersonnelle et dans les canaux d'équipes. Vous pouvez utiliser la stratégie par défaut qui a été créée automatiquement en même temps que votre tenant ou créer de nouvelles stratégies spécifiques répondant à des besoins particuliers de certains utilisateurs choisis dans l'entreprise.  
Dans le contexte de son projet pilote, Adatum demande la création d'une nouvelle stratégie de messages concernant les fonctionnalités dans les messages dans l'environnement *Teams*.
1. Les portails **Microsoft 365 admin center** et **Microsoft Teams admin center** devraient encore être resté ouverts dans votre navigateur (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. sur le portail **Microsoft Teams admin center**, cliquez sur **Messaging policies** dans le groupe d'options **Messaging**.
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

## Tâche 4 – Créer un compte de ressource
Un compte de ressource, qui correspond à un objet utilisateur désactivé dans *Entra Id*, peut être utilisé pour représenter n'importe quelle ressource. Par exemple, un compte de ressource dans Exchange est utilisé pour représenter une salle de réunion et, dans *Teams*, les comptes de ressource seront utilisés pour les système de file d'attente et de répondeur de la téléphonie.  
Dans le contexte du projet pilote de Adatum, Dominique a été sollicité pour créer un compte de ressource pour un standard d'appel téléphonique qui devra accepter les appels des clients, jouer un message de bienvenue et placer ensuite le client en attente d'un agent qui décroche l'appel pour s'en occuper.  
Créer une file d'attente téléphonique est un processus en deux étapes, dans cette première tâche, vous allez créer le compte de ressource qui représente cette file d'attente. Dans la prochaine tâche, vous associerez réellement la file d'attente au dit compte.
1. Sur l'onglet **Teams admin center** de votre navigateur, dans le menu de navigation, ouvrez le groupe d'options **Voice** et cliquez sur **Resource accounts.**
1. Sur la page **Resource accounts** cliquez sur **+ Add** dans la barre de menu au-dessus de la liste des comptes de ressource.
1. Sur le panneau **Add resource account** qui apparaît, entrez les information suivantes :
	- **Display name** : **Calling Queue 1**
	- **Username** : **cq1**
	- **Domain name** : Dans le champ domaine à droite de l'adresse email, sélectionnez, dans le menu déroulant votre nom de domaine **WWLxxxxx.onmicrosoft.com**.
	- **Resource account type** : **Call queue**
1. Cliquez sur **Save**.
1. **Calling Queue 1** apparaît désormais dans la liste des comptes de ressource.
1. Conservez votre navigateur Internet ouvert pour la tâche suivante.

## Tâche 5 - Créer une file d'attente
Maintenant que vous avez créé un compte de ressource pour votre file d'atente, vous allez créer ladite file d'attente et de l'affecter au compte de ressource.
1. Sur le portail **Microsoft Teams admin center**, cliquez sur **Call queues** dans le groupe d'options **Voice**.
1. Sur la page **Call queues**, cliquez sur **+ Add** dans la barre de menu en haut de la page.
1. Sur la page **Call queues \ Add a call queue**, entrez ```Call Queue 1``` dans le champ **Add a name for your call queue** en haut du formulaire.
1. La page affiche un message indiquant **You haven’t added any resource accounts yet.**. Sous ce message, cliquez sur le bouton **Add**.
1. Sur le panneau **Add account** qui apparaît à droite de l'écran, dans la boite **Search by display or username**, saisissez ```Calling```. Dans le popup qui apparaît, sélectionnez le compte **Calling Queue 1** (s'il n'apparaît pas, patientez un instant avant de rafraichir votre navigateur et de réessayer) en passant votre souris dessus et cliquez sur le bouton **Add** qui apparaît à sa droite.
1. En bas du panneau **Add accounts** cliquez sur le bouton **Add**. Vous retournez sur la page" **Call Queue 1**, qui affiche désormais **Calling Queue 1** dans la liste des comptes de ressource pour cette file d'attente.
1. Sur la fenêtre **Call Queue 1**, cliquez sur **Next**.
1. Sur la page **Greeting and music**, saisissez les valeurs suivantes :
	- **Greeting** : **No greeting**
	- **Music on hold** : **Play default music**
1. Sur la page **Greeting and music**, cliquez sur **Next**.
1. Sur la page **Call answering** saisissez les valeurs suivantes :
	- Sélectionnez **Choose users and groups**, pour cliquer sur le bouton **Add users**. Dans le panneau **Add users**, entrez ```alan``` dans le champ **Search by display name or username**. Passez votre souris sur la ligne de **Alan Yoo** qui s'affiche pour cliquer sur le bouton **Add** à sa droite.  
		>**Important :** Constatez le message d'erreur rouge qui apparaît en haut du panneau, indiquant que Alan Yoo n'a pas de licence téléphonie *Teams* associée. Sur le panneau **Add users**, cliquez sur **Cancel**.
	- Cliquez sur le bouton **Add groups**. Dans le panneau **Add call agents**, tapez ```sales``` dans le champ **Search by distribution list or group name**. Passez votre souris sur la ligne de **Sales department** qui s'affiche pour cliquer sur le bouton **Add** à sa droite.  
	- En bas du panneau **Add call agents** cliquez sur le bouton **Add**.
1. Sur la page **Call answering**, cliquez sur **Next**.
1. Sur la page **Agen selection** renseignez les valeurs suivantes :
	- **Routing Method** : **Round Robin**   
	- **Presence-based routing** : **Off**
	- **Call agents can opt out of taking calls** : **On**
	- **Call agent alert time (seconds)** : **45** (il pourra être plus simple de taper la valeur dans le champ que d'utiliser le curseur)
1. Sur la page **Agent selection**, cliquez sur **Next**.
1. Sur la page **Exception handling**, laissez les valeurs par défaut et cliquez sur **Next**.
1. Sur la page **Authorized users**, cliquez sur **Submit**. **Call Queue 1** apparaît désormais dans la liste des files d'attente.
1. Conservez votre navigateur Internet ouvert pour la tâche suivante.

## Tâche 6 - Créer une stratégie d'appels
Dans *Teams*, les stratégies d'appels contrôlent quelles fonctionnalités d'appel et de téléphonie sont disponibles aux utilisateurs. Les stratégies d'appels déterminent si un utilisateur peut passer des appels privés, utiliser le transfert d'appel ou des numéros d'appels spécifiques, transfert ses appels vers sa boite vocale, initier des appels de groupe etc... Des stratégies d'appels par défaut sont créées en même temps que le tenant mais les administrateurs peuvent également créer des stratégies plus spécifiques.  
Dans le cadre du projet pilote *Teams* de Adatum, Dominique Skyetson a été missionné pour créer une stratégie d'appels spécifiques. Ainsi, au lieu de modifier une stratégie par défaut, il va créer sa propre stratégie qui sera utilisée sur les comptes des utilisateurs Adatum.
1. Sur le portail **Microsoft Teams admin center**, cliquez sur **Calling policies** dans le groupe d'options **Voice**.
1. Sur la page **Calling policies**, parcourez les stratégies proposées par défaut avant de cliquer sur **+ Add** dans la barre de menu au-dessus de la liste des stratégies.
1. Sur la page **Calling policies \ Add**, Saisissez ```Default Adatum Calling Policy``` dans le champ **Add a name for your calling policy** en haut du formulaire.
1. Parcourez ensuite le formulaire pour saisir les valeurs suivantes (laissez les éléments non mentionnés à leur valeur par défaut) :
	- **Make private calls** : **On**
	- **Call forwarding and simultaneous ringing to people in your organization** : **Off**
	- **Voicemail for inbound calls** : **Off**
	- **Delegation for inbound and outbound calls** : **Off**
	- **Prevent toll bypass and send calls through the PSTN** : **On**
	- **Busy on busy during calls** : **Let users decide**
1. Cliquez sur le bouton **Save**.
1. La stratégie **Default Adatum Calling Policy** apparaît désormais dans la liste. Notez que **yes** s'affiche dans la colonne *Custom policy*.
1. Conservez votre navigateur Internet ouvert pour la tâche suivante.

## Tâche 7 – Gestion de l'accès externe
Grâce à la fonctionnalité d'accès externe, les utilisateurs *Teams* d'autres domaines peuvent participer à des appels et des échanges de messages. Vous pouvez cependant bloquer les utilisateurs de certains domaines.  
Dans le contexte du projet pilote d'Adatum, Dominique Skyetson souhaite bloquer la communication avec tous les domaines Entra Id externes, sauf pour ce qui concerne les utilisateurs de deux entités partenaire de Adatum (microsoft.com et ib.cegos.fr).
1. Sur le portail **Microsoft Teams admin center**, cliquez sur **External access** dans le groupe d'options **Users**.
1. Sur la page **External access**, cliquez sur le menu **Allow all external domains** et sélectionnez **Allow only specific external domains**
1. Pour ajouter le domaine avec lequel la communication est autorisée, cliquez sur le bouton **Allow domains**.
1. Dans le panneau **Add external domain**, saisissez ```microsoft.com``` dans le champ **Domain** avant de cliquer sur **Done**.
1. Pour ajouter un second domaine autorisé, cliquez sur **+ Add a domain** au-dessus de la liste des domaines autorisés.
1. Dans le panneau **Add external domain**, saisissez ```ib.cegos.fr``` dans le champ **Domain** avant de cliquer sur **Done**.
1. Cliquez sur le bouton **Save** en bas de page.
1. Dans la boite de dialogue **Changes will take time to take effect**, cliquez sur **Confirm**.
1. Conservez votre navigateur Internet ouvert pour la tâche suivante. 

## Tâche 8 – Gestion de l'accès invité
La fonctionnalité d'accès invité de *Teams* permet de gérer si les utilisateurs d'entités externes peuvent être invités dans l'environnement *Teams* et si quelles fonctionnalités sont accessibles à ces utilisateurs invités.  
Dans le contexte du projet pilote Adatum, Dominique Skyetson va maintenant modifier les fonctionnalités disponibles pour les comptes invités dans le tenant de Adatum.
1. Sur le portail **Microsoft Teams admin center**, cliquez sur **Guest access** dans le groupe d'options **Users**.
1. Dans la fenêtre **Guest access**, assurez-vous que **Guest access** soit sur **On** en tête de formulaire.
1. Parcourez les paramètres de la section **Messaging** pour modifier les valeurs suivantes :
	- **Edit sent messages** : **Off**
	- **Delete sent Messages** : **Off**
	- **Delete chat** : **Off**
	- **Chat** : **On**
	- **Giphy in conversations** : **Off**
	- **Giphy content rating** : **Strict**
	- **Memes in conversations** : **Off**
	- **Stickers in conversations** : **Off**
	- **Immersive reader for messages** : **On**
1. Cliquez sur le bouton **Save** en bas de page.
1. Dans la boite de dialogue **Changes will take time to take effect**, cliquez sur **Confirm**.
1. Conservez votre navigateur Internet ouvert pour la tâche suivante.

## Tâche 9 – Gestion des paramètres Teams
Le portail d'administration de *Teams* inclut un ensemble de paramètre qui contrôlent la performance du client *Teams*.  
Dominique Skyetson va, pour finir cet atelier, configurer un certain nombre de ces paramêtres choisis par l'équipe projet pilote d'Adatum.
1. Sur le portail **Microsoft Teams admin center**, cliquez sur **Teams settings** dans le groupe d'options **Teams**.
1. Sur la page **Teams settings**, sélectionnez les valeurs suivantes :
	- **Notifications and feeds**
		- Suggested feeds can appear in a user's activity feed: **On**
	- **Tagging**
		- Who can manage tags: **Team owners and members**
		- Team owners can change who can manage tags: **On**
		- Suggested tags: ```Sales Manufacturing Accounting ``` (Notez qu'il y a un espace après chaque étiquette)
		- Custom tags: **On**
		- Shifts app can apply tags: **Off**
	- **Email integration**
		- Users can send emails to a channel email address: **On**
		- Accept channel email from these SMTP Domains: ```microsoft.com ib.cegos.fr ``` (Notez qu'il y a un espace après chaque domaine)
	- **Files**
		- Citrix files: **On**
		- DropBox: **Off**
		- Box: **Off**
		- Google Drive: **On**
		- Egnyte: **Off**
	- **Organization**
		- Show Organization tab for users : **On**
	- **Devices**
		- Require a secondary form of authentication to access meeting content: **No access**
		- Set content PIN: **Required for outside scheduled meeting**
		- Surface Hub accounts can send emails: **On**
	- **Search by name**
		- Scope directory search using an Exchange address book policy: **On**
	- **Safety and communications**
		- Role-based chat permissions: **Off**
	- **Shared channels**
		- Provide a link to my support request page : **Off**
1. Cliquez sur le bouton **Save.**
1. Dans la boite de dialogue **Changes will take time to take effect**, cliquez sur **Confirm**.
1. Conservez votre navigateur Internet ouvert pour l'atelier suivant.

## Résultat
Dans cet atelier, vous avez travaillé sur l'accessibilité de diverses fonctionnalités dans l'environnement *Teams*.

# Fin de l'atelier 7