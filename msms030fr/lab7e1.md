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

## Task 2 – Manage Meeting Settings
As Dominique Skyetson, Adatum’s Microsoft 365 Enterprise Administrator, you use the Teams meetings settings to control whether anonymous users can join Teams meetings and customize meeting invitations. You can also use these settings to enable Quality of Service (QoS) and set port ranges for real-time traffic. These settings apply to all Teams meetings that users schedule in your organization. As part of Adatum’s pilot project for implementing Microsoft Teams, you want to configure Teams meeting settings to see how they handle email invitations.
1. On **LON-CL1** you should still have the **Microsoft Teams admin center** open from the prior task. In the left-hand navigation pane, under the **Meetings** group, select **Meeting settings.**
1. On the **Meetings settings** page, under the **Email invitation** section, enter (or copy and paste in) the following information:
	- Logo URL: leave blank
	- Legal URL: **https://adatum.com/legal.html**
	- Help URL: **https://adatum.com/joiningmeetinghelp.html**
	- Footer: **Please accept at your earliest convenience. Thank you!**
1. Select the **Preview invite** button.
1. On the **Email invite preview** window, review the preview image of the invitation and then select the **Close** button at the bottom of the page.
1. On the **Meetings settings** page, under the **Network** section, review the current settings.  
	>**Note:** If you have specific ports that your company uses for sending and receiving media traffic, this is where you would enter those ports. If you do not have specific media ports prescribed by your network administrator, then you would leave this section alone. For the purposes of this lab, you will not update this section. 
1. Scroll to the bottom of the page and select **Save**.
1. Select **Confirm** in the **Changes will take time to take effect** window.
1. Leave all tabs open in your browser and proceed to the next task. 

## Task 3 – Manage Messaging Policies
Messaging policies are used to control which chat and channel messaging features are available to users in Microsoft Teams. You can use the Global default policy that is created automatically or create one or more custom messaging policies for people in your organization. After you create a policy, you can assign it to a user or group of users in your organization.  
As part of her Microsoft Teams pilot project for Adatum, Dominique wants to create a new messaging policy that addresses the chat and channel messaging requirements set forth by Adatum’s project team.
1. On **LON-CL1** you should still have the **Microsoft Teams admin center** open from the prior task. In the left-hand navigation pane, select **Messaging policies**.
1. In the **Messaging policies** window, view the list of messaging policies. As you can see, only the **Global (Org-wide default)** policy exists. Select **+ Add** in the menu bar that appears above the list of policies.
1. In the **Messaging policies \ Add** window, enter **Chat and Channel Messaging Policy** in the **Add a name for your messaging policy** field at the top of the form.
1. Select the following values for each setting:
	- Owners can delete sent messages: **Off**
	- Delete sent messages: **Off**
	- Delete chat : **Off**
	- Edit sent messages: **On**
	- Read receipts: **Turned on for everyone**
	- Chat: **On**
	- Chat with groups : **On**
	- Giphy in conversations: **Off**
	- Giphy content rating: **Strict**
	- Memes in conversations: **Off**
	- Stickers in conversations: **Off**
	- URL previews: **On**
	- Translate messages: **On**
	- Immersive reader for messages: **On**
	- Send urgent messages using priority notifications: **On**
	- Create voice messages: **Allowed in chats and channels**
	- On mobile devices, display favorite channels about recent chats: **Not enabled**
	- Remove users from a group chat: **Off**
	- Text prediction : **Off**
	- Suggested replies: **On**
	- Chat permission role : **Restricted permissions**
	- Users with full chat permissions can delete any message : **Off**
	- Viedo messages : **Off**
1. Select **Save.** 
1. Leave all tabs open in your browser and proceed to the next task. 

