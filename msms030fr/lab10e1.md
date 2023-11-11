---
layout: stage
title: "Lab10-Ex1 - Création de labels de sensibilité"
length: "00"
date: "11/11/2023 (15h00)"
---
# Scénario
Adatum a désormais une bonne vision de Microsoft 365 grâce à son projet pilote. L'entreprise a gagné plusieurs contrats gouvernementaux, l'amenant à travailler sur de nombreux produits sensibles et classifiés.  
Dans son rôle d'administrateur de l'entreprise Adatum, Dominique Skyetson s'est vu demandé par le CTO d'étudier une solution pour protéger et chiffrer les messages concernant ces contrats sensibles.  
Il lui a également été demandé qut toute référence au "**Project New Day**" soit automatiquement chiffrée. Il s'agit du nom de code d'un projet top-secret, et il est impératif qu'aucune mention de ce projet ne fuite en dehors du contexte d'Adatum.  
Dans cet atelier, vous allez voir comment mettre en oeuvre la réponse à la demande du CTO en utilisant les labels d'informations sensibles dans le centre d'administration *Purview* et avec des commandes *Windows Powershell*.
>**Important :** Les labels d'informations sensibles et leurs stratégies peuvent prendre jusqu'à 24h pour se propager dans l'intégralité de l'environnement 365. Malheureusement, comme votre stage touche à sa fin, il y a de fortes chances que vous ne soyez pas à même d'en vérifier l'application dans votre tenant de test. Ceci étant acté, cet exercice va tout de même vous permettre de découvrir les interfaces de mise en oeuvre desdits labels et des stratégies correspondantes.

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- La création de labels de sensibilité dans le portail *Purview*.
- La création de labels de sensibilité avec *Windows PowerShell.
- La création de stratégies de publication de labels de sensibilité dans le portail *Purview*.
- La création de stratégies de publication de labels de sensibilité avec *Windows PowerShell.

## Tâche 1 - Créer une équipe *Teams* de test
Dans votre rôle d'administrateur, en tant que Dominique Skyetson, vous allez créer une nouvelle équipe *Teams*, nommée **PND Group** (pour groupe *Project New Day*) qui sera utilisée pour l'applications des labels de données sensibles par la suite.
1. Basculez vers la machine virtuelle **LON-CL1**, sur laquelle vous devrez être resté connecté avec le compte **adatum\Administrator** avec le mot de passe **Pa55w.rd**.
1. A l'issue de l'atelier précédent, votre navigateur Internet devrait être resté ouvert, avec un onglet contenant le portail **Microsoft 365 admin center**, connecté avec le compte de Dominique Skyetson.  
	>**Note :** Si besoin, utilisez l'adresse ```https://admin.microsoft.com``` pour ouvrir le portail d'administration si vous l'aviez fermé.

1. Dans le menu de navigation du portail **Microsoft 365 admin center**, cliquez sur **Active teams & groups** dans le groupe d'options **Teams & groups**.
1. Sur la page **Active teams & groups**, cliquez sur le bouton **+ Add a team** sur la barre d'outils de l'onglet **Teams & Microsoft 365 groups**.
1. Sur la page **Set up the basics**, saisissez ```PND Group``` dans le champ **Name of team** et ```Group used for sensitivity label testing``` dans le champ **Describe this team**.
1. Cliquez sur **Next**.
1. Sur la page **Add owners**, entrez ```Dominique```dans le champ **Owners** et cliquez sur le compte de **Dominique Skyetson** lorsqu'il s'affiche.
1. Cliquez sur **Next**.
1. Sur la page **Add members**, entrez ```Isaiah```dans le champ **Members** et cliquez sur le compte de **Isaiah Langer** lorsqu'il s'affiche.
1. Procédez de même pour ajouter les comptes de ```Alan``` (Alan Yoo) et ```Joni``` (Joni Sherman).
1. Cliquez sur le bouton **Next**.
1. Sur la page **Edit settings**, saisissez ```PNDgroup``` dans le champ **Team email address**.  
	>**Note :** A droite du champ **Tema email address**, sélectionnez votre préfixe de tenant de sorte que le nom de la nouvelle équipe ressemble à *PNDgroup@WWLxxxxx.onmicrosoft.com*.

