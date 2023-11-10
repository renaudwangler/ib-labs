---
layout: stage
title: "Lab9-Ex2 - OneDrive for Business"
length: "00"
---
# Scénario
Après avoir implémenté *Viva Engage* dans le projet pilote Adatum, Dominique Skyetson est prêt à faire de même avec *OneDrive for Business*. Dominique sait que, avec OneDrive, les utilisateurs d'Adatum pourront accéder aisément et de manière sécurisée à leur fichiers de travail depuis tous leur périphériques. Cela leur permettra aussi d'être plus efficace dans le travail avec d'autres collaborateurs, qu'ils soient internes ou externes à l'entreprise.  
Dominique a également conscience que *OneDrive for Business* aidera à mieux protéger les documents métier de Adatum car il seront chiffrés, aussi bien lors de leur déplacement que lors de leur stockage.  
Dans cet exercice, Dominique va mettre en oeuvre la synchronisation *OneDrive for Business*, créer quelques fichiers test à synchroniser et vérifier le résultat de ces opérations.  

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :


## Tâche 1 - Activation de la synchronisation OneDrive
1. Vous deviez être connecté sur **LON-CL2**, avec le compte **.\Admin** et le mot de passe **Pa55w.rd**.
1. Dans un précédent atelier, vous vous êtes connecté sur Microsoft 365 en tant que Alan Yoo et avez téléchargé et installé **Microsoft 365 Apps for enterprise**.  
	Vous devriez donc désormais pouvoir ouvrir l'application **Word** en tapant ```winword``` dans la barre de recherche, à droite du bouton **Démarrer** sur la barre des tâches. Cliquez sur **Word** dans la section **Best match** du menu **Démarrer**.
1. Lorsque **Word** s'ouvre, vérifiez quel compte utilisateur est licencié pour l'utiliser, ne haut à droite de la fenêtre. S'il s'agit déjà du compte de Alan (ses initiales **AY** sont dans le cercle), passez au point suivant.  
	Cependant, si un compte différent est présent :
	1. cliquez sur le bouton **Account** en bas à gauche de la fenêtre Word. Cliquez ensuite sur le lien **Sign out**.
	1. Validez l'opération en cliquant sur le bouton **Sign out**.
	1. Cliquez ensuite sur le bouton **Sign In**.
	1. Dans la fenêtre **Sign in**, saisissez **alan@WWLxxxxx.onmicrosoft.com** et cliquez sur **Next**.
	1. Vérifiez que **Alan Yoo** apparaît désormais en haut à droite de Word.
