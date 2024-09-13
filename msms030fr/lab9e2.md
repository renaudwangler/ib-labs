---
layout: stage
title: "Lab9-Ex2 - OneDrive for Business"
length: "00"
date: "17/05/2024"
script: "msms030.js"
---
# Scénario
Après avoir implémenté *Viva Engage* dans le projet pilote Adatum, Dominique Skyetson est prêt à faire de même avec *OneDrive for Business*. Dominique sait que, avec OneDrive, les utilisateurs d'Adatum pourront accéder aisément et de manière sécurisée à leurs fichiers de travail depuis tous leur périphériques. Cela leur permettra aussi d'être plus efficace dans le travail avec d'autres collaborateurs, qu'ils soient internes ou externes à l'entreprise.  
Dominique a également conscience que *OneDrive for Business* aidera à mieux protéger les documents métier de Adatum car il seront chiffrés, aussi bien lors de leur déplacement que lors de leur stockage.  
Dans cet exercice, Dominique va mettre en oeuvre la synchronisation *OneDrive for Business*, créer quelques fichiers test à synchroniser et vérifier le résultat de ces opérations.  

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- La synchronisation *OneDrive for business*
- La fonctionnalité de partage de fichiers de *OneDrive for business*


## Tâche 1 - Activation de la synchronisation OneDrive
1. Vous deviez être connecté sur **LON-CL2**, avec le compte **.\Admin** et le mot de passe **Pa55w.rd**.
1. Dans un précédent atelier, vous vous êtes connecté sur Microsoft 365 en tant que Alan Yoo et avez téléchargé et installé **Microsoft 365 Apps for enterprise**.  
	Vous devriez donc désormais pouvoir ouvrir l'application **Word** en tapant ```winword``` dans la barre de recherche, à droite du bouton **Démarrer** sur la barre des tâches. Cliquez sur **Word** dans la section **Best match** du menu **Démarrer**.
1. Lorsque **Word** s'ouvre, vérifiez quel compte utilisateur est licencié pour l'utiliser, en haut à droite de la fenêtre. S'il s'agit déjà du compte de Alan (ses initiales **AY** sont dans le cercle), passez au point suivant.  
	Cependant, si un compte différent est présent :
	1. Cliquez sur le bouton **Account** en bas à gauche de la fenêtre Word. Cliquez ensuite sur le lien **Sign out**.
	1. Validez l'opération en cliquant sur le bouton **Sign out**.
	1. Cliquez ensuite sur le bouton **Sign In**.
	1. Dans la fenêtre **Sign in**, saisissez **alan@[onmicrosoftDomain].onmicrosoft.com** et cliquez sur **Next**.
	1. Vérifiez que **Alan Yoo** apparaît désormais en haut à droite de Word.