1. Toujours sur la page **Edit Settings**, dans le champ **Privacy**, **Private - People can only join if they're added by an owner\[...].**.
1. Cliquez sur le bouton **Next**.
1. Sur la page **Review and finish adding team**, c
1. Sur la page **New team created**, notez le message indiquant qu'il peut s'écouler 5 minutes avant que la nouvelle équipe ne s'affiche. Cliquez sur **Close**.
1. Sur la page **Active teams and groups**, cliquez sur le bouton **Refresh** dans la barre de menu au-dessus de la liste des groupes. Si nécessaire, attendez quelques instants et répétez l'opération jusqu'à ce qu'apparaisse la nouvelle équipe.
1. Une fois l'équipe **PND group** affichée dans la liste, cliquez sur son nom.
1. Pour des questions de sécurité, vous avez décidé d'inclure Elviss Cress comme copropriétaire de cette équipe. Dans le panneau **PND Group** qui s'affiche, l'onglet **General** est affiché par défaut, cliquez sur l'onglet **Membership** pour l'afficher.
1. Sur l'onglet **Membership**, cliquez sur le bouton **+ Add owners**.
1. Sur le panneau **Add team owners to PND Group**, saisissez ```Elvis``` et cliquez sur le compte de **Elvis Cress** qui s'affiche.
1. En bas de page, cliquez sur **Add (1)**.
1. De retour sur le panneau **Add team owners to PND Group**, cliquez sur le **X** en haut à droite pour fermer les informations sur l'équipe.
1. Laissez ouvert le navigateur Internet pour la tâche suivante.

## Tâche 2 - Création de labels dans le portail *Purview*
Dominique a décidé de tester la création de labels de données sensibles en utilisant le portail *Purview* et *Windows Powershell*. Dans cette tâche, vous allez d'abord utiliser le portail *Purview* pour créer un premier label.
1. Dans le menu du portail **Microsoft 365 admin center**, cliquez sur **Compliance** sous la section **Admin centers**.
1. Dans le menu de navigation du portail **Microsoft Purview**, cliquez sur **Labels** dans le groupe d'options **Information protection**.
1. Sur la page **Labels**, cliquez sur le bouton **Turn on** pour activer les compléments d'activation des labels de données sensibles.
1. Dans la boite de dialogue qui s'affiche, cliquez sur **Yes**.
1. Une fois la boite de dialogue fermée, dans le bandeau jaune sur la page **Labels**, cliquez sur **Turn on now**.
1. Sur la page **Labels**, cliquez sur **+ Create a label** dans la barre de menu au-dessus de la liste des labels.
1. Sur la page **Provide basic details for this label**, saisissez ```Adatum-Classified``` dans les champs **Name** et **Display name**
1. Saisissez ```For Official Use Only``` dans les champs **Description for Users** et **Description for admins**
1. Cliquez sur le bouton **Next**.
1. Sur la page **Define the scope for this label**, cliquez sur **Next**.
1. Sur la page **Choose protection settings for labeled items** page, cochez la case devant **Apply content marking** et cliquez sur **Next**.
1.	Sur la page **Content marking**, cliquez sur le contrôle de bascule **Content marking** pour le faire passer à *ON**. De nouvelles options s'affichent que vous allez compléter dans les étapes suivantes.
1. Cochez la case **Add a watermark** et cliquez sur le bouton **Customize text**.
1. Dans le panneau **Customize watermark text**, saisissez les informations suivantes avant de cliquer sur le bouton **Save** :
	- **Watermark text** : ```ADATUM - CLASSIFIED```
	- **Font size** : **48**
	- **Font color** : **Red**
	- **Text layout** : **Diagonal**
1. Cochez la case **Add a header** et cliquez sur le bouton **Customize text**.
1. Dans le panneau **Customize header text**, saisissez les informations suivantes avant de cliquer sur le bouton **Save** :
	- **Header text** : ```FOR OFFICIAL USE ONLY```
	- **Font size** : **12**
	- **Font color** : **Blue**
	- **Align text** : **Left**