## Task 4 – Create a Resource Account
A resource account, which is referred to as a disabled user object in Azure Active Directory, can be used to represent resources in general. For example, a resource account in Exchange can be used to represent conference rooms, and in Microsoft Teams, resource accounts can be used to represent Phone System call queues and auto attendants.  
As part of Adatum’s pilot project for implementing Microsoft Teams, Dominique Skyetson has been asked to create a resource account for a cloud call queue, which is a service that accepts customer calls, plays a greeting message, and then places the customer calls in a wait queue while searching a pre-configured list of agents to answer each call.  
Creating a calling queue is a two-step process. In this task, you will first create a resource account that represents the call queue. In the next task, you will create the actual call queue and associate it with this resource account.  
1. On **LON-CL1**, switch to the **Microsoft 365 admin center** tab of your browser
1. Expand **Billing** and click on **Purchase sevices**
1. in the search field, type **Teams phone** and click on the **Details** button below the **Microsoft Teams Phone Standard**
1. In the **Microsoft Teams Phone Standard** window, click on the **Select a plan** menu and select **Microsoft Teams Phone Standard (Trial)** before clicking on **Start free trial**.
1. On the **Checkout** window, click on the **Place order** button and close the page.
1. Back on the **Microsoft 365 admin center**, Open the left-hand menu and select **Billing/Your products**
1. On the **Your products** Window, click on the **Microsoft Teams Phone Standard** line to edit your subscription
1. On your subscription window, click on the **Edit recurring billing** link (you may have to wait a little and refresh if the link is not yet available) and set it to **Off** before clicking on the **Save** button.
1. Click on **Yes** on the **Turn off recurring billing ?** confirmation window.
1. On **LON-CL1** switch back to the **Teams admin center** tab of your browser and refresh the browser page. In the left-hand navigation pane, select **Voice** and then select **Resource accounts.**
1. In the **Resource accounts** window, select **+ Add** in the menu bar at the top of the page.
1. In the **Add resource account** pane that appears on the right, enter the following information:
	- Display name: **Calling Queue 1**
	- Username: **Ccq**
	- Domain name: In the domain name field to the right of the username, select the drop-down arrow and select **xxx.onmicrosoft.com** (where xxx is your unique tenant ID)
	- Resource account type: **Call queue**
1. Select **Save**. **Calling Queue 1** will now appear in the list of Resource accounts. 
1. Leave all tabs open in your browser and proceed to the next task. 

## Task 5 - Create a Call Queue
Now that you have created the resource account for your calling queue, you will create the call queue itself and assign it the resource account.
1. On **LON-CL11** you should still have the **Microsoft Teams admin center** open from the prior task. In the left-hand navigation pane, under **Voice** and then select **Call queues.**
1. In the **Call queues** window, select **+ Add** in the menu bar at the top of the page.
1. In the **Call queues \ Add a call queue** window, enter **Call Queue 1** in the **Add a name for your call queue** field at the top of the form.
1. The page displays a message indicating **You haven’t added any resource accounts yet.** Below this message, select the **Add** button.
1. In the **Add account** pane that appears on the right-side of the screen, in the **Search by display or username** box, enter **Calling.** As you type **Calling**, a popup appears listing call resource accounts whose title starts with **Calling**. **Calling Queue 1** is displayed. As you hover your mouse over **Calling Queue 1**, an **Add** button appears to the right of it. Select the **Add** button.
1. At the bottom of the **Add accounts** pane, select **Add.** This returns you to the **Call Queue 1** window, which now displays **Calling Queue 1** in the list of Resource accounts associated with this call queue.
1. In the **Call Queue 1** window, click **Next** and in the **Greeting and music** tab input the following values:
	- Greeting: **No greeting**
	- Music on hold: **Play default music**
1. In the **Greeting and music** window, click **Next** and in the **Call answering** tab input the following values:
	- Select **Choose users and groups**, and then select the **Add users** button. In the **Add users** pane that appears on the right-side of the screen, in the **Search by display name or username** box, enter **Alan**. As you type **Alan**, a popup appears listing users whose name starts with **Alan**. As you hover your mouse over **Alan Yoo**, an **Add** button appears to the right of it. Select the **Add** button.  
		>**Important:** Note the red error message that appears across the top of the page. The error message indicates that Alan cannot be associated with this call queue because he is not enterprise-voice enabled. In the **Add users** window, select **Cancel**. 
	- Select the **Add groups** button. In the **Add call agents** pane on the right-side of the screen, in the **Search by distribution list or group name** box, enter **Sales.** As you type Sales, a window appears listing the groups whose name starts with Sales. As you hover your mouse over **Sales Department**, an **Add** button appears to the right of it. Select the **Add** button.  
	- In the **Add call agents** pane, the Sales Department appears under **Selected groups**. Select the **Add** button at the bottom of the pane.
1. In the **Call answering** window, click **Next** and in the **Agent selection** tab input the following values:
	- Routing Method: **Round Robin**   
	- Presence-based routing - **Off**
	- Call agents can opt out of taking calls: **On**
	- Call agent alert time (seconds) - 45 (entering the value in the field is easier than dragging the slider icon)
1. In the **Agent sekection** window, click **Next** and leave all setting to their default value in the **Call overflow handling**.
1. In the **Call timeout handling** window, leave all setting to their default and select **Submit**. **Call Queue 1** will appear in the list of Call queues.
1. Leave all tabs open in your browser and proceed to the next task. 

## Task 6 - Create a Calling Policy 
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