1. Après avoir vérifié que Word est licencié pour Alan Yoo, vous pouvez fermer Word.
1. Basculez sur le navigateur Edge qui devrai être encore ouvert et connecté avec le compte de **Alan Yoo** sur sa boite aux lettres *Outlook on the web*.
1. Cliquez sur le menu des applications 365 (le carré de 3 x 3 cases haut à gauche de la page) pour y choisir **OneDrive**.
1. Si une fenêtre **Welcome to OneDrive for Business** apparaît, fermez-la.
1. Dans la page **OneDrive**, cliquez sur le bouton **+ Add new** et choisissez **Word document**.
1. Si une fenêtre **Your privacy option** s'affiche, cliquez sur **Close**.
1. Dans le document vierge qui s'est ouvert sur un nouvel onglet de navigation dans **Word Online**, tapez un peu de texte témoin et constatez que *Word Online* le sauvegarde en surveillant la petite coche de validation qui apparaît sur le nuage à droite du nom de votre document (**Doument**).
1. Vous souhaitez renommer ce document. Dans la barre de menu de Word Online, ouvrez le menu **File**, cliquez sur **Save as** pour choisir **Rename**.
1. Dans le panneau qui s'affiche, entrez ```OneDrive Test``` dans le champ **File Name** et cliquez en-dehors de ce champ. cela va renommer votre fichier et fermer le panneau de sauvegarde.
1. Fermez l'onglet Word Online de votre navigateur.
1. Dans la fenêtre **OneDrive** window, votre document **OneDrive test.docx** devrait appraître (si ce n'est pas le cas, rafraichissez cette fenêtre). Cliquez sur l'icône d'engrenage **Settings** en haut à droite.
1. Sur le panneau **Settings**, cliquez sur **Sync the OneDrive**.
1. Sur la boite de dialogue **This site is trying to open Microsoft OneDrive**, cochez la case **Always allow WWLxxxxx-my.sharepoint.com to open links of this type in the associated app** avant de cliquer sur **Open**.
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
1. L' explorateur de fichiers de Windows va s'ouvrir automatiquement sur le dossier **OneDrive - Adatum**.Vérifiez que le document **OneDrive test.docx** est présent effectivement synchronisé sur le poste de travail local
1. laissez ouvert l'explorateur de fichier et le navigateur Internet pour la tâche suivante.

## Tâche 2: Création de fichiers à synchroniser avec OneDrive
Now that you have enabled file synchronization with OneDrive for Business, Dominique Skyetson wants to create test files to be synchronized and then verify file synchronization.
1. On **LON-CL2**, ensure that the **OneDrive for Business** folder is open in File Explorer from the previous task. If not, open **File Explorer** and select **OneDrive - Adatum Corporation**.
1. In **File Explorer**, select **Home** that appears in the menu bar at the top of the window.
1. In the ribbon that appears on the **Home** tab, select **New folder**. This creates a new folder. Enter **Private** as the folder name.
1. You now want to create another folder, so select the **Home** tab again, and on the ribbon, select **New folder**, and then enter **Project A** as the folder name.
1. You now want to create a new Word document in the **Private** folder.  
	If you double-click on the **Private** folder and then right-click in the detail pane and select **New** in the menu, it does NOT provide an option to create a Microsoft Word document.  
	Instead, in the folder tree in the left-hand pane of the File Explorer window, you must select **OneDrive - Adatum Corporation** to expand it, then select the **Private** folder, right-click in the detail pane, and then select **New** in the menu. This will display a sub-menu with a variety of file types. Select **Microsoft Word Document** and name the document **Holidays.docx**.
1. In the **File Explorer** window, note the document icon that appears to the left of the **Holidays.docx**. It may be hard to see, but the icon start as two blue arrows. This will come into play after you complete this step.  
	Double-click the **Holidays.docx** to open it (note Alan Yoo is the licensed user displayed in the top left-corner of the Word document). Type some text in the document, save the document, and then close Microsoft Word.
1. Note how the document icon for **Holidays.docx** changes from two blue arrows to a small green check mark icon after the synchronization process is complete. The document has been transferred to the OneDrive cloud storage automatically.
1. In the **File Explorer** window, navigate to **OneDrive for Business** in the navigation address line to move one level up.
1. In the **File Explorer** window, with the **OneDrive - Adatum Corporation** object expanded in the folder tree, select the **Project A** folder. Right-click in the detail pane for this folder, and in the menu that appears, select **New**, and then select **Microsoft Word Document**. Name the document **Project targets.docx**.
1. Double-click **Project targets.docx** to open it, and then type some short text, save the changes, and then close Microsoft Word.
1. Verify that the document synchronized by checking the document icon in File Explorer. The icon should be a green check mark.
1. Minimize the **File Explorer** window.
1. To view the files online, switch to the Microsoft Edge window. You should still be in the **OneDrive** tab. Refresh the view.
1. In the **Files** list, you should see your two folders - **Private** and **Project A**.
1. Select the **Private** folder, and then select the **Holidays.docx** file to open it in Word Online.
1. In the menu bar at the top of the page, the **Tell me what you want to do** option is set to **Editing**. Add some additional text to the document. The document is saved automatically when **Saved** is displayed in the title bar.
1. In your Edge browser, select the **OneDrive for Business** tab.
1. Since you just updated the **Holidays.docx** file, you will see this reflected in the **Modified** column, which shows that the document changed just a few seconds ago.
1. Switch back to **File Explorer**. 
1. In the folder tree, **OneDrive - Adatum Corporation** should still expanded. Select the **Private** folder and then open **Holidays.docx**. You should see the changes you made in Word Online are synchronized back automatically.
1. Leave File Explorer open as well as your Edge browser and proceed to the next task. 

## Task 3: Share files with other users
1. On **LON-CL2**, ensure that the **OneDrive for Business** folder is open in File Explorer from the previous task. If not, open **File Explorer** and select **OneDrive - Adatum Corporation** to expand it so that you can see the **Private** and **Project A** folders.
1. In **File Explorer**, in the folder tree under **OneDrive - Adatum Corporation**, right-click the **Project A** folder and select **View online**.
1. Microsoft Edge opens (if you receive a dialog box asking which app to use to open this folder, select Microsoft Edge). If you are prompted to sign in, then sign in as Alan Yoo (**alan@xxx.onmicrosoft.com** (where xxx is your tenant ID)) and a password of **ibForm@tion**.
1. In your Edge browser, a tab should open with Alan Yoo's **OneDrive for Business** account. The tab should be displaying Alan's **My Files**, and specifically the **Project A** folder.  
	Hover your mouse to the left of the **Project Targets.docx** field and select the circle so that it displays a check mark. With the file selected, select **Share** that appears in the menu bar at the top of the page and select **Email link**.
1. In the **Send link** window that appears, enter the following information:  
	- Enter your global adminsitrator name in the **To: Name, group or email** field. This will return a list of users. Select your global administrator.
	- In the **Add another** field, enter **Nona**. In the list of users, select **Nona Snider**.
	- In the **Add a message (optional)** field, enter **This is the latest information for Project A**.
1. Select **Send**. After the emails are created, close the **Link sent** window.
1. Open a new InPrivate Microsoft Edge window, and then connect to **https://portal.office.com**.
1. Sign in as your global admin and use your global administrator's password.
1. In the **Microsoft 365** homepage, select **Outook**.
1. Select the message with the subject **Alan Yoo shared ""Project Targets" with you**.
1. In the message box, select **Project Targets**.
1. Verify the document opens, and then make some changes to it. The changes should be automatically saved, and the file name at the top of the document should display **Saved**. All modifications are stored online in the OneDrive for Business cloud storage. By default, SharePoint Online creates a new version when the document changes. This can be viewed by the owner in the version history.
1. Close the InPrivate Microsoft Edge window.
1. You now want to turn off sharing for this document. In the Microsoft Edge window, the **Project targets** document should still be selected. Note in the file list, the **Sharing** column indicates the file is **Shared**.  
	Select the **Shared** status in the **Sharing** column. This will open a **Manage access** window. (Note - another way to open the **Manage access** window for this file is to select **Share** in the menu bar just as you did when you originally shared the file, and then select the ellipsis icon in the **Share** window, and then select **Manage access**).
1. In the **Manage access** window, select **Stop sharing**. In the confirmation window that appears, select **Stop sharing** again.
1. Close the **Manage Access** window. Note in the file list how the value of the **Sharing** column for this file changed from **Shared** to **Private**.
1. On the **Microsoft 365** homepage, select the user icon (the circle with Alan Yoo's **AY** initials in it) in the upper right-hand corner, and in the **My account** window that appears, select **Sign out**. Once you are signed out, close all other tabs, and then close Microsoft Edge.

## Résultat
Dans cet exerice, vous avez appris à configurer OneDrive for business pour le projet pilote de Adatum.

# Fin de l'atelier 9