1. Cliquez sur le bouton **Customize text** sous la case à cocher **Add a footer** (cochez-la si elle ne l'est pas par défaut).
1. Dans le panneau **Customize footer text**, saisissez les informations suivantes avant de cliquer sur le bouton **Save** :
	- **Footer text** : ```ADATUM - CLASSIFIED```
	- **Font size** : **12**
	- **Font color** : **Green**
	- **Align text**: **Left**
1. Sur la page **Content marking**, cliquez sur le bouton **Next**.
1. Sur la page **Auto-labeling for files and emails**, assurez-vous que l'option **Auto-labeling for files and emails** reste désactivée et cliquez sur **Next**.
1. Sur la page **Define protection settings for groups and sites**, cliquez sur **Next**. 
1. Sur la page **Auto-labeling for schematized data assets (preview)** cliquez encore sur **Next**.
1. Sur la page **Review your settings and finish**, révisez votre saisie et, si nécessaire, cliquez sur le lien **Edit** pour les modifier ; sinon, cliquez sur le bouton **Create label** en bas de page.
1. Sur la page **Your sensitivity label was created**, cliquez sur le bouton **Done**.
1. Sur le panneau **Publish label** qui s'affiche, cliquez sur **Cancel**, vous réaliserez la publication des labels ultérieurement, dans la tâche 4 du présent exercice.

## Tâche 3 - Création de labels avec *Windows PowerShell*
Après avoir testé la création de labels de données sensibles en utilisant le portail *Purview*, Dominique souhaite tester la création de labels avec *Windows Powershell*.  
1. Si vous aviez minimisé la fenêtre **Administrator: Windows Powershell ISE** dans la barre des tâches, cliquez sur son icône pour la maximiser. Sinon, tapez ```Windows Powershell ISE``` dans le champ de recherche à droite du bouton **Démarrer** sur la barre des tâches. A droite du menu **Démarrer**, cliquez sur **Run as administrator** sous l'application.
1. Dans la commande (bleue) de **Administrator: Windows PowerShell ISE**, utilisez la commande suivante :  
	```Install-Module -Name ExchangeOnlineManagement -Force```
1. Dans l'invite Powershell, utilisez la commande suivante pour vous connecter à l'environnement *Purview* : (pensez à remplacer le préfixe du tenant par celui de votre tenant de test) :  
	````Connect-IPPSSession -UserPrincipalName dom@WWLxxxxx.onmicrosoft.com````
1. Sur la page **Enter password**, saisissez ```ibForm@tion``` dans le champ **Password** avant de cliquer sur **Sign in**.
1. Dans l'invite Powershell, utilisez la commande suivante pour créer un nouveau label de données sensibles nommé *Adatum-Secret* :  
	```New-Label -Name Adatum-Secret -DisplayName Adatum-Secret -Tooltip 'For use with Government contracts ONLY' -AdvancedSettings @{Color="Red"} -Comment 'For use with Government contracts ONLY'```  
	>**Note :** A date (Novembre 2023), cette commande peut renvoyer un message d'erreur mais le label est cependant correctement créé.

1. Basculez vers votre navigateur Internet et affichez l'onglet du portail **Microsoft Purview**. Vous devriez être resté sur la page **Labels**.
1. Dans la liste des labels, le label **Adatum-Classified** que vous avez créé dans le portail est affiché. Cliquez sur le bouton **Refresh** dans la barre de menu au-dessus de la liste.
1. Vous devriez désormais trouver dans la liste des labels le label **Adatum-Secret** que vous venez de créer en PowerShell en plus du label **Adatum-Classified**.  
	Cliquez sur le label **Adatum-Secret**.
1.	Dans le panneau **Adatum-Secret** qui s'affiche, vous allez modifier le détail du comportement de ce label (qui s'avère sinon particulièrement compliqué à faire dans *Windows PowerShell*).  
	Pour compléter les informations du label, cliquez sur le choix **Edit label** (il pourra être nécessaire de cliquer sur les points de suspension à droite pour y accéder).
1. Sur la page **Provide basic details for this label**, cliquez sur le bouton **Next**.
1. Sur la page **Define the scope for this label**, cliquez sur **Next**.
1. Sur la page **Choose protection settings for labeled items** page, cochez la case devant **Apply content marking** et cliquez sur **Next**.
1.	Sur la page **Content marking**, cliquez sur le contrôle de bascule **Content marking** pour le faire passer à *ON**. De nouvelles options s'affichent que vous allez compléter dans les étapes suivantes.
1. Cochez la case **Add a watermark** et cliquez sur le bouton **Customize text**.
1. Dans le panneau **Customize watermark text**, saisissez les informations suivantes avant de cliquer sur le bouton **Save** :
	- **Watermark text** : ```ADATUM - SECRET```
	- **Font size** : **48**
	- **Font color** : **Red**
	- **Text layout** : **Diagonal**
1. Cochez la case **Add a header** et cliquez sur le bouton **Customize text**.
1. Dans le panneau **Customize header text**, saisissez les informations suivantes avant de cliquer sur le bouton **Save** :
	- **Header text** : ```TOP SECRET```
	- **Font size** : **12**
	- **Font color** : **Blue**
	- **Align text** : **Left**
1. Cochez la case **Add a footer** et cliquez sur le bouton **Customize text**.
1. Dans le panneau **Customize footer text**, saisissez les informations suivantes avant de cliquer sur le bouton **Save** :
	- **Footer text** : ```ADATUM - SECRET```
	- **Font size** : **12**
	- **Font color** : **Green**
	- **Align text**: **Left**
