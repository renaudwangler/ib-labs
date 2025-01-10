---
layout: stage
title: "Lab1-Ex1 - Appréhension du tenant pilote"
length: "20"
date: "10/01/2025"
script: "ms365.js"
---
# Scénario
A travers les ateliers de ce stage, vous allez prendre l'identité de Dominique Skyetson, administratrice Microsoft 365 de *ib Cegos Workshop (ICW)*. En tant que Dominique, il vous a été demandé de créer un environnement pilote Microsoft 365. Vous allez donc commencer par prendre connaissance du tenant Microsoft 365 qui a été fourni à fins de tests.  
Vous allez ensuite vous assurer que les machines virtuelles de l'environnement de test soient correctement configurées, avant de voir les options de cutomisation applicables sur l'ensemble de l'organisation.  

Vous allez commencer par vous connecter aux machines de l'atelier en utilisant le compte administrateur, pour ensuite vous connecter au tenant Microsoft 365 avec le compte **MOD Administrator**. Vous allez ensuite mettre à jour le profil de l'entreprise *ib Cegos Workshop*.  

## Avant de commencer
Votre formateur/trice pourra, le cas échéant, vous donner quelques indications complémentaires concernant l'environnement d'atelier que vous utiliserez.  
dans votre environnement d'atelier, goDeploy a déjà créé un tenant Microsoft 365 de test pour vous. Quelques comptes utilisateurs ont déjà été créés dans cet environnement ainsi que deux comptes administrateur :  
- Un compte administrateur local pour l'environnement *ib Cegos Workshop* (adatum\administrator).  
- Un compte administrateur du tenant Microsoft 365 (dont le nom affiché est *MOD Administrator*).  

## Tâche 1 - Identifiants Microsoft 365
Une fois votre atelier démarré, il vous faut prendre note des informations suivantes fournies dans l'environnement d'atelier :  
- **Préfixe du tenant**. Ce préfixe, trouvable dans le nom de l'administrateur du tenant, sera utilisé pour identifier et se connecter avec les comptes Entra Id dans votre tenant. Le format de ce préfixe est de la forme **xxxxxxxx.onmicrosoft.com**. Notez donc la valeur **xxxxxxxx** pour utilisation ultérieure dans tous les ateliers, en remplacement de la mention [‎onmicrosoftDomain] ou [onmicrosoftDomain].  
- **Mot de passe du tenant**. Fourni par goDeploy, il s'agit du mot de passe du compte *MOD Administrator*.  
- **Nom DNS d'entreprise**. goDeploy a également créé un nom de domaine DNS pour l'entreprise *ib Cegos Workshop*. Il peut être trouvé sous le nom **Lab Domain** dans l'onglet **DNS** du volet de gauche de votre environnement goDeploy (c'est un nom qui ressemble à *labXXXXX.godeploylabs.com*) et sera à utiliser en remplacement de la mention [‎godeployDomain] ou [godeployDomain].  
 >**Astuce :** Si votre navigateur le supporte, vous pouvez <a href="#" onclick="document.getElementById('domainInput').style.display = 'block';return false">cliquer sur ce lien</a> pour personnaliser les noms de domaines dans ces instructions et vous en faciliter l'utilisation tout au long des ateliers de ce stage. 

## Tâche 2 - Vérification du démarrage de l'atelier
Dans un environnement de test comme celui qui nous est fourni, qui ne contient qu'un seul contrôleur de domaine, le démarrage des machines peut poser problème. Afin de maximiser les chances que les manipulations des ateliers suivants se passent correctement, vous allez commencer par *corriger* le démarrage des VMs.
1. Lors de l'ouverture de votre environnement d'ateliers, vous devez vous connecter sur la machine virtuelle **LON-DC1**.
1. Selectionnez la machine LON-DC1 et ouvrez une session avec le compte ```Administrator``` et le mot de passe ```Pa55w.rd```.
1. Attendez que l'outil **Server Manager** s'ouvre automatiquement.
1. Sur le menu de navigation de gauche de l'outil **Server Manager**, cliquez sur l'onglet **Local Server**
1. En face de la ligne **Windows Defender Firewall**, si vous voyez tout autre mention que **Domain: On**, cela indique un problème de démarrage que nous allons corriger ici.
1. Cliquez sur le lien mentionnant l'adresse IP de LON-DC1 : **172.16.0.10, IPv6 enabled**, situé en regard de la ligne **Ethernet**.
1. Dans le dossier **Network Connections** qui vient de s'ouvrir, sélectionnez la carte réseau **Ethernet**.
1. Faites un clic-droit sur la carte réseau Ethernet et choisissez **Disable**.
1. Refaites un clic-droit sur la même carte réseau pour choisir **Enable**.
1. Attendez que la mention sous le nom de la carte réseau ait changé de **Identifying** à **Adatum.com**. Cela indique que le contrôleur de domaine a correctement démarré : fermez le dossier **Network Connections**.
    >**Nota :** Le nom de domaine Active Directory n'est ici pas lié à l'identité *ib Cegos Workshop*, mais le changer prendrait trop de temps pour l'intérêt que cela présente dans un contexte d'atelier.
