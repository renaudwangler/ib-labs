---
layout: stage
title: "Lab10-Ex1 - Création de labels de sensibilité"
length: "00"
---
# Scénario
Adatum a désormais une bonne vision de Microsoft 365 grâce à son projet pilote. L'entreprise a gagné plusieurs contrats gouvernementaux, l'amenant à travailler sur de nombreux produits sensibles et classifiés.  
Dans son rôle d'administrateur de l'entrepreise Adatum, Dominique Skyetson s'est vu demandé par le CTO d'étudier une solution pour protéger et chiffrer les messages concernants ces contrats sensibles.  
Il lui a également été demandé qut toute référence au "**Project New Day**" soit automatiquement chiffrée. Il s'agit du nom de code d'un projet top-secret, et il est impératif qu'aucune mention de ce projet ne fuite en dehors du contexte d'Adatum.  
Dans cet atelier, vous allez voir comment mettre en oeuvre la réponse à la demande du CTO en utilisant les labels d'informations sensibles dans le centre d'administration *Purview* et avec des commandes *Windows Powershell*.
>**Important :** Les labels d'informations sensibles et leur stratégies peuvent prendre jusqu'à 24h pour se propager dans l'intégramité de l'environnement 365. Malheureusement, comme votre stage touche à sa fin, il y a de fortes chances que vous ne soyiez pas à même d'en vérifier l'application dans votre tenant de test. Ceci étant acté, cet exercice va tout de même vous permettre de découvrir les interfaces de mise en oeuvre desdits labels et des stratégies correspondantes.

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :


## Tâche 1 - Créer une équipe *Teams* de test
Dans votre rôle d'administrateur, en tant que Dominique Skyetson, vous allez créer une nouvelle équipe *Teams*, nommée **PND Group** (pour groupe *Project New Day*) qui sera utilisée pour l'applications des labels de données sensibles par la suite.
1. Basculez vers la machine virtuelle **LON-CL1**, sur laquelle vous devrez être resté connecté avec le compte **adatum\Administrator** avec le mot de passe **Pa55w.rd**.
1. A l'issue de l'atelier précédent, votre navigateur Internet devrait être resté ouvert, avec un onglet contenant le portail **Microsoft 365 admin center**, connecté avec le compte de Dominique Skyetson.  
	>**Note :** Si besoin, utilisez l'adresse ```https://admin.microsoft.com``` pour ouvrir le portail d'administration si vous l'aviez fermé.

1. Dans le menu de navigation du portail **Microsoft 365 admin center**,cliquez sur **Active teams & groups** dans le groupe d'options **Teams & groups**.
1. Sur la page **Active teams & groups**, cliquez sur le bouton **+ Add a team** sur la barre d'outils de l'onglet **Teams & Microsoft 365 groups**.
1. Sur la page **Set up the basics**, saisissez ```PND Group``` dans le champ **Name of team** et ```Group used for sensitivity label testing``` dans le champ **Describe this team**.
1. Cliquez sur **Next**.
1. Sur la page **Add owners**, entrez ```Dominique```dans le champ **Owners** et cliquez sur le compte de **Dominique Skyetson** lorsqu'il s'affiche.
1. Cliquez sur **Next**.
1. Sur la page **Add members**, entrez ```Isaiah```dans le champ **Members** et cliquez sur le compte de **Isaiah Langer** lorsqu'il s'affiche.
1. Procédez de même pour ajoutez les comptes de ```Alan``` (Alan Yoo) et ```Joni``` (Joni Sherman).
1. Cliquez sur le bouton **Next**.
1. Sur la page **Edit settings**, saisissez ```PNDgroup``` dans le champ **Team email address**.  
	>**Note :** A droite du champ **Tema email address**, selectionnez votre préfixe de tenant de sorte que le nom de la nouvelle équipe ressemble à *PNDgroup@WWLxxxxx.onmicrosoft.com*.

