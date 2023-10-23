---
layout: stage
title: "Lab2-Ex2 - Gestion des stratégies de mots de passe Microsoft 365"
length: "00"
---
# Scénario
Dans cet exerice, vous allez poursuivre, dans la peau de Doimnique Skyetson, en tant qu'administrateur d'Adatum. Dans le contexte du projet pilote de Adatum, Doimnique veut comprendre les fonctionnalités de gestion de mot de passe de Microsoft 365. Il va commencer par mettre en place une stratégie de mot de passe qui expire après 60 jours.  
Puisque Adatum souhaite également implémenter l'authentification multifactorielle (MFA), Dominique doit mettre en place la MFA dans le projet pilote. La MFA est un standard de cyber-sécurité qui fournit le socle de l'intégrité des identités. La mFA est activée par défaut pour un nouveau tenant Microsoft 365; cependant, pour le besoins de ce lab, la MFA a été désactivée pour fluidifier le fonctionnement dans l'environnement virtuel d'ateliers. Ainsi, Dominique va activer la MFA pour son propre compte pour vérifier cette fonctionnalité, avant de la désactiver de nouveau (Désactiver la MFA en fin d'exerice sur le compte de Dominique vous évitera de devoir saisir votre facteur complémentaire à chaque connexion pendant le stage).  
**Important :** Pour mettre en oeuvre la MFA, vous aurez besoin d'utiliser votre téléphone pour recevoir un code de vérification que vous devrez saisir afin de valider la connexion. Si vous ne pouvez pas recevoir de texto, il vous faudra passer cette exercice ou demander consiel à votre formateur/trice pour réaliser l'opération d'une autre manière (avec une application par exemple).  

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- la stratégie d'expiration de mots de passe de Microsoft 365
- l'activation et la désactivation de l'authentification multifzctorielle

## Tâche 1 - Configurer une stratégie de mot de passe Microsoft 365
Dans cette tâche, vous allez changer la stratégie de mot de passe qui contrôle la fréquence à laquelle les utilisateurs doivent changer leur mot de passe.
Par le passé, vous aviez une stratégie exigeant que les utilisateurs changent leur mot de passe tous les 90 jours. Cependant, pour cet exercice, vous allez changer l'expiration de mot de passe pour la passer à 60 jours.
**Important **: Vous allez faire ce changement à seule fin de test, le présent atelier n'ayant pas pour vocation de durer plus de 60 jours...  
1. Vous devriez encore être connecté sur **LON-CL1** à l'issue du premier atelier. Le **Microsoft 365 admin center** devrait encore être resté ouvert dans votre navigateur et vous devriez y être connecté avec le compte *Dominique Skyetson*.
1. Dans le portail **Microsoft 365 admin center**, dans le menu de navigation de gauche, ouvrez **Settings** pour sélectionnet **Org settings** (cliquer sur **Show all** si le groupe d'options **Settings** n'est pas affiché).
1. Dans la fenêtre **Org settings**, l'onglet **Services** est affiché par défaut en haut de la page. sélectionnez plutôt l'onglet **Security & Privacy** situé à coté. 
1. Sur la page **Security & Privacy**, sélectionnez **Password expiration policy** dans la liste de paramètres. 
1. Sur le panneau **Password expiration policy** qui s'affiche, décochez la case **Set passwords to never expire (recommended)**.
	> **Note :** Vous pouvez cliquer sur lel ien documentaire pour comprendre en quoi des mots de passe qui n'expire pas sont désormais considéré comme plus sécurisés.
1. Entrez **60** dans le champ **Days before passwords expire** avant de cliquer sur **Save**.
1. Vérifiez que la case **Set passwords to never expire (recommended)** est décochée et que le message **Changes saved** apparaît en haut de page.
1. Cliquez sur le **X** en haut à droite afin de fermer le panneau **Password expiration policy**.
1. Laissez votre navigateur ouvert pour la tâche suivante.

## Tâche 2 - Activer et désactiver l'authentification multifactorielle
To test Multi-factor authentication (MFA), Holly Dickson wants to turn it on for her personal Microsoft 365 user account and test how it works. Once you have verified that you can connect to Microsoft 365 using MFA, you will disable MFA for Holly's account. This will save you from having to enter the second form of authentication when signing in as Holly in any of the remaining labs in this course.  
>**Important:** To implement MFA, you will need a mobile phone to receive a text message containing a verification code. You will then enter the code into the Office 365 sign-in process as a second form of authentication.  
If you do not have a mobile phone:  
	- You can still perform this task, but you will have to skips steps 9-19 that verify MFA by having you log out and then enter a second form of authentication when you log back in to Office 365.  
	- If you are in a classroom training environment, it is recommended that you notify your instructor, who can then potentially partner you with another student who has a mobile phone so that you can either use the other student's phone or watch the other student sign in.  
	- If you are performing this training on your own and you do not have a mobile phone, or if you are in a classroom environment but cannot partner with another student, you can perform the steps in this task other than the ones that actually verify MFA (steps 9-19). This still allows you to enable and then disable MFA to get the experience of performing those steps.  
*This is the only task in this course that requires a mobile phone.*
1. You should still be logged into the **LON-CL1** VM as the **Administrator**.
1. The **Microsoft 365 admin center** should still be open in the Edge browser from the prior task, and you should be signed into Microsoft 365 as **Holly Dickson**. 
1. To enable MFA for Holly Dickson's user account, you must first access the **Active users** list in the **Microsoft 365 admin center**. In the **Microsoft 365 admin center**, in the left-hand navigation pane expand **Users** and then select **Active users**.
1. In the **Active users** window, on the menu bar at the top of the user list, select **Multi-factor authentication**. This will open a **multi-factor authentication** window in a new tab in your browser.
1. Click ont the "**Legacy per-user MFA**" link in the gray ribbon to access the previous interface of MFA management.
1. In the **multi-factor authentication** window, the **users** tab is displayed by default. 
	>**Note**: the MFA status for all existing user accounts is **Disabled**.
1. Select the check box for **Holly Dickson**, and in Holly's properties pane that appears on the right, select **Enable**.
1. On the **About enabling multi-factor auth** dialog box, select **enable multi-factor auth**. 
1. When the **Updates successful** dialog box appears, select **close**. In the list of users in the **multi-factor authentication** window, verify Holly's MFA Status has changed to **Enabled**. 
1. You must now sign out of Microsoft 365 as Holly, close your browser session, open a new session, and then log back into Microsoft 365 as Holly. During the log-in process, you will be required to enter a second form of authentication as per MFA. When Holly signs back in after having MFA enabled for her user account, she will be asked for the authentication information needed for MFA, such as her phone number and authentication options. In your role as Holly, you will enter your mobile phone number, and you will receive a text message containing a verification code that you must enter to validate the authentication. You will perform these steps in the remaining portion of this task.  
	You must begin by signing out of Microsoft 365 as Holly, so switch to the tab containing the **Microsoft 365 admin center** paege. select the **HD** user icon in the upper right corner of the browser and in the **My account** pane, select **Sign out**.
1. Once you are signed out, close the browser and all the browser tabs.
1. Select the **Edge** icon on your taskbar to open a new browser session, and then open the **Office 365 Home** page by entering the following URL in the address bar: **https://portal.office.com**
1. In the **Pick an Account** window, select **Holly@M365xZZZZZZ.onmicrosoft.com** (where ZZZZZZ is the tenant suffix ID provided by your lab hosting provider). In the **Enter password** window, enter **ibForm@tion** and select **Sign in**.
1. Because MFA is enabled for Holly, a **More information required** window appears. Select **Next**.
1. In the **Keep your account secure** window, it indicates that you can either use the Microsoft Authenticator app for MFA, or you can use a phone.  
	For the purposes of this lab, you should use the **Phone** method so that you do not have to take time installing the Microsoft Authenticator app that you may not use again after this training class. Since the window displays the Microsoft Authenticator method by default, select the **I want to set up a different method** option at the **bottom** of the window. 
1. In the **Choose a different method** dialog box that appears, select the drop-down arrow in the **Which method would you like to use** field and select **Phone**. Select **Confirm**.
1. In the **Keep your account secure** window, the **Microsoft Authenticator** section has now been replaced by a **Phone** section. Select your country or region from the drop-down list, enter your mobile phone number (**678901234**), and then select **Next**.
	>**Note:** If you receive a message indicating that an error occurred, you should close the browser (closing all tabs) and then repeat steps 11-16. 
1. You will receive a text message on your mobile phone with a verification code to test whether the phone number you entered is correct. In the **Enter code** window that appears, enter the code that was sent in the text message and then select **Next**.
	>**Note:** If you take too long to complete this process, the **Enter password** window will appear with a message indicating you took too long to complete the sign in process, so you will be timed-out. If this occurs, you must sign in again with Holly's password of **ibForm@tion**. Another verification code will be texted to your phone, so enter it in the **Enter code** screen that appears and select **Next**.
1. Once your Phone is successfully verified, click **Next** and **Done**
1. If a **Stay signed in?** window appears, select **Don't show this again** and then select **Yes**.
1. The **Microsoft 365** homepage should now be displayed in your browser. While Adatum will institute MFA once it eventually goes live with Microsoft 365 in its production environment, for now Holly wants to turn MFA off for her account for the remainder of the pilot project. She has just verified that she can use MFA to sign into Microsoft 365, so she will turn it off through the remainder of the pilot.  
	To disable MFA for Holly Dickson's user account, select **Admin** on the **Office 365 home** page to open the **Microsoft 365 admin center**. In the left-hand navigation pane, expand **Users** and then select **Active users**.
1. In the **Active users** window, on the menu bar at the top of the user list, select **Multi-factor authentication**.
1. In the **multi-factor authentication** window, the **users** tab is displayed by default. The MFA status for all existing user accounts is **Disabled**, except for Holly's account, which displays a status of **Enforced**.
	>**Note:** When you originally enabled MFA for Holly, the status was changed from **Disabled** to **Enabled**. However, now that Holly has signed in using MFA, her the status has changed from **Enabled** to **Enforced**.  
1. Select the check box for **Holly Dickson**, and in Holly's properties pane on the right, select **Disable**.
1. On the **Disable multi-factor authentication?** dialog box, select **yes**. 
1. When the **Updates successful** dialog box appears, select **close**. In the **multi-factor authentication** window, verify Holly's MFA Status has changed to **Disabled**. 
1. You must now sign out of Microsoft 365 as Holly, close your browser session (to clear your cache), open a new session, and then log back into the **Office 365 home** page as Holly (**Holly@M365xZZZZZZ.onmicrosoft.com**). You should be familiar with these processes, so perform them now !
	>**Note:** with MFA turned off for Holly's account, you will simply need to enter Holly's password of **ibForm@tion** when she logs in. Once you are logged in, you should then navigate to the **Microsoft 365 admin center**. 
1. After having completed the prior step, you should be logged into Microsoft 365 as Holly, and you should have the **Microsoft 365** homepage and the **Microsoft 365 admin center** open in your browser. Leave the browser and these tabs open and proceed to the next lab exercise.  


1. Restez connecté avec le compte de Dominique Skyetson sur le centre d'administration ouvert dans LON-CL1 pour les opérations de l'exercice suivant.

## Résultat
A l'issue de ce deuxième exercice, vous avez créé et géré des comptes utilisateurs ainsi que leurs licences pour coller au plus près aux besoins métier de Adatum.