1. De retour dans l'onglet **Local Server** du **Server Manager**, vous pouvez cliquer sur l'icône d'actualisation (en haut à droite) pour vérifier que la ligne **Windows Defender Firewall** mentionne désormais **Domain: On**.
1. Réduisez l'outil **Server Manager** dans la barre des tâches sans le fermer.
1. Maintenant que LON-DC1 est correctement démarré, il vous suffit de redémarrer les autres machines virtuelles pour qu'elles s'*accrochent* correctement au réseau de domaine : Basculez sur la machine **LON-CL1**.
1. Sur l'écran de connexion de LON-CL1, cliquez sur l'icône **Power** (dernière icône en bas à droite) et choisissez **Restart**.
1. Répétez l'opération précédente pour LON-CL2.
    > **Note :** Vous n'avez pas besoin d'attendre que les machines clientes aient redémarrer pour commencer la tâche suivante.  

## Tâche 3 - Vérification de la création du tenant
Bien que goDeploy ait initié la création du tenant Microsoft 365 pour *ib Cegos Workshop*, en tant que Dominique Skyetson, administratrice de ICW, vous allez vérifier cette création afin de pouvoir poursuivre vos tests pour le projet pilote.
1. A la suite de la tâche précédente, retournez sur **LON-DC1**, vous devriez toujours être connecté avec le compte **Administrator**.
1. Sur la barre des tâches, cliquez sur l'icône de **Microsoft Edge**. Passez les éventuelles pages de bienvenue (vous pouvez choisir **Continue without signing in**).
1. Dans le navigateur, accédez au portail d'administration de Microsoft 365 en utilisant l'url suivante :
```https://admin.microsoft.com```
   >**Nota important:** Si vous rencontrez des soucis réseau dans les machines virtuelles goDeploy pour vous connecter sur l'environnement Microsoft 365, vous pouvez executer toutes les opérations à faire dans un navigateur Internet sur n'importe qul autre navigateur Internet en dehors des machines virtuelles (local).
1. Dans la fenêtre **Sign in**, saisissez le nom de connexion du compte *MOD Administrator* (```admin@[onmicrosoftDomain].onmicrosoft.com```) et cliquez sur **Next**
1. Dans la fenêtre **Enter password**, saisissez ou collez le **mot de passe du tenant** que vous avez précédemment noté et cliquez sur **Sign in**


1. Dans le portail **Microsoft 365 admin center**, dans le menu de navigation, sélectionnez le groupe **Users**, puis le choix **Active users**. 
1. Dans la liste **Active users**, vous voyez la liste des utilisateurs qui ont été pré-créés dans le tenant.
1. En bas du menu de navigation, dans la section **Admin centers** section, sélectionnez **Exchange**.
1. Un nouvel onglet s'ouvre dans votre navigateur, affichant le portail **Exchange admin center**. Dans le menu de navigation, ouvrez le groupe **Recipients** pour sélectionner **Mailboxes**.
1. Une liste d'utilisateurs, similaires à celle présentée précédemment sous **Active users** dans le portail **Microsoft 365 admin center** devrait être affichée sur cette page  **Manage mailboxes**.  
1. Dans votre navigateur, fermez l'onglet **Exchange admin center** mais laissez ouvert l'onglet **Microsoft 365 admin center** pour la suite et fin de cet exercice. 






1. Sur la fenêtre **Stay signed in?**, cochez la case **Don’t show this again** et cliquez sur **Yes.**
1. Si un popup **Welcome to Microsoft 365** apparaît, cliquez deux fois sur la flèche droite pour pouvoir le fermer.
1. Dans le **Microsoft 365 admin center**, dans le menu de navigation de gauche, sélectionnez **...Show all** pour voir tous les choix dudit menu.
    > **Note :** Si le menu de navigation n'apparait pas, cliquez sur les trois lignes horizontales en haut à gauche de la fenêtre pour le faire apparaitre.