1. Toujours sur la page **Edit Settings**, dans le champ **Privacy**, **Private - People can only join if they're added by an owner\[...].**.
1. Cliquez sur le bouton **Next**.
1. Sur la page **Review and finish adding team**, révisez votre saisie et, si nécessaire, cliquez sur le lien **Edit** pour les modifier; sinon, cliquez sur le bouton **Add team** en bas de page.
1. Sur la page **New team created**, notez le message indiquant qu'il peut s'écouler 5 minutes avant que la nouvelle équipe ne s'affiche. Cliquez sur **Close**.
1. Sur la page **Active teams and groups**, cliquez sur le bouton **Refresh** dans la barre de menu au-dessus de la liste des groupes. Si nécessaire, arttendez quemlques instants et répétez l'opération jusqu'à ce qu'apparaîsse la nouvelle équipe.
1. Une fois l'équipe **PND group** affichée dans la liste, cliquez sur son nom.
1. Pour des questions de sécurité, vous avez décidé d'inclure Elviss Cress comme copropriétaire de cette équipe. Dans le panneau **PND Group** qui s'affiche, l'onglet **General** est affiché par défaut, cliquez sur l'onglet **Membership** pour l'afficher.
1. Sur l'onglet **Membership**, cliquez sur le bouton **+ Add owners**.
1. Sur le panneau **Add team owners to PND Group**, saisissez ```Elvis``` et cliquez sur le compte de **Elvis Cress** qui s'affiche.
1. En bas de page, cliquez sur **Add (1)**.
1. De retour sur le panneau **Add team owners to PND Group**, cliquez sur le **X** en haut à droite pour fermer les informations sur l'équipe.
1. Laissez ouvert le navigateur Internet pour la tâche suivante.

## Tâche 2 - Création de labels dans le portail *Purview*
Dominique has decided to test creating sensitivity labels using both the Microsoft Purview portal and Windows PowerShell. In this task you will use the Microsoft Purview Portal for this portion of your test.
1. On **LON-CL1**, you should still be logged in as the **Administrator** with a password of **Pa55w.rd**.
1. In your Edge browser, you should still have a tab open for the **Microsoft 365** homepage and the **Microsoft 365 admin center** and you should still be logged in as Dominique Dickson.  
	Select the **Microsoft 365 admin center** tab.
1.	In the **Microsoft 365 admin center**, select **Show all** in the left navigation pane and then under **Admin centers**, select **Compliance**.
1.	In the **Microsoft Purview** portal, in the left-hand navigation pane, select **Information protection** from the **Solutions** group.
1.	On the **Information protection** page, select the **Labels** tab. On the menu bar above the list of labels, select **Create a label**. This initiates a wizard to create a new sensitivity label.
1.	In the **New sensitivity label** wizard, on the **Name and create a tooltip for your label** page, enter **Classified** in the **Name** and **Display name** fields, and enter **For Official Use Only** in the **Description for Users** field. Select **Next**.
1. On the **Define the scope for this label** page, select **Next**.
1. On the **Choose protection settings for labeled items** page, select the **Apply content marking** checkbox and select **Next**.
1.	On the **Content marking** page, select the toggle switch to turn **ON** Content Marking. This displays several additional options, which should be updated in the following steps.
1. Select the **Add a watermark** check box and then select **Customize text**.
1. In the **Customize watermark text** window, enter the following information and then select **Save**: 
	- Watermark text: **CLASSIFIED**
	- Font size: **48**
	- Font color: **Red**
	- Text layout: **Diagonal**
1. Select the **Add a header** check box and then select **Customize text**.
1. In the **Customize header text** window, enter the following information and then select **Save**:  
	- Header text: **FOR OFFICIAL USE ONLY**
	- Font size: **12**
	- Font color: **Blue**
	- Align text: **Left**
1. Select the **Add a footer** check box and then select **Customize text**.
1. In the **Customize footer text** window, enter the following information and then select **Save**:  
	- Footer text: **CONFIDENTIAL**
	- Font size: **12**
	- Font color: **Green**
	- Align text: **Left**
1. On the **Content marking** page, select **Next**. 
1. On the **Auto-labeling for files and emails** page, ensure **Auto-labeling for files and emails** is not selected, and then select **Next**.
1. On the **Define protection settings for groups and sites**, select **Next**. 
1. On the **Auto-labeling for schematized data assets (preview)** page, select **Next**.
1.	On the **Review your settings** page, review the entries that you made. If any need to be corrected, select the corresponding **Edit** option and make the necessary changes. When all settings are correct, select **Create label**.
1.	On the **Your label was created** page, select **Done**.
1. Leave your Edge browser and all its tabs open and proceed to the next task.

