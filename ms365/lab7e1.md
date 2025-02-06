---
layout: stage
title: "Lab7-Ex0 - Configuration des équipes et des canaux"
length: "00"
date: "06/02/2025"
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

## Résultat
Dans cet atelier, vous avez travaillé sur l'accessibilité de diverses fonctionnalités dans l'environnement *Teams*.

Vous pouvez poursuivre par [l'exercice 2 - Gestion des stratégies Microsoft Teams](lab7e2)