1. Dans le menu de navigation, cliquez sur **Settings** pour en ouvrir le groupe d'options, puis cliquez sur **Org Settings**.
1. Dans la fenêtre **Org Settings**, c'est l'onglet **Services** qui est affiché par défaut. Puisque vous souhaitez modifier le profil de l'entreprise, cliquez sur l'onglet **Organization profile** pour l'afficher. sélectionnez ensuite **Organization information**.
1. Dans la fenêtre **Organization information** qui s'affiche, modifiez les informations suivantes :
    - Name : ```Adatum```
	- Technical contact : (l'adresse email du compte *MOD Administrator* : ```admin@[onmicrosoftDomain].onmicrosoft.com```)
1. Cliquez ensuite sur **Save**.
1. Une fois les modifications sauvegardées, un message ***Saved*** apparaît en haut de la fenêtre dans un encadré vert. Cliquez sur le **X** tout en haut à droite de la fenêtre **Organization information** pour la fermer.
1. Vous êtes de retour sur l'onglet **Organization profile** de la fenêtre **Org settings**, sélectionnez dès lors **Release preferences**.
1. Dans la fenêtre **Release preferences**, sélectionnez **Targeted release for select users** et cliquez sur **Save**.
	> **Note :** Un des avantages de Microsoft 365 est la possibilité de tirer parti des dernières fonctionnalités et mises à jour automatiquement dans votre tenant, ce qui va réduire les couts de maintenance et la surcharge administrative pour une entreprise.
    L'option **Targeted release for select users** vous permet de garder le contrôle des utilisateurs qui auront les mises à jour et nouvelles fonctionnalités en premier, afin de préparer sereinement l'entreprise à l'arrivée de ces nouveautés pour tout le monde.
1. Sous votre choix **Targeted release for select users** S'affichent désormais les possibilités **Select users** et **Upload users** (depuis un fichier CSV). Cliquez sur **Select users**.
1. Dans la fenêtre **Choose users for targeted release**, cliquez dans le champ **Who should receive targeted releases?**. Vous allez ainsi avoir accès à la liste des comptes utilisateurs existant.
1. Dans la liste des utilisateurs, sélectionnez *MOD Administrator* avant de cliquer sur **Save**.
1. Dans la fenêtre **Release preferences** , clique sur le **X** de fermeture en haut à droite.
1. De retour sur l'onglet **Organization profile** de la fenêtre **Org settings**, sélectionnez **Custom themes**.
1. Dans la fenêtre **Custom themes**, cliquez sur le thème **Default theme**.
1. Dans la fenêtre **Default theme**, prenez le temps de parcourir les différentes options d'affichage et de branding qui s'offrent à vous. Pour les besoins de l'atelier, n'hésitez pas à modifier quelques paramètres ici pour voir comment ils seront appliqués aux utilisateurs de Adatum.
1. Si vous avez fait des changements dans le thème par défaut, cliquez sur **Save** lorsque vous avez terminé. Cliquez ensuite sur le **X** en haut à droite pour fermer la fénêtre **Default theme**.
1. Restez connecté sur LON-DC1 VM et laissez votre navigateur Internet ouvert pour la tâche suivante de cet atelier.



## Tâche 4 - Vérification du service Microsoft 365
Dans cette tâche, vous allez vérifier l'état de santé du service Microsoft 365 sur votre tenant.
1. A la suite de la tâche précédente, vous devriez toujours être connecté sur **LON-DC1** avec le compte **Administrator** et être connecté sur le portail d'administration de Microsoft 365 sous le compte **MOD Administrator**.
1. Dans le portail **Microsoft admin center**, dans le menu de navigation, ouvrez le groupe **Health** pour choisir l'option **Service health**. Cela fait apparaitre le dashboard **Service health**.
1. Sur la page **Service health**, l'onglet **Overview** est affiché apr défaut. Cet onglet affiche les problèmes concernant actuellement les services Microsoft 365 disponibles avec vos abonnements.
	> **Note** : Si aucun problème n'est actuellement listé, vous pouvez toujours cliquer sur l'onglet **Issue history** pour réaliser l'opération suivante.
1. Cliquez sur une ligne représentant un problème pour observer le détail des informations fournies par l'éditeur sur ce problème et son état actuel de prise en charge et/ou de résolution.
1. Après avoir observé les détails d'un problème, cliquez sur le **X** en haut à droite pour le fermer et n'hésitez pas à aller en observer d'autres.
1. Restez connecté sur LON-DC1 VM et laissez votre navigateur Internet ouvert pour l'exercice suivant de vos ateliers.

## Résultat
A l'issue de ce premier exercice, vous avez vérifié la création du tenant pilote pour Adatum, configuré quelques options pour toute l'entreprise et vérifié l'état de santé du service Microsoft 365.

Vous pouvez poursuivre par [l'exercice 2 - Ajout d'un domaine DNS d'entreprise](lab1e2)