## Task 3 - Creating Sensitivity Labels using Windows PowerShell
Dominique has decided to test creating sensitivity labels using both the Purview portal and Windows PowerShell. In this task you will use Windows PowerShell for this portion of your test.  
>**Note:** What Dominique will learn from this task is that due to a current limitation, not all parameters for a sensitivity label can be updated in PowerShell at this time. The remaining parameters will have to be entered using the Purview portal.  
1. On **LON-CL1**, you should still be logged in as the **Administrator** with a password of **Pa55w.rd**.
1. Select the **magnifying glass (Search)** icon in the bottom left corner of your taskbar and then enter **powershell** in the Search field.
1. In the list of search results, right-click on **Windows PowerShell**, and in the menu that appears select **Run as administrator**.
1. Maximize your PowerShell window. In **Windows PowerShell**, at the powershell prompt type the following command and then press Enter:  
	```Set-ExecutionPolicy -ExecutionPolicy RemoteSigned```  
	You will be prompted to confirm whether you want to change the execution policy. Enter **A** for **[A] Yes to all**.
1. At the powershell prompt, enter the following command and then press Enter to install the Exchange Online Management Module into Windows PowerShell.  
	```Install-Module -Name ExchangeOnlineManagement```  
	If you are prompted to verify that you want to install the module from an untrusted repository, enter **A** to select **[A] Yes to All.**  
1. 	At the powershell prompt enter the following command and then press Enter (remember to replace xxx with your tenant ID and XadminX with your global administrator logon name):  
	````Connect-IPPSSession -UserPrincipalName XadminX@xxx.onmicrosoft.com````  
	You will then be prompted to enter the Password for the global Administrator and then select **Sign in**.
1. At the powershell prompt enter the following command and then press Enter to validate that your are connected to the Microsoft 365 Compliance center:  
	```Get-DlpSensitiveInformationType -Identity "Credit Card Number"```
1.	At the powershell prompt enter the following command and then press Enter to create a new sensitivity label named “Secret”, set its Tooltip to “Use it for Government Contracts ONLY" and changes the text color to Red:  
	```New-Label -Name Secret -DisplayName Secret -Tooltip "For use with Government contracts ONLY" -AdvancedSettings @{Color="Red"} -Confirm```  
	The policy will be displayed and it will be enabled (Disabled = False).
1. At the command prompt enter the following command and then press Enter to apply a Description to the Secret label (**Note:** This is the only label parameter you can set in PowerShell without extensive Scripts from JSON):  
	```Set-Label -Identity Secret -Comment "For use with Government contracts ONLY"```
1.	On the taskbar, select the Edge browser icon, and then select the **Microsoft Purview** tab. You should still be in the **Information protection** page and it should be displaying the **Labels** tab for this page.
1. In the list of labels, the **Classified** label that you created earlier should be displayed. Select **Refresh** on the menu bar above the list of labels.
1.	In the list of labels, you should now see the **Classified** label that you created using the Compliance Center and the **Secret** label that you created using Windows PowerShell.  
	Select the **Secret** label.
1.	In the **Secret** pane that appears, note that only the Name, Display Name, and Description were provided at the time the label was created in PowerShell. As mentioned earlier, this is due to a current limitation where these are the only parameters that can be entered for a sensitivity label in PowerShell at this time.  
	To enter the remaining parameters for this Secret label, select **Edit label**.
1. On the **Name and create a tooltip for your label** page, select **Next**.
1. On the **Define the scope for this label** page, select **Next**.**
1. On the **Choose protection settings for files and emails** page, select the **Apply content marking** checkbox and select **Next**.
1. On the **Content marking** page, select the toggle switch to turn **ON** Content Marking. This displays several additional options, which should be update in the following steps.
1. Select the **Add a watermark** check box and then select **Customize text**.
1. In the **Customize watermark text** window, enter the following information and then select **Save**:  
	- Watermark text: **CLASSIFIED**
	- Font size: **48**
	- Font color: **Red**
	- Text layout: **Diagonal**
1. Select the **Add a header** check box and then select **Customize text**.
1. In the **Customize header text** window, enter the following information and then select **Save**:  
	- Header text: **TOP SECRET**
	- Font size: **12**
	- Font color: **Blue**
	- Align text: **Left**
1. Select the **Add a footer** check box and then select **Customize text**.
1. In the **Customize footer text** window, enter the following information and then select **Save**:  
	- Footer text: **CONFIDENTIAL**
	- Font size: **12**
	- Font color: **Green**
	- Align text: **Left**
1. On the **Content marking** page, select **Next**.
1. On the **Auto-labeling for files and emails** page, ensure **Auto-labeling for files and emails** is not selected, and then select **Next**.
1. On the **Define protection settings for groups and sites**, select **Next**. 
1. On the **Auto-labeling for schematized data assets (preview)** page, select **Next**.
1. On the **Review your settings** page, review the entries that you made. If any need to be corrected, select the corresponding **Edit** option and make the necessary changes. When all settings are correct, select **Save label**.
1. On the **Label updated** page, select **Done**.
1. Leave your Edge browser and all its tabs open and proceed to the next task.
	
