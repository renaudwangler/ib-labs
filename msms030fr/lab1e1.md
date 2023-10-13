---
layout: page
title: "Lab1-Ex1 - Création de l'environnement"
---
- **Durée approximative**: 00 minutes  

# Scénario
Dans ce premier exercice, vous allez commencer par mettre en oeuvre le tenant 365 dans le projet pilote.  
Les informations d'identification que vous récupèrerez lors de ce premier exercice seront, par la suite, utilisées dans l'ensemble des ateliers et des exercices du stage.  

Vous allez commencer par vous connecter sur la machine cliente **LON-CL1** en utilisant le compte administrateur local **Adatum\administrator** pour ensuite vous connecter au tenant Microsoft 365 avec le compte **MOD Administrator**. Vous allez ensuite mettre à jour le profil de l'entreprise Adatum, et vous preparerez le tenant pour Entra ID et pour les futurs ateliers utilisant *Information Rights Management*, les alertes d'audit, le module Powershell *Graph* et les labels de sensibilité.  

# Objectifs
A la fin de cet atelier, vous aurez une meilleure connaissance de:
- Cras tincidunt massa et nunc vulputate, eget vestibulum massa tincidunt. 
- Maecenas suscipit at nisl vitae malesuada. 
- Suspendisse eu arcu id velit consequat venenatis.  

## Avant de commencer
Votre formateur/trice pourra, le cas échéant, vous donner quelques indications complémentaires concernant l'environnement d'atelier a distance que vous utiliserez.  
dans votre environnement d'atelier, goDeploy a déja créé un tenant Microsoft 365 de test pour vous. Quelques comptes utilisateurs ont déjà été créé dans cet environnement ainsi que deux comptes administrateur:  
- Un compte administrateur local pour l'environnement adatum (adatum\administrator).  
- Un compte administrateur du tenant Microsoft 365 (dont le nom affiché est *MOD Administrator*).  

## Tâche 1: Identifiants Microsoft 365
Une fois votre atelier démarré, vous pourrez accéder au compte de test Microsoft 365 fourni par l'hébergeur d'ateliers. Le compte *MOD Administrator* a été créé et s'est vu affecté le rôle *Global Administrator* sur le tenant de test.

Il vous est conseillé de prendre note des informations suivantes (fournies par goDeploy) pour utilisation ultérieure :  

- **Préfixe du tenant**. Ce préfixe sera utilisé pour identifier et se connecter avec les comptes Entra Id dans votre tenant. Le format de ce préfixe est de la forme **WWLxxxxxxx.onmicrosoft.com**. Notez donc la valeur **WWLxxxxxxx** pour utilisation ultérieure dans tout cet atelier.
- **Mot de passe du tenant**. Fourni par goDeploy, c'est le mot de passe du compte *Mod Administrator* et des utilisateurs précréés.
- **Nom DNS d'entreprise**. goDeploy a également créé un nom de domaine DNS pour l'entreprise Adatum. Il peut être trouvé sous le nom **Lab Domain** dans l'onglet **DNS** du volet de gauche de votre environnement goDeploy (c'est un nom qui ressemble à *labXXXXXXXX.godeploylabs.com*).  

## Tâche 2 : Profil d'entreprise de Adatum
1. Quisque dictum convallis metus, vitae vestibulum turpis dapibus non.
    1. Suspendisse commodo tempor convallis. 
    1. Nunc eget quam facilisis, imperdiet felis ut, blandit nibh. 
    1. Phasellus pulvinar ornare sem, ut imperdiet justo volutpat et.
1. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
1. Vestibulum hendrerit orci urna, non aliquet eros eleifend vitae. 
1. Curabitur nibh dui, vestibulum cursus neque commodo, aliquet accumsan risus. 
    ```
    Sed at malesuada orci, eu volutpat ex
    ```
1. In ac odio vulputate, faucibus lorem at, sagittis felis.
1. Fusce tincidunt sapien nec dolor congue facilisis lacinia quis urna.
    > **Note**: Ut feugiat est id ultrices gravida.
1. Phasellus urna lacus, luctus at suscipit vitae, maximus ac nisl. 
    - Morbi in tortor finibus, tempus dolor a, cursus lorem. 
    - Maecenas id risus pharetra, viverra elit quis, lacinia odio. 
    - Etiam rutrum pretium enim. 
1. Curabitur in pretium urna, nec ullamcorper diam.  

