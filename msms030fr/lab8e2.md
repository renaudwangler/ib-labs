---
layout: stage
title: "Lab8-Ex2 - Configuration de sites SharePoint Online"
length: "00"
---
# Scénario
Dans cet exercice, Dominique Skyetson veut commencer à explorer les sites *SharePoint Online*. Pour en comparer le fonctionnement, Dominique va créer un site en utilisant le portail *SharePoint Online admin center*, avant d'en créer un second en utilisant Windows PowerShell. Elle va ensuite mettre en place les persmissions d'accès sur les sites et vérifier leur mode de fonctionnement.

## Tâche 1: Créer un site dans le SharePoint admin center
Dans cette tâche, vous allez utiliser le portail Sharepoint admin center pour créer un site pour le service formation de Adatum.
1. Sur la machine LON-CL1, les portails **Microsoft 365 admin center** et **Sharepoint admin center** devraient être resté ouverts dans votre navigateur (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. Dans le menu de navigation du **Sharepoint admin center**, cliquez sur le choix **Active sites** dans le groupe d'options **Sites**.
1. Sur la barre de menu au-dessus de la liste de sites, cliquez sur le bouton **+ Create**.
1. Sur la page **Create a site: Select the site type**, cliquez sur la tuile **Communication Site**.
1. Sur la page **Select a template**, choisissez le modèle de site qui vous semble convenable pour la communication sur les formations proposées par Adatum en cliquant sur la tuile correspondante. Validez votre choix en cliquant sur **use template**.
1. Sur la page **Give your site a name**, saisissez ```Training``` dans le champ **Site name**.
1. Dans le champ **Site description**, saisissez ```Adatum training department catalog```.
1. Dans le champ **Site owner**, tapez ```dominique``` et cliquez sur le compte de Dominique Skyetson.
1. Sur la page **Give your site a name**, cliquez sur le bouton **Next**.
1. Sur la page **Set language and other options**, cliquez sur le bouton **Create site**. Vous allez retourner sur la page **Active sites**.
	>**Note :** La création d'un site Sharepoint Online peut prendre quelques minutes. Ne passez pas à la suite des opérations tant que vous ne voyez pas apparaître le site **Training** dans la liste.

1. Sur la page **Active sites**, passez votre souris sur la ligne du site **Trainingùù. Sélectionnez la case à cocher qui s'affiche à gauche du nom du site.
1. Sélectionnez la ligne du site **Training** devrait faire apparaître le bouton **Sharing** dans la barre de menu au-dessus de la liste de sites. Si ce bouton n'apparaît pas, vous pouvez tenter de rafraichir la page de votre navigateur.
1. Cliquez sur le bouton **Sharing** une fois qu'il est apparau sur la barre de menu.
1. Dans le panneau **Sharing**, sélectionnez **Anyone** avant de cliquer sur **Save** et de fermer le panneau.
	>**Note :** Les paramètres de site changent pour permettre le partage d'éléments de ce site de la manière la plus ouverte possible.

1. Conservez votre navigateur Internet ouvert pour les tâches ultérieures.

## Tâche 2: Créer un site avec Windows Powershell
Après avoir créé un site avec le portail d'administration de Sharepoint Online, vous allez désormais utiliser Windows Powershell pour créer un site pour le service comptabilité de Adatum.
1. Sur **LON-CL1**, tapez ```Powershell ISE``` dans la recherche à droite du bouton **Démarrer** sur la barre des tâches.
1. Sur le menu **Démarrer**, dans le panneau de détail sur l'application **Windows PowerShell ISE**, cliquez sur **Run as administrator**.
1. Si une fenêtre **User Account Control** apparaît, connectez-vous avec le compte **adatum\administrator** et le mot de passe **Pa55w.rd**.
1. Dans la partie basse (bleue) de la fenêtre **Administrator: Windows Powershell ISE**, utilisez la commande suivante pour installer le module Powershell de gestion de Sharepoint Online :  
	```Install-Module Microsoft.Online.SharePoint.PowerShell -Force```
1. Dans l'invite de commande de l'ISE, utilisez la commande suivante pour vous connecter à votre environnement Sharepoint Online :  
	```Connect-SPOService –Url https://WWLxxxxx-admin.sharepoint.com```
	>**Note :** WWLxxxxx est votre préfixe de tenant que vous avez noté au début de vos ateliers. Notez que, dans cette commande, il est suffixé de *-admin*.
1. Dans la boite de dialogue **Sign in**, saisissez le nom de connexion de Dominique Skyetson (dom@WWLxxxxx.onmicrosoft.com) et cliquez sur **Next**.
1. Dans la boite de dialogue **Enter password**, saisissez ```ibForm@tion``` et cliquez sur **Sign in**.
1. dans l'invite Powershell, utilisez la commande suivante pour créer un nouveau site nommé **Accounting** :  
	```New-SPOSite -Url https://WWLxxxxx.sharepoint.com/sites/Accounting -Owner dom@WWLxxxxx.onmicrosoft.com -StorageQuota 500 -NoWait -Template PROJECTSITE#0 –Title Accounting```
	>**Note :** WWLxxxxx est votre préfixe de tenant que vous avez noté au début de vos ateliers. Notez que, dans cette commande, il est **n'est pas** suffixé de *-admin* !
1. Minimisez la fenêtre **Administrator: Windows Powershell ISE**.
1. Dans votre navigateur Internet, la page **Active sites** devrait toujours être affichée à l'issue de la tâche précédente. Si le site **Accounting** ne s'affiche pas, rafraichissez la page du navigateur. (il vous faudra peut-être attendre quelques instants et répéter l'opération). Ne passez pas à la tâche suivante tant que vous n'avez pas constaté l'affichage du site **Accounting** dans la liste des sites actifs.
1. Conservez votre navigateur Internet ouvert pour la tâche suivante.

## Tâche 3: Configurer des permissions sur les sites
Now that you have added sites for Adatum's Marketing and Accounting departments, you will configure permissions for the Marketing site. Because you are still signed into Microsoft 365 as Dominique Skyetson, you must open an In-Private browser session in Edge and log into Microsoft 365 as the global administrator so that you can assign Nona Snider as an admin to the Marketing site.  
Only a site's site admin can assign another user as an admin to the site. While you are signed into Edge as Dominique Skyetson, she is not an admin for the Marketing site. Therefore, you will have to open an InPrivate session so that you can log in as the MOD Administrator to make this assignment.  
You will then open a second InPrivate browsing session and log in as Patti Fernandez to verify that she is a site admin for the Marketing site. You will do this by accessing the Marketing site's **Site Administrators** page, which is only accessible to site admins.  
1. On **LON-CL1**, right-click on the **Edge** icon on the taskbar, and in the menu that appears, select **New InPrivate window**.
1. In your **InPrivate Browsing** session, enter the following URL in the address bar: **https://portal.office.com**.
1. In the **Sign in** window, enter your global administrator name, and then select **Next**.
1. In the **Enter password** window, enter (or copy and paste in) the global admin password and then select **Sign in**.
1. On the **Stay signed in?** window, select **Yes**. 
1. On the **Microsoft 365** homepage, select **Admin**.
1. On the **Microsoft 365 admin center** page, in the left-hand navigation pane, select **Show all**, and then under the **Admin centers** group, select **SharePoint**.
1. On the **SharePoint admin center** page, in the left-hand navigation pane, select **Sites**, and then select **Active Sites**.
1. On the **Active sites** page, note the **Marketing** and **Accounting** site appear in the list of active sites. Select the **Marketing** site line.
1. At the time you created the **Marketing** site, the global Administrator was added as a site admin. You now want to add **Nona Snider** as a second site admin.  
	On the **Marketing** pane that appears on the right-side of the screen, select the **Membership** tab.
1. In the **Membership** tab, under the **Site admins** section, select **+ Add site admins**.
1. On the **Add site admins to marketing** page, in the **Search by name or email address** field, enter **Nona**. This will display a list of all active users whose first name starts with Nona. In the list of users that appears, select **Nona Snider** and then select **Add (1)**. Nona and the global Administrator should now appear as admins for this site.
1. Close the **Add site admins to marketing** pane.
1. Close the **InPrivate** browsing session for the global Administrator. 
1. Perform the same steps as before to open a new **InPrivate** browsing session, this time for **Nona Snider**.
1. In your new **InPrivate** browsing session, enter the following URL in the address bar: **https://portal.office.com**
1. On the **Pick and account** dialog box, if needed, select **Use another account**.
1. In the **Sign in** window, enter **nona@xxx.onmicrosoft.com** (where xxx is your tenant ID), and then select **Next**.
1. In the **Enter password** window, enter **Pa55w.rd** and then select **Sign in**.
1. This opens the **Microsoft Office Home** tab in your InPrivate browsing session. Open a new tab in your browser and enter the following URL in the address bar: **https://xxx.sharepoint.com/sites/Marketing** (where xxx is your tenant ID).
1. This opens the **Marketing** site. In the upper-right corner of the screen (to the left of Nona's initials), select the **gear** (Settings) icon (the wheel icon). In the **Settings** window that appears, select **Site permissions**.
1. On the **Site permissions** page, select **Advanced permissions setings**.
1. On the **Permissons** tab, select **Site collection administrators** in the ribbon.
1. Verify that the global administrator and **Nona Snider** appear in field. You have just verified that Nona is indeed a site administrator for the Marketing site, since she can access the Site  Administrators page (only site admins can access this page).
1. Close the **InPrivate** browsing session for **Nona Snider**. 
1. Leave your Edge browsing session open along with all its tabs. 

## Task 4: Verify access to the site collections
In this task, the global Administrator will assign access to the Marketing site to two users - Jessica Jennings, who will request access, and Sherri Harrell, who the global Administrator felt should have access as well since Sherri is a company Director. While Sherri will not request access, the global Admin will share access to the site with her. You will again use InPrivate browsing sessions for the different users to access the Marketing site on LON-CL1.
1. On **LON-CL1**, right-click on the **Edge** icon on the taskbar, and in the menu that appears, select **New InPrivate window**.
1. In your **InPrivate Browsing** session, enter the following URL in the address bar: **https://portal.office.com**.
1. In the **Sign in** window, enter **jessica@xxx.onmicrosoft.com** (where xxx is your tenant ID), and then select **Next**.
1. In the **Enter password** window, enter **Pa55w.rd** and then select **Sign in**.
1. On the **Stay signed in?** window, select **Yes**. 
1. This opens the **Microsoft 365** homepage tab in your Edge browser. Open a new tab in your browser and enter the following URL in the address bar: **https://xxx.sharepoint.com/sites/Marketing** (where xxx is your tenant ID).
1. This displays an **Access required** page that indicates **You need permission to access this site.** A message field is prefilled with the following default message: **I'd like access, please**.  
	Since you can customize this message, Jessica wants to enter a message that justifies why she needs permission to access this site. Replace the existing message with the following: **My name is Jessica Jennings. I am a Technical Account Manager for Western Europe. I need access to this site so that I can stay abreast of the latest marketing plans for Adatum's Fabrication division.**
1. Select the **Request Access** button.
1. Close this InPrivate browsing session for **jessica Jennings**. 
1. Perform the same steps as before to open a new **InPrivate** browsing session, this time for the global Administrator.
1. In your new **InPrivate** browsing session, enter the following URL in the address bar: **https://portal.office.com**
1. In the **Sign in** window, enter your global administrator name, and then select **Next**.
1. In the **Enter password** window, enter (or copy and paste in) the tenant admin password provided by your lab hosting provider and then select **Sign in**.
1. On the **Stay signed in?** window, select **Yes**.
1. This opens the **Microsoft Office Home** tab in your InPrivate browsing session. Open a new tab in your browser and enter the following URL in the address bar: **https://xxx.sharepoint.com/sites/Marketing**.
1. This opens the **Marketing** site. In the upper-right corner of the screen (to the left of the circle with the admin initials), select the **gear** (Settings) icon (the wheel icon). In the **Settings** window that appears, select **Site contents**.
1. On the **Contents** tab, select **Access requests** button.
1. On the **Access Requests** page, verify that Jessica Jennings' request appears under the **Pending Requests** section. For Jessica's request, select the **Approve** button.
1. On the current **Access Requests - Default** tab, select the **gear** (Settings) icon (the wheel icon) and the **Site settings** link. Under the **Users and Permissions** group, select **Site permissions**.
1. On the **Site permissions** page, in the list of users who have access to this site, select **Marketing Visitors**.
1. In the **People and Groups - Marketing Visitors** page, verify that Jessica Jennings' account appears in the list.
1. You now want to invite Sheri Harrell to become a member of the Marketing Site. On the menu bar at the top of the page, select the drop-down arrow to the right of **New**, and then in the drop-down menu that appears, select **Add Users**.
1. On the **Share 'Marketing'** window, the **Invite People** tab is displayed by default. In the **Enter names or email addresses** field, enter **Sherri**. A list of users whose first name starts with Sherri will appear. Select **Sherri Harrell** and then select **Share**.  
	Sherri's name will now appear in the **People and Groups - Marketing Visitors** page along with Jessica Jennings.
1. Close this InPrivate browsing session for the global Administrator. 
1. You will now verify whether Jessica Jennings can access the the Marketing site. Perform the same steps as before to open a new **InPrivate** browsing session.
1. In your new **InPrivate** browsing session, enter the following URL in the address bar: **https://portal.office.com**
1. In the **Sign in** window, enter **jessica@xxx.onmicrosoft.com** (where xxx is your tenant ID), and then select **Next**.
1. In the **Enter password** window, enter **Pa55w.rd** and then select **Sign in**.
1. On the **Stay signed in?** window, select **Yes**.
1. This opens the **Microsoft Office Home** tab in your InPrivate browsing session. Open a new tab in your browser and enter the following URL in the address bar: **https://xxx.sharepoint.com/sites/Marketing** (where xxx is your tenant ID).
1. This opens the **Marketing** site. You have just verified that Jessica can access the site after requesting access to it and later being granted access by a site administrator.
1. Close this InPrivate browsing session for **Jessica Jennings**. 
1. You will now verify whether Sherri Harrel can access the the Marketing site. Perform the same steps as before to open a new **InPrivate** browsing session.
1. In your new **InPrivate** browsing session, enter the following URL in the address bar: **https://portal.office.com**
1. In the **Sign in** window, enter **sherri@xxx.onmicrosoft.com** (where xxx is your tenant ID), and then select **Next**.
1. In the **Enter password** window, enter **Pa55w.rd** and then select **Sign in**.
1. On the **Stay signed in ?** window, select **Yes**.
1. This opens the **Microsoft Office Home** tab in your InPrivate browsing session. Open a new tab in your browser and enter the following URL in the address bar: **https://xxx.sharepoint.com/sites/Marketing** (where xxx is your tenant ID).
1. This opens the **Marketing** site. You have just verified that Sherri can access the site after the site admin (the global Administrator) shared site membership with him.
1. Close this InPrivate browsing session for **Sherri Harrell**. 
1. Leave your Edge browsing session open along with all its tabs. 

## Résultat
Après avoir réalisé cet exercice, vous devriez savoir créer et configurer la base des sites Sharepoint Online.

Vous pouvez poursuivre par [l'exercice 3 - Partage externe dans Sharepoint Online](lab8e3)