1. Sur la page **Content marking**, cliquez sur le bouton **Next**.
1. Sur la page **Auto-labeling for files and emails**, assurez-vous que l'option **Auto-labeling for files and emails** reste désactivée et cliquez sur **Next**.
1. Sur la page **Define protection settings for groups and sites**, cliquez sur **Next**. 
1. Sur la page **Auto-labeling for schematized data assets (preview)** cliquez encore sur **Next**.
1. Sur la page **Review your settings and finish**, révisez votre saisie et, si nécessaire, cliquez sur le lien **Edit** pour les modifier ; sinon, cliquez sur le bouton **Save label** en bas de page.
1. Sur la page **Label updated**, cliquez sur le bouton **Done**.
	
## Tâche 4 - Publication de labels dans *Purview*
Dans sa découverte des méthodes de travail avec les labels de données sensibles dans Microsoft 365, Dominique souhaite comprendre comment publier ces labels dans le portail *Purview*.
1. Dans le menu de **Microsoft Purview**, cliquez sur **Label policies** dans le choix d'options **Information Protection**
1. Sur la page **Label policies**, cliquez sur **Publish label** dans le menu au-dessus de la liste des stratégies de labels.
1. Dans l'assistant **Create policy**, sur la page **Choose sensitivity labels to publish**, cliquez sur le lien **Choose sensitivity labels to publish**.
1. Dans le panneau **Sensitivity labels to publish** qui s'affiche, cochez la case devant **Adatum-Classified** avant de cliquer sur **Add**.
1. De retour sur la page **Choose sensitivity labels to publish** cliquez sur le bouton **Next**.
1. Sur la page **Assign admin units**, cliquez sur **Next**.
1. Sur la page **Publish to users and groups**, vous allez définir quels utilisateurs et groupes sont légitime à utiliser le label. Notez que le choix sélectionné est sur **All**, ce qui inclut tous les utilisateurs d'Adatum. Cliquez donc sur **Next**.
1. Sur la page **Policy Settings**, laissez toutes les cases décochées et cliquez sur **Next**.
1. Sur la page **Apply a default label to documents**, cliquez sur **Next**.
1. Sur la page **Default settings for emails**, cliquez sur **Next**.
1. Sur la page **Default settings for meetings and calendar events**, cliquez sur le bouton **Next**.
1. Sur la page **Default settings for Power BI content**, cliquez sur **Next**.
1. Sur la page **Name your policy**, saisissez ```Adatum-Classified Policy``` dans le champ **Name** et ```This policy is used for sensitive information in Government contracts only``` dans le champ **Description** avant de cliquer **Next**.
1. Sur la page **Review and finish**, révisez votre saisie et, si nécessaire, cliquez sur le lien **Edit** pour la modifier ; sinon, cliquez sur le bouton **Submit** en bas de page.
1. Sur la page **New policy created**, cliquez sur **Done**.

## Tâche 5 - Publication de labels avec *Windows PowerShell*
Dominique a, pour finir, décidé de tester la publication de labels de données sensibles avec *Windows PowerShell*.  
>**Note :** Comme pour les labels précédemment, il serait hors portée de notre stage de réaliser le détail de ces opérations avec *Windows PowerShell*. C'est pourquoi Dominique va se contenter de vérifier la faisabilité de la publication de labels en Powershell...

1. Utilisez son icône sur la barre des tâches pour maximiser la fenêtre **Administrator: Windows PowerShell ISE** que vous aviez utilisée dans une tâche précédente.
1. Dans la commande (bleue) de **Administrator: Windows PowerShell ISE**, utilisez la commande suivante pour créer un stratégie de publication de labels nommée *Adatum-Secret policy* :  
	```New-LabelPolicy -Name 'Adatum-Secret policy' -Labels 'Adatum-Secret' -Comment 'This policy is for the Microsoft 365 pilot project team related to Project New Day.' -ModernGroupLocation PNDgroup@WWLxxxxx.onmicrosoft.com   -AdvancedSettings @{AttachmentAction = 'Automatic'; DisableMandatoryInOutlook = 'True'}``` 
	>**Note :** Pensez à modifier le préfixe de tenant dans la précédente commande en le remplaçant par celui de votre tenant de test.

1. Basculez vers votre navigateur Internet et affichez l'onglet du portail **Microsoft Purview**. Vous devriez être resté sur la page **Label policies**.
1. Dans la liste des stratégies, la stratégie **Adatum-Classified Policy** que vous avez créé dans le portail est affichée. Cliquez sur le bouton **Refresh** dans la barre de menu au-dessus de la liste.
1. Vous devriez désormais trouver dans la liste des stratégies celle nommée **Adatum-Secret policy** que vous venez de créer en PowerShell. 
1. Laissez votre navigateur Internet ouvert pour la réalisation du dernier atelier.

## Résultat
Dans cet atelier, vous avez créé des labels de données sensibles et les stratégies permettant de les rendre disponibles aux utilisateurs de l'environnement.

# Fin de l'atelier 10