## Task 4 - Creating Sensitivity Label Policies using the Purview portal
Dominique has decided to test creating sensitivity label policies using both the Microsoft Purview portal and Windows PowerShell. In this task you will use the Purview portal for this portion of your test.
1. On **LON-CL1** you should still be in the **Microsoft Purview** tab, which should be displaying the **Information Protection** page. You are currently displaying the **Labels** tab for this page.  
	In the list of tabs across the top of the page, select **Label policies**.
1. On the **Label policies** page, on the menu bar above the list of policies, select **Publish label**. This initiates a wizard to create a new sensitivity label policies.
1. In the **Create policy** wizard, on the **Choose sensitivity labels to publish** page, select **Choose sensitivity labels to publish**.
1. On the **Sensitivity labels to publish** pane that appears, select **Classified** and then select **Add** (Note - you will publish the Secret label in the next task using Windows PowerShell).
1. On the **Choose sensitivity labels to publish** page, select **Next**.
1. On the **Publish to users and groups** page, you will define the users and groups to which this published label will be made available. Note that the **Users and groups** is set by default to **All**, which will include all users and groups in the organization. Select **Next**.
1. On the **Policy Settings** page, leave the every checkbox unchecked and select **Next**.
1. On the **Apply a default label to documents** page, select **Next**.
1. On the **Apply a default label to emails** page, select **Next**.
1. On the **Apply a default label to meetings and calendar events**, select **Next**.
1. On the **Apply a default label to Power BI content** page, select **Next**.
1. On the **Name your policy** page, enter **Classified Policy** in the **Name** field and enter **This policy is used for sensitive information in Government contracts only** in the description Field. Select **Next**.
1. On the **Review and finish** page, review the entries that you made. If any need to be corrected, select the corresponding **Edit** option and make the necessary changes. When all settings are correct, select **Submit**.
1. On the **New policy created** page, select **Done**.
1. Leave your Edge browser and all its tabs open and proceed to the next task.

## Task 5 - Creating Sensitivity Label Policies using Windows PowerShell
Dominique has decided to test creating sensitivity label policies using both the Purview portal and Windows PowerShell. In this task you will use Windows PowerShell for this portion of your test.  
>**Note:** What Dominique will learn from this task is that due to a current limitation, only the basic parameters for a sensitivity label can be updated in PowerShell. The remaining parameters will have to be entered using the Purview portal.
1. On **LON-CL1**, you should still be logged in as the **Administrator** with a password of **Pa55w.rd**.
1. Windows PowerShell should still be open from a prior task. If so, then skip to the next step. However, if you closed PowerShell, then open an elevated instance of it now (Run as administrator) and run the following commands to re-establish your session:  
	```Import-Module ExchangeOnlineManagement```  
	```Connect-IPPSSession -UserPrincipalName XadminX@xxx.onmicrosoft.com```  
	>**Note:** (remember to replace xxx with your tenant ID and XadminX with your global administrator name).  

	You will then be prompted to enter the Password for the global Administrator and then seelct **Sign in**.
1. At the powershell prompt enter the following command and then press Enter to create a new Sensitivity label policy named “Secret” using the secret Label that you created in the earlier task. This label policy will be applied to the PND Group group and will use the highest-level label as the default for documents and will automatically apply the label to emails and documents sent from this group. Do not forge to replace xxx with your tenant ID.  
	```New-LabelPolicy -Name "Secret policy" -Labels "Secret" -Comment "This policy is for the Microsoft 365 pilot project team related to Project New Day." -ModernGroupLocation PNDgroup@xxx.onmicrosoft.com   -AdvancedSettings @{AttachmentAction="Automatic"}```
1. At the command prompt enter the following command and then press Enter:  
	```Set-LabelPolicy -Identity "Secret policy" -AdvancedSettings @{DisableMandatoryInOutlook="True"}```
1. On the taskbar, select the Edge browser icon, and then select the **Microsoft Purview** tab. You should still be in the **Information protection** page and it should be displaying the **Label polixcies** tab for this page.  
	In the list of label policies, the **Classified** label that you created earlier should be displayed. Select **Refresh** on the menu bar above the list of labels.
1. In the list of label policies, you should now see the **Classified policy** that you created using the Compliance Center and the **Secret policy** that you created using Windows PowerShell.  
1. Close Windows PowerShell.
1. Leave your Edge browser and all its tabs open and proceed to the next lab.

## Résultat

# Fin de l'atelier 10