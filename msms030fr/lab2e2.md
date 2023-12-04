---
layout: stage
title: "Lab2-Ex2 - Gestion des stratégies de mots de passe Microsoft 365"
length: "00"
date: "11/11/2023"
---
# Scénario
Dans cet exercice, vous allez poursuivre, dans la peau de Dominique Skyetson, en tant qu'administrateur d'Adatum. Dans le contexte du projet pilote de Adatum, Dominique veut comprendre les fonctionnalités de gestion de mot de passe de Microsoft 365. Il va commencer par mettre en place une stratégie de mot de passe qui expire après 60 jours.  
Puisque Adatum souhaite également implémenter l'authentification multifactorielle (MFA), Dominique doit mettre en place la MFA dans le projet pilote. La MFA est un standard de cybersécurité qui fournit le socle de l'intégrité des identités. La MFA est activée par défaut pour un nouveau tenant Microsoft 365 ; cependant, pour le besoins de ce lab, la MFA a été désactivée pour fluidifier le fonctionnement dans l'environnement virtuel d'ateliers. Ainsi, Dominique va activer la MFA pour son propre compte pour vérifier cette fonctionnalité, avant de la désactiver de nouveau (Désactiver la MFA en fin d'exercice sur le compte de Dominique vous évitera de devoir saisir votre facteur complémentaire à chaque connexion pendant le stage).  
**Important :** Pour mettre en oeuvre la MFA, vous aurez besoin d'utiliser votre téléphone pour recevoir un code de vérification que vous devrez saisir afin de valider la connexion. Si vous ne pouvez pas recevoir de texto, il vous faudra passer cet exercice ou demander conseil à votre formateur/trice pour réaliser l'opération d'une autre manière (avec une application par exemple).  

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- la stratégie d'expiration de mots de passe de Microsoft 365
- l'activation et la désactivation de l'authentification multifactorielle

## Tâche 1 - Configurer une stratégie de mot de passe Microsoft 365
Dans cette tâche, vous allez changer la stratégie de mot de passe qui contrôle la fréquence à laquelle les utilisateurs doivent changer leur mot de passe.
Par le passé, vous aviez une stratégie exigeant que les utilisateurs changent leur mot de passe tous les 90 jours. Cependant, pour cet exercice, vous allez changer l'expiration de mot de passe pour la passer à 60 jours.
**Important **: Vous allez faire ce changement à seule fin de test, le présent atelier n'ayant pas pour vocation de durer plus de 60 jours...  
1. Vous devriez encore être connecté sur **LON-CL1** à l'issue du premier atelier. Le **Microsoft 365 admin center** devrait encore être resté ouvert dans votre navigateur et vous devriez y être connecté avec le compte *Dominique Skyetson*.
1. Dans le portail **Microsoft 365 admin center**, dans le menu de navigation de gauche, ouvrez **Settings** pour sélectionner **Org settings** (cliquer sur **Show all** si le groupe d'options **Settings** n'est pas affiché).
1. Dans la fenêtre **Org settings**, l'onglet **Services** est affiché par défaut en haut de la page. Sélectionnez plutôt l'onglet **Security & Privacy** situé à côté. 
1. Sur la page **Security & Privacy**, sélectionnez **Password expiration policy** dans la liste de paramètres. 
1. Sur le panneau **Password expiration policy** qui s'affiche, décochez la case **Set passwords to never expire (recommended)**.
	> **Note :** Vous pouvez cliquer sur le lien documentaire pour comprendre en quoi des mots de passe qui n'expire pas sont désormais considéré comme plus sécurisés.  

1. Entrez **60** dans le champ **Days before passwords expire** avant de cliquer sur **Save**.
1. Vérifiez que la case **Set passwords to never expire (recommended)** est décochée et que le message **Changes saved** apparaît en haut de page.
1. Cliquez sur le **X** en haut à droite afin de fermer le panneau **Password expiration policy**.
1. Laissez votre navigateur ouvert pour la tâche suivante.

## Tâche 2 - Activer l'authentification multifactorielle
Pour tester l'authentification multifactorielle (MFA), Dominique Skyetson veut l'activer sur son compte administrateur nominatif pour en constater le fonctionnement. Après avoir fait ce test, vous désactiverez la MFA sur le compte de Dominique, pour éviter de devoir systématiquement avoir recours à cette méthode de connexion plus fastidieuse pour le reste de l'atelier.  
>**Important :** Pour mettre en oeuvre la MFA, vous aurez besoin d'un téléphone capable de recevoir le code de vérification par texto que vous rentrerez pour pouvoir vous connecter sur Microsoft 365.  

Si vous n'avez pas de téléphone :
	- Vous pouvez réaliser cette étape, mais vous ne pourrez pas procéder à la vérification : passez à la tâche de désactivation de la MFA sans vous déconnecter de Microsoft 365.
	- Prévenez votre animateur/trice qui saura peut-être vous guider vers un moyen alternatif au téléphone à utiliser pour pouvoir tester cette fonctionnalité tout de même.  
*C'est la seule tâche dans cet atelier pour laquelle vous aurez besoin de votre téléphone.*  

1. Vous devriez encore être connecté sur **LON-CL1** à l'issue du premier atelier. Le **Microsoft 365 admin center** devrait encore être resté ouvert dans votre navigateur et vous devriez y être connecté avec le compte *Dominique Skyetson*.
1. Pour activer la MFA pour le compte utilisateur de Dominique Skyetson, vous devez d'abord accéder à la liste des **Active users** dans le portail **Microsoft 365 admin center**. Utilisez donc le menu de navigation pour ouvrir le groupe d'options **Users** afin d'y choisir **Active users**.
1. Dans la page **Active users**, dans la barre de menu au-dessus de la liste d'utilisateurs, cliquez sur **Multi-factor authentication**. Cette action va ouvrir un nouvel onglet **Configur multifactor authentication (MFA)**.
1. Cliquez sur le lien "**Legacy per-user MFA**" dans le bandeau gris pour accéder à l'interface de gestion de la MFA historique par utilisateur.
1. Un nouvel onglet **Multi-factor authentication** va s'ouvrir, avec la vue **Users** affichée par défaut.  
	>**Note :** Le statut MFA de tous les utilisateurs existant est **Disabled**.
1. Parcourez la liste des utilisateurs si nécessaire (avec les flèches en base de page) pour cliquer sur la case à gauche de Dominique Skyetson.
1. A droite de **Dominique Skyetson**, dans la section *Quick steps*, cliquez sur **Enable**
1. Sur la fenêtre **About enabling multi-factor auth**, cliquez sur **enable multi-factor auth**. 
1. Lorsque la boite **Updates successful** apparait, cliquez sur **close**. Dans la liste des utilisateurs de la fenêtre **multi-factor authentication**, vérifiez que le statut MFA de Dominique a changé pour **Enabled**.
1. Vous devez désormais vous déconnecter de Microsoft 365. Cliquez sur le compte de Dominique en haut à droite et choisissez **Sign out**.
1. une fois déconnectez, fermez votre navigateur Internet (tous les onglets).

## Tâche 3 - Tester l'authentification multifactorielle
1. Cliquez sur l'icône de **Microsoft Edge** sur la barre des tâches pour ouvrir une nouvelle session de navigation et réouvrez le portail **Microsoft 365 Admin center** en utilisant l'url suivante ```https://admin.microsoft.com```
1. Dans la fenêtre **Pick an Account**, choisissez **dom@WWLxxxxx.onmicrosoft.com**.
1. Dans la fenêtre **Enter password**, entrez **```ibForm@tion```** et cliquez sur **Sign in**.
1. La MFA étant maintenant active pour Dom, une fenêtre **More information required** apparait. Cliquez sur **Next**.
1. Dans la fenêtre **Keep your account secure** qui s'affiche désormais, il est indiqué que vous pouvez utiliser l'application *Microsoft Authenticator* pour la MFA.  
	Pour gagner du temps dans le contexte de notre atelier, vous allez utiliser votre téléphone. Cliquez donc sur le lien **I want to set up a different method** en bas de la page. 
1. Dans la boite de dialogue **Choose a different method**, sélectionnez **Phone** dans le menu **Which method would you like to use** avant de cliquer sur **Confirm**.
1. Dans la fenêtre **Keep your account secure**, la section concernant **Microsoft Authenticator** a donc été remplacée par une section **Phone**. Select votre pays dans la liste déroulante et entrez votre numéro de téléphone (format **678901234**) et cliquez sur **Next**.
	>**Note :** Si vous recevez un message d'erreur, vous pouvez essayer de fermer le navigateur Internet et de reprendre au début de la présente tâche. 
1. Vous allez recevoir sur votre téléphone un SMS vous indiquant le code à utiliser pour vérifier votre identité. Saisissez donc ce code dans le champ **Enter code** qui vient d'apparaitre et cliquez sur **Next**.
	>**Note :** Si vous attendez trop longtemps pour réaliser cette vérification, la fenêtre **Enter password** peut réapparaitre. Dans ce cas, vous devez vous reconnecter avec le mot de passe de Dominique (**```ibForm@tion```**) et demander l'envoi d'un nouveau code de vérification qui sera envoyé sur votre téléphone afin que vous le saisissiez dans le champ **Enter code**.  

1. Une fois la vérification effectuée, cliquez sur **Next** puis **Done**
1. Si une fenêtre **Stay signed in?** apparait, sélectionnez **Don't show this again** et cliquez sur **Yes**.
1. Le portail **Microsoft 365 Admin Center** devrait désormais être affiché.

## Tâche 4 - Désactiver l'authentification multifactorielle
 Bien que Adatum fera probablement le choix d'activer la MFA une fois la phase projet pilote terminée, Dominique préfère désactiver la MFA pour son compte pour se faciliter les tests suivants.
1. Dans le portail **Microsoft 365 admin center**, utilisez le menu de navigation à gauche pour sélectionner **Active users**.
1. Dans la liste **Active users**, sélectionnez **Multi-factor authentication** dans le menu au-dessus de la liste. Cette action va ouvrir un nouvel onglet **Configur multifactor authentication (MFA)**.
1. Cliquez sur le lien "**Legacy per-user MFA**" dans le bandeau gris pour accéder à l'interface de gestion de la MFA historique par utilisateur.
1. Dans la fenêtre **multi-factor authentication**, l'onglet **users** est affiché par défaut.
1. Parcourez la liste des utilisateurs si nécessaire (avec les flèches en base de page) pour cliquer sur la case à gauche de Dominique Skyetson.
1. A droite de **Dominique Skyetson**, dans la section *Quick steps*, cliquez sur **Disable**
1. Dans la boite de dialogue **Disable multi-factor authentication?**, cliquez sur **yes**.
1. Lorsque la fenêtre **Updates successful** apparait, cliquez sur **close**. Dans la fenêtre **multi-factor authentication**, vérifiez que le statut de Dominique a changé pour **Disabled**. 
1. Il ne vous reste plus qu'à vous déconnecter du compte de Dominique avant de vous reconnecter (Vous devriez désormais savoir faire ces opérations, sinon, jetez un oeil à la même opération de la tâche précédente).

	>**Note :** Puisque la MFA est désactivée pour le compte de Dominique, il vous sera simplement demandé le mot de passe (**```ibForm@tion```**) de Dominique sans vérification par code téléphonique.
1. Si nécessaire, une fois connecté, ouvrez le portail  **Microsoft 365 admin center** et restez connecté avec le compte de *Dominique Skyetson* dans la machine LON-CL1 pour les exercices suivants.

## Résultat
A l'issue de ce deuxième exercice, vous avez testé l'authentification multifactorielle.

Vous pouvez poursuivre par [l'exercice 3 - Gestion des groupes](lab2e3)