## Tâche 2: Profil d'entreprise de Adatum
Dans votre rôle de Dominique Skyetson, administrateur de l'entreprise Adatum, il vous a été demandé de paramètrer le profil de l'entreprise pour son tenant de test. Dans cette tâche, vous allez procéder à cette configuration. Puisque Dominique n'a pas encore créé son compte nominatif d'administration (vous le ferez dans l'exercice N°2), vous allez vous connecter avec le compte Mod Administrator précédemment récupéré.  

1. Après avoir lançé l'atelier, commencez par vous connecter sur la machine **LON-DC1** (basculez sur la machine **LON-DC1** si la machine **LON-CL1** a été automatiquement ouverte).  
1. Connectez-vous à la machine **LON-DC1** en utilisant le compte **adatum\administrator** et le mot de passe **Pa55w.rd**.
1. Si vous recevez un avertissement concernant la visibilté de la machine sur le réseau, cliquez sur ***Yes***.
1. L'outil **Server Manager** devrait se lancer automatiquement : laissez-le ouvert mais réduisez-le dans la barre des tâches car vous n'en n'aurez pas besoin immédiatement.
1. Sur la barre des tâche, cliquez sur l'icône **Microsoft Edge** puis maximisez la fenêtre du navigateur lorsque celle-ci s'ouvre (vous pouvez choisir de continuer sans vous connecter à Edge).
1. Dans votre anvigateur, ouvrez la page d'accueil de Microsoft 365 en utilisant l'URL suivante : ```https://portal.microsoft.com/```.
1. Dans la fenêtre de connexion, utilisez le nom de connexion du compte *MOD Administrator* que vous avez noté précedemment et cliquez sur **Next**.
1. Dans la fenêtre de sélection du mot de passe, tapez le mot de passe du compte *MOD Administrateur* et cliquez sur **Sign in**.


On the Stay signed in? dialog box, select the Don’t show this again check box and then select Yes.
If a Welcome to Microsoft 365 popup window appears, then click twice on the right arrow and click on the check sign to close it.
On the Microsoft 365 home page, the list of available apps is displayed. If some popup box appears on the screen, select the Got it! button to close the box, since it covers up several of the apps. Select the Admin app, which opens the Microsoft 365 admin center in a new tab.

In the Microsoft 365 admin center, in the left-hand navigation pane, select ...Show all to display all the navigation menu options.
In the left-hand navigation pane, select Settings, and then in the Settings group, select Org Settings.
In the Settings window, the Services tab is displayed by default at the top of the screen. Since you want to update the organization profile, select the Organization profile tab, and then in the list of organization settings, select Organization information.
In the Organization information window that appears, enter the following information:
Street address: 123 Place de la pyramide
City: La Défense
State or province: Washington
ZIP or postal code: 92911
Country or region: France
Phone: +33 155543210
Technical contact: (your main administrator email)
Preferred language: English
Select Save.
Once the changes have been saved, a Saved message will appear at the top of the Organization information window. Select the X in the upper right-hand corner of the window to close it.
This will return you to the Organization profile tab of the Org settings window. In the organization profile list, select Release preferences.
In the Release preferences window, select Targeted release for select users and then select Save.
Note: One of the benefits of Microsoft 365 is the ability to have the latest features and updates applied to your environment automatically, which can reduce maintenance costs and overhead for an organization. By setting up your Release preferences, you can control how and when your Microsoft 365 tenant receives these updates. The Targeted release for select users option enables you to create a control group of users who will preview updates so that you can prepare the updates for your entire organization. The Targeted release for everyone option is more commonly used in development environments, where you can get updates early for your entire organization. In non-development environments, such as Adatum, targeted release to select people is the more typical preference as it enables an organization to control when it wants to make updates available to everyone once the updates have been reviewed by the control group.

Under the Targeted release for select users setting are options to Select users and Upload users (from a CSV file). Select the Select users option. 1. In the Choose users for targeted release window, select the Who should receive targeted releases? field. This will display the list of existing Microsoft 365 user accounts.
In the list of users, select your administrator account and then select Save.
On the Release preferences window, select the X in the upper right-hand corner to close the window.
On the Organization profile tab of the Org settings window, select Custom themes.
In the Custom themes window, scroll though the page and review the various theme and branding options that are available for you to update. For the purpose of this lab, you can change any of the options or leave the default values as is. For example, you can add the logo of your company and set the background image as the default for all your users. Along with these options you can change the colors for your navigation pane, text color, icon color, and accent color. Go ahead and explore the different options for your tenant and make any changes that you wish.
Note: Some color patterns aesthetically distract users. If you do change any of the colors, it is recommended that you avoid using high contrasting colors together, such as neon colors and high-resolution colors like bright pink and white.

If you made any changes in the Custom themes window, select Save when you are done. When you are finished with the Custom themes, select the X in the upper right-hand corner to close the window.
Remain logged into the LON-DC1 VM and leave all the tabs open in your browser for the remaining tasks in this lab exercise.
1. Quisque dictum convallis metus, vitae vestibulum turpis dapibus non.
    1. Suspendisse commodo tempor convallis. 
    1. Nunc eget quam facilisis, imperdiet felis ut, blandit nibh. 
    1. Phasellus pulvinar ornare sem, ut imperdiet justo volutpat et.
1. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
1. Vestibulum hendrerit orci urna, non aliquet eros eleifend vitae. 
1. Curabitur nibh dui, vestibulum cursus neque commodo, aliquet accumsan risus. 
    ```
    Sed at malesuada orci, eu volutpat ex
    ```
1. In ac odio vulputate, faucibus lorem at, sagittis felis.
1. Fusce tincidunt sapien nec dolor congue facilisis lacinia quis urna.
    > **Note**: Ut feugiat est id ultrices gravida.
1. Phasellus urna lacus, luctus at suscipit vitae, maximus ac nisl. 
    - Morbi in tortor finibus, tempus dolor a, cursus lorem. 
    - Maecenas id risus pharetra, viverra elit quis, lacinia odio. 
    - Etiam rutrum pretium enim. 
1. Curabitur in pretium urna, nec ullamcorper diam.  

## Résultat
Maecenas fringilla ac purus non tincidunt. Aenean pellentesque velit id suscipit tempus. Cras at ullamcorper odio.