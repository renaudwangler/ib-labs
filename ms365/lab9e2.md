---
layout: stage
title: "Lab9-Ex2 - Dépannage de flux de messages"
length: "00"
date: "10/01/2025"
script: "ms365.js"
---
# Scénario
La conclusion logique à la surveillance des services Microsoft 365 esy la possibilité de dépanner les erreurs qui surviennent dans le système. Pour Dominique Skyetson ca veut dire surveiller les problèmes liés à la messagerie, qui furent une plaie par le passé pour Adatum. Dominique pense tirer parti du *Remote Connectivity Analyzer* pour dépanner les problèmes de flux de messages. C'est un outil web pensé pour aider les administrateurs système à dépanner les problèmes de connectivité affectant leur environnement. L'outil va simuler différents flux de connexion et d'utilisation des outils.  
Dominique a prévu de tester cet outil en envoyant un email à un domaine qui n'existe pas et à un utilisateur n'existant pas. Ensuite, il va utiliser l'outil pour résoudre les erreurs survenues. Il va ensuite tester la traçabilité des messages pour en voir l'utilité dans son scénario de flux de messages. Dominique va ainsi chercher à savoir si un message a été reçu, rejeté, différé ou livré par les services Exchange Online.

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- L'outil d'analyse des en-têtes de messages
- La traçabilité des messages Exchange


## Tâche 1 - Envoi d'un email à un domaine non existant
1. Sur la machine virtuelle **LON-CL1**, votre session devrait déjà ouverte, avec le compte **ADATUM\Administrator** et le mot de passe **Pa55w.rd**.
1. Le portail **Microsoft 365 admin center** devrait être resté ouvert dans votre navigateur Internet (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. Dans la page **Microsoft 365 admin center**, cliquez sur le menu des applications 365 (le carré de 3 x 3 cases en haut à gauche) pour y choisir **Outlook**.
1. Dans **Outlook**, cliquez sur le bouton **New mail**.
1. Dans le formulaire de nouveau message, tapez ```user@alt.none``` dans le champ **To**.
1. Dans le champ **subject**, saisissez ```Test email for non-existing domain.``` et tapez un peu de texte dans le corps du message avant de cliquer sur le bouton **Send**.
1. Attendez de recevoir le message d'échec de livraison.
1. Une fois le message d'échec de livraison reçu, ouvrez-le. Notez la raison de l'échec de livraison : **The Domain Name System (DNS) reported that the recipient's domain does not exist.**
1. Descendez dans le corps du message jusqu'à la section **Diagnostic information for administrators**. Sélectionnez tout le texte de cette section (qui commence par **Generating server** jusqu'à la fin du message) et copiez-le dans votre presse-papier.
1. Ouvrez un nouvel onglet dans votre navigateur Internet et utilisez l'URL suivante ```https://testconnectivity.microsoft.com```.
1. La page **Microsoft Remote Connectivity Analyzer** s'ouvre. Dans le menu de navigation à gauche, cliquez sur l'onglet **Message Analyzer**.
1. Dans la page **Message Header Analyzer** qui s'est ouverte dans un nouvel onglet, Cliquez dans la zone de texte sous le titre **Insert the message header you would like to analyze** et copiez-y les informations de diagnostique précédemment copiées.
1. Cliquez ensuite sur le bouton **Analyze headers**.
1. Consultez les informations de diagnostique et le temps qu'il a fallu pour que le message soit rejeté par exemple.
1. Cliquez sur **Clear** pour réinitialiser le *Message Header Analyzer*.
1. Laissez tous les onglets ouverts sur votre navigateur Internet pour la tâche suivante.

## Tâche 2 - Envoi d'un email à un utilisateur non existant
1. Dans votre navigateur Internet, basculez sur l'onglet affichant la messagerie **Outlook** de Dominique Skyetson.
1. Dans **Outlook**, cliquez sur le bouton **New mail**.
1. Dans le formulaire de nouveau message, tapez ```ynotknirf082760@outlook.com``` dans le champ **To**.
1. Dans le champ **subject**, saisissez ```Test email for non-existing user.``` et tapez un peu de texte dans le corps du message avant de cliquer sur le bouton **Send**.
1. Attendez de recevoir le message d'échec de livraison.
1. Une fois le message d'échec de livraison reçu, ouvrez-le.
1. Descendez dans le corps du message jusqu'à la section **Diagnostic information for administrators**. Sélectionnez tout le texte de cette section (qui commence par **Generating server** jusqu'à la fin du message) et copiez-le dans votre presse-papier.
1. Dans votre navigateur Internet, basculez vers l'onglet **Message Header Analyzer**.
1. Cliquez dans la zone de texte sous le titre **Insert the message header you would like to analyze** et copiez-y les informations de diagnostique précédemment copiées.
1. Cliquez ensuite sur le bouton **Analyze headers**.
1. Consultez les informations de diagnostique et le temps qu'il a fallu pour que le message soit rejeté par exemple.
1. Fermez tous les onglets ouverts sur votre navigateur Internet, hormis celui contenant le portail **Microsoft 365 admin center**.

## Tâche 3 - Analyse du flux de messages
Dans cette tâche, vous allez surveiller le flux de message en analysant leur traçabilité. Notez que bien que la fonctionnalité de traçabilité des messages soit fournie par *Exchange*, elle s'accède depuis le portail *Defender*.
1. Dans le menu de navigation du portail **Microsoft 365 admin center**, sous la section **Admin centers**, cliquez sur **Security** (il pourra être utile de cliquer sur **Show all**).
1. Dans le menu de navigation du portail **Microsoft Defender**, cliquez sur **Exchange message trace** dans la section **Email & collaboration** section.
1. Dans la page **Message trace** vous trouvez quelques requêtes par défaut que vous pouvez directement utiliser. Cependant, dans le cas de Dominique, il souhaite créer une trace customisée. Cliquez sur **+Start a trace**.
1. Dans le panneau **New message trace** qui s'affiche, cliquez dans le champ **Senders** et tapez ```Dominique```. Sélectionnez le compte de **Dominique Skyetson**.
1. Sur l'échelle **Time range**, déplacez le pointeur sur **1 day** (cela permet d'afficher les dernières 24 heures).
1. Sous la section **Detailed search options**, dans le champ **Delivery status**, sélectionnez **Failed**.
1. Cliquez sur le bouton **Search**.
1. Sur la page **Message trace search results**, les deux messages des tâches précédentes de cet exercice apparaissent, Cliquez sur le message **Test email for non-existent user**.
1. Un panneau **Message trace details** s'ouvre, vous donnant des informations concernant ce message et comportant, entre autres, l'émetteur, le destinataire, la taille du message et des informations d'adresses IP.
1. Sélectionnez les zones **Message events** et **More information** pour les ouvrir.
1. Fermez le panneau **Message trace details**.
1. Répétez les opérations précédentes pour le message **Test email for non-existent domain**.

## Résultat
A l'issue de ce dernier exercice, vous avez compris comment analyser les problèmes de messages non délivrés.

# Fin des ateliers du stage msms030