1. Après avoir vérifié que Word est licencié pour Alan Yoo, vous pouvez fermer Word.
1. Basculez sur le navigateur Edge qui devrai être encore ouvert et connecté avec le compte de **Alan Yoo** sur sa boite aux lettres *Outlook on the web*.
1. Cliquez sur le menu des applications 365 (le carré de 3 x 3 cases haut à gauche de la page) pour y choisir **OneDrive**.
1. Si une fenêtre **Welcome to OneDrive for Business** apparaît, fermez-la.
1. Dans la page **OneDrive**, cliquez sur le bouton **+ Add new** et choisissez **Word document**.
1. Si une fenêtre **Your privacy option** s'affiche, cliquez sur **Close**.
1. Dans le document vierge qui s'est ouvert sur un nouvel onglet de navigation dans **Word Online**, tapez un peu de texte témoin et constatez que *Word Online* le sauvegarde en surveillant la petite coche de validation qui apparaît sur le nuage à droite du nom de votre document (**Document**).
1. Vous souhaitez renommer ce document. Dans la barre de menu de Word Online, cliquez sur le champ contenant le nom du document (*Document*) pour saisir le nouveau nom ```OneDrive Test``` dans le champ **Rename File* et cliquez en-dehors de ce champ. Cela va renommer votre fichier.
1. Fermez l'onglet Word Online de votre navigateur.
1. Dans la fenêtre **OneDrive**, votre document **OneDrive test.docx** devrait apparaître (si ce n'est pas le cas, rafraichissez cette fenêtre). Cliquez sur l'icône d'engrenage **Settings** en haut à droite.
1. Sur le panneau **Settings**, cliquez sur **Sync this OneDrive**.
1. Sur la boite de dialogue **This site is trying to open Microsoft OneDrive**, cochez la case **Always allow [onmicrosoftDOmain]-my.sharepoint.com to open links of this type in the associated app** avant de cliquer sur **Open**.
1. Dans la boite de dialogue **Set up OneDrive**, le compte d'Alan Yoo est affiché dans le champ **Email address**. Cliquez sur **Sign in**.
1. Dans la fenêtre **Enter password**, saisissez ```ibForm@tion``` et cliquez sur **Sign in**.
1. Sur la page **Stay signed in to all your apps**, cliquez sur **No, sign in to this app only**.
1. Sur la fenêtre **Your OneDrive folder**, notez l'emplacement local de votre dossier OneDrive et cliquez sur **Next**.
1. Sur la page **Backup folders on this PC**, cliquez sur **I'll do it later**.
1. Sur la page **Get to know your OneDrive**, cliquez sur **Next**.
1. Sur la page **Share files and folders**, cliquez sur **Next**.
1. Sur la page **All your files, ready and on-demand**, cliquez sur **Next**.
1. Sur la page **Get the mobile app**, cliquez sur **Later**.
1. Sur la page **You OneDrive is ready for you** cliquez sur **Open my OneDrive folder**.
1. L'explorateur de fichiers de Windows va s'ouvrir automatiquement sur le dossier **OneDrive - Adatum**.Vérifiez que le document **OneDrive test.docx** est à présent effectivement synchronisé sur le poste de travail local.
1. Laissez ouvert l'explorateur de fichier et le navigateur Internet pour la tâche suivante.

## Tâche 2 - Création de fichiers à synchroniser avec OneDrive
Maintenant que la synchronisation de fichiers est activée avec *OneDrive for Business*, Dominique Skyetson veut créer des fichiers sur un poste local pour vérifier qu'il se synchronise bien dans le cloud.
1. Sur **LON-CL2**, assurez-vous que le dossier **OneDrive for Business** est ouvert dans l'explorateur de fichier depuis la tâche précédente. Si ce n'est pas le cas, ouvrez l'explorateur de fichier et sélectionnez l'emplacement **OneDrive - Adatum**.
1. Dans l'explorateur, cliquez sur **New folder** dans la section **New** de l'onglet **Home**.
1. Saisissez ```Private``` comme nom pour ce dossier.
1. De la même manière, créez un second dossier nommé ```Project A```.
1. Double-cliquez sur le dossier *Private* pour l'ouvrir dans l'explorateur de fichiers
1. Cliquez sur **New item** dans la section **New** de l'onglet **Home** de l'explorateur de fichiers et choisissez **Microsoft Word Document** et nommez le document ```Holidays```.docx.
1. Dans l'explorateur de fichiers, une petite coche verte apparaît à droite du nom du fichier **Holidays.docx**.  
	Double-cliquez sur le fichier **Holidays.docx** pour l'ouvrir (notez que Word est licencié pour Alan Yoo, visible en haut à droite de Word). Tapez quelque texte de test dans le document, sauvegardez le document et fermez Microsoft Word.
1. Notez que l'icône dans la colonne **Status** que l'icône passe en double flèches bleue et se transforme en coche verte une fois le document synchronisé.
1. Dans l'explorateur de fichiers, cliquez sur **OneDrive - Adatum** dans la barre d'adresse pour naviguer dans le dossier parent.
1. Double cliquez sur le dossier **Project A**.
1. Cliquez sur **New item** dans la section **New** de l'onglet **Home** de l'explorateur de fichiers et choisissez **Microsoft Word Document** et nommez le document ```Project targets```.docx.
1. Double-cliquez sur le fichier **Project targets.docx** pour l'ouvrir, tapez quelques mots de test, sauvegardez vos changements avant de fermer Microsoft Word.
1. Vérifiez que le fichier est synchronisé en notant que son icône de statut est devenue une coche verte avant de minimiser l'explorateur de fichiers dans la barre des tâches.
1. Basculez dans la fenêtre de votre navigateur Internet. Vous devriez toujours être sur l'onglet **OneDrive**. Rafraichissez la fenêtre et cliquez sur l'entrée **My files** dans le menu de navigation à gauche.
1. Dans la liste **My files**, vous devriez voir vos deux nouveaux dossiers - **Private** et **Project A**.
1. Cliquez sur votre document **Holidays.docx** pour l'ouvrir dans Word Online.
1. Dans la barre de menu en haut de page, le **Mode Menu** est sur **Editing**. Ajoutez quelques mots à votre document. Ce dernier est automatiquement sauvegardé une fois que la coche apparaît sur le nuage à droite de son nom.
1. Dans votre navigateur Internet, basculez sur l'onglet **OneDrive**.
1. Puisque vous venez de modifier votre fichier **Holidays.docx**, vous verrez mention de ce changement dans la colonne **Modified**, qui vous indique que le document a été modifié il y a quelques secondes.
1. Basculez de nouveau vers l'explorateur de fichier que vous aviez minimisé. 
1. Dans l'arborescence, cliquez sur **OndeDrive - Adatum** pour retourner à la racine de votre emplacement OneDrive. Vous devriez voir que les changements que vous venez de faire ont été correctement synchronisés sur la copie locale.

## Tâche 3 - Partage de fichiers avec d'autres utilisateurs
1. Dans l'explorateur de fichier, faites un clic-droit sur le dossier *Project A** et sélectionnez **View online**.
1. Votre navigateur Internet devrait s'ouvrir sur le **OneDrive** de Alan, avec l'arborescence ouverte sur **My files > Project A**.  
	Passez votre souris à gauche du nom de fichier **Projetc Targets.docx** et sélectionnez le cercle qui apparaît de sorte que ce dernier affiche une coche.
1. Une fois le fichier sélectionné, cliquez sur le bouton **Share** dans le menu en haut de page.
1. Dans la boite de dialogue **Share "Project Targets.docx"**, entrez les informations suivantes :
	- Entrez l'adresse de Dominique (```dom@[onmicrosoftDomain].onmicrosoft.com```) dans le champ **Add a name, group or email**. Sélectionnez le compte de **Dominique Skyetson** qui s'affiche.
	- Dans le même champ, sur **Add more**, entrez ```Nona``` et sélectionnez le compte de **Nona Snider** qui s'affiche.
	- Dans le champ **Add a message** saisissez ```Voici les dernières informations sur le projet A.```.
1. Cliquez sur le bouton **Send**.
1. Après que le message a été envoyé, fermez la fenêtre **You invited 2 peope to edit[...]**.
1. Basculez sur **LON-CL1**. Votre navigateur Internet devrait être encore ouvert, avec le compte de Dominique Skyetson connecté.
1. Si vous n'avez aucun onglet ouvert sur la messagerie de Dominique, cliquez sur le menu des applications 365 (le carré de 3 x 3 cases haut à gauche de la page) pour y choisir **Outlook**.
1. Sélectionnez le message qui a pour sujet **Alan Yoo shared ""Project Targets" with you** (s'il n'apparaît pas, rafraichissez la page *Outlook on the web*).
1. Dans le message reçu, cliquez sur le bouton **Open**.
1. Vérifiez que votre document s'ouvre correctement dans *Word online* et faites quelques changements au texte. Ces changements devraient être automatiquement sauvegardés (une coche de validation apparaît à droite du nom du fichier **Project targets**). Par défaut, la nouvelle version est directement sauvegardée dans *OneDrive for business* et les versions précédentes restent consultables.
1. Fermez tous les onglets de votre navigateur Internet, sauf celui incluant le portail **Microsoft 365 admin center**.
1. Basculez de nouveau sur LON-CL2 car Alan souhaite stopper le partage du document.
1. Rafraichissez la fenêtre de votre navigateur Internet affichant le fichier **Projext targets.docx** dans *OneDrive for business*. Notez comme la colonne **Sharing** en regard du fichier indique désormais la mention **Shared**.
1. Cliquez sur le statut **Shared** dans la colonne **Sharing**. la boite de dialogue **Manage Access** s'ouvre.
1. Dans la boite de dialogue **Manage access**, cliquez sur **Stop sharing**.
1. Dans la boite de dialogue **Stop sharing?**, cliquez de nouveau sur **Stop sharing**.
1. Fermez la boite de dialogue **Manage Access**. Notez que, dans la liste des fichier, la colonne **Sahring** est repassée à **Private** (si ce n'est pas le cas automatiquement, rafraichissez la page du navigateur Internet).
1. Laissez votre navigateur Internet ouvert en fermant les onglets concernant *OneDrive for business* et *Word Online*.

## Résultat
Dans cet exercice, vous avez appris à configurer OneDrive for business pour le projet pilote de Adatum.

# Fin de l'atelier 9