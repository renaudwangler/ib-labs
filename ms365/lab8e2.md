---
layout: stage
title: "Lab8-Ex2 - Publication des lables de sensibilité"
length: "00"
date: "10/01/2025"
script: "ms365.js"
---
# Scénario
Ib Cegos Workshop a désormais une bonne vision de Microsoft 365 grâce à son projet pilote. L'organisme a gagné plusieurs contrats gouvernementaux, l'amenant à travailler sur de nombreux produits sensibles et classifiés.  
Dans son rôle d'administratrice de ICW, Dominique Skyetson s'est vu demandé par le CTO d'étudier une solution pour protéger et chiffrer les communications concernant ces contrats sensibles.  
Il lui a également été demandé que toute référence au "**Projet Renouvellement**" soit automatiquement chiffrée. Il s'agit du nom de code d'un projet top-secret, et il est impératif qu'aucune mention de ce projet ne fuite en dehors du contexte d'ib Cegos Workshop.  
Dans cet atelier, vous allez voir comment mettre en oeuvre la réponse à la demande du CTO en utilisant les labels d'informations sensibles dans le centre d'administration *Purview* et avec des commandes *Windows Powershell*.
>**Important :** Les labels d'informations sensibles et leurs stratégies peuvent prendre jusqu'à 24h pour se propager dans l'intégralité de l'environnement 365. Malheureusement, comme votre stage touche à sa fin, il y a de fortes chances que vous ne soyez pas à même d'en vérifier l'application dans votre tenant de test. Ceci étant acté, cet exercice va tout de même vous permettre de découvrir les interfaces de mise en oeuvre desdits labels et des stratégies correspondantes.

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- La création de stratégies de publication de labels de sensibilité dans le portail *Purview*.
- La création de stratégies de publication de labels de sensibilité avec *Windows PowerShell.

## Tâche 4 - Publication de labels dans *Purview*
Dans sa découverte des méthodes de travail avec les labels de données sensibles dans Microsoft 365, Dominique souhaite comprendre comment publier ces labels dans le portail *Purview*.
1. Dans le menu de **Microsoft Purview**, cliquez sur **Publishing policies** dans le groupe **Sensitivity labels** de la solution **Information Protection**
1. Sur la page **Label policies**, cliquez sur **Publish label** dans le menu au-dessus de la liste des stratégies de labels.
1. Dans l'assistant **Create policy**, sur la page **Choose sensitivity labels to publish**, cliquez sur le lien **Choose sensitivity labels to publish**.
1. Dans le panneau **Sensitivity labels to publish** qui s'affiche, cochez la case devant **Adatum-Classified** avant de cliquer sur **Add**.
1. De retour sur la page **Choose sensitivity labels to publish** cliquez sur le bouton **Next**.
1. Sur la page **Assign admin units**, cliquez sur **Next**.
1. Sur la page **Publish to users and groups**, vous allez définir quels utilisateurs et groupes sont légitime à utiliser le label. Notez que le choix sélectionné est sur **All users & groups**, ce qui inclut tous les utilisateurs d'Adatum. Cliquez donc sur **Next**.
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
	```New-LabelPolicy -Name 'Adatum-Secret policy' -Labels 'Adatum-Secret' -Comment 'This policy is for the Microsoft 365 pilot project team related to Project New Day.' -ModernGroupLocation PNDgroup@M[onmicrosoftDomain].onmicrosoft.com   -AdvancedSettings @{AttachmentAction = 'Automatic'; DisableMandatoryInOutlook = 'True'}``` 

1. Basculez vers votre navigateur Internet et affichez l'onglet du portail **Microsoft Purview**. Vous devriez être resté sur la page **Label policies**.
1. Dans la liste des stratégies, la stratégie **Adatum-Classified Policy** que vous avez créé dans le portail est affichée. Cliquez sur le bouton **Refresh** dans la barre de menu au-dessus de la liste.
1. Vous devriez désormais trouver dans la liste des stratégies celle nommée **Adatum-Secret policy** que vous venez de créer en PowerShell. 
1. Laissez votre navigateur Internet ouvert pour la réalisation du dernier atelier.

## Résultat
Dans cet atelier, vous avez créé des labels de données sensibles et les stratégies permettant de les rendre disponibles aux utilisateurs de l'environnement.

# Fin de l'atelier 8