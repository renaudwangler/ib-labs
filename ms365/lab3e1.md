---
layout: stage
title: "Lab3-Ex1 - Préparation de la synchronisation d'identités"
length: "00"
date: "11/11/2023"
---
# Scénario
Comme dans les précédents exercices, vous allez vous glisser dans la peau de Dominique Skyetson, administrateur de Adatum. Dans cet atelier, vous réaliserez les tâches nécessaires pour gérer l'hybridation de la gestion d'identités du projet pilote entre l'Active Directory existant et l'Entra ID utilisé par l'environnement Microsoft 365.  
Pendant cet atelier, vous allez préparer, installer et mettre en oeuvre Entra Connect qui sera un jalon important pour Adatum dans sa décision de déplacer ses données et applications vers le cloud 365.

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- L'utilisation des UPN de l'Active Directory comme noms de connexion dans Entra Id
- Le nettoyage des utilisateurs on-premises avant de les synchroniser

## Tâche 1 - Modification des UPN
Dans *Active Directory Domain Service* (ADDS), le suffixe UPN par défaut est le nom DNS du domaine dans lequel le compte utilisateur a été créé. L'assistant d'installation Entra Connect utilise l'attribut *UserPrincipalName* (bien qu'il soit possible d'en sélectionner un autre) comme nom de connexion utilisateur pour Entra Id.  
L'environnement de test du pilote de Adatum que vous utilisez a été créé par votre hébergeur d'ateliers et le nom de domaine de l'ADDS choisi est **adatum.com**. Les utilisateurs ADDS ont donc été créés dans ce domaine qui ne sera pourtant pas celui utilisé pour l'environnement Entra Id de Adatum (le nom DNS d'entreprise sera utilisé à la place).  
Dans cette tâche, vous allez vous faciliter la vie en utilisant Windows Powershell pour changer le suffixe UPN de votre environnement ADDS et l'UPN de tous les utilisateurs *on-premises*.  
1. Basculez sur la machine virtuelle **LON-DC1** sur laquelle vous devriez encore être connecté avec le compte **ADATUM\Administrator** et le mot de passe **Pa55w.rd**.
1. Faites un clic-droit sur le bouton démarrer pour sélectionner **Windows PowerShell (Admin)**.
1. Dans la fenêtre **Administrator: Windows PowerShell**, utilisez la commande suivante pour référencer votre nom DNS d'entreprise (dont vous avez pris note antérieurement) :
	```$upnSuff = 'labxxxxx.godeploylabs.com'```
	>**Note :** Pensez à bien modifier le nom de domaine en remplaçant les *xxxxx* avant de taper sur **[Entrée]**.
1. Utilisez ensuite la commande suivante pour remplacer le suffixe UPN de votre forêt ADDS :
	```Set-ADForest -identity adatum.com -UPNSuffixes @{replace = $upnSuff}```
1. Utilisez, pour terminer, la commande suivante pour modifier l'UPN de tous les utilisateurs du domaine ADDS :  
	```Get-ADUser -Filter * -Properties SamAccountName | ForEach-Object { Set-ADUser $_  -UserPrincipalName ($_.SamAccountName.replace(' ','') + '@' + $upnSuff )}```

## Tâche 2 - Préparation de comptes à problèmes
L'intégration de votre ADDS on-premises avec Entra Id rendra vos utilisateurs plus productifs tout en facilitant l'administration de leurs comptes. Cependant, des erreurs peuvent survenir car, tout au long de la vie de votre ADDS, des informations érronées ont pu être utilisées qui n'ont pas posé de problème on-premises mais ne pourraient être supportées dans le cloud.  
Par exemple, plusieurs objets pourraient avoir un attribut **ProxyAddresses** ou **UserPrincipalName** identiques dans l'ADDS. De nombreuses erreurs similaires pourraient poser problème dans la mise en place de la synchronisation de votre annuaire.  
Dans cette tâche, vous allez utiliser un script pour implémenter quelques erreurs sur les utilisateurs du projet pilote Adatum afin d'identifier ensuite la manière de trouver et corriger ce genre d'erreurs.
1. Sur LON-DC1, dans la fenêtre **Administrator: WIndows Powershell**, utilisez la commande suivante pour récupérer le script que vous utiliserez ensuite :
	```Invoke-WebRequest "https://raw.githubusercontent.com/renaudwangler/ib-labs/master/msms030fr/problemUsers.ps1" | Select-Object -ExpandProperty Content | Out-File ".\problemUsers.ps1"```
1. Lancez ensuite ledit script dans la fenêtre **Administrator: Windows PowerShell** :
	```.\problemUsers.ps1```
	>**Note :** Vous devriez pouvoir exécuter ce script sans problème car vous avez déjà changé la stratégie d'exécution des scripts sur LON-DC1 dans l'atelier 2.
1. Attendez que le script ait terminé son exécution avant de fermer la fenêtre **Administrator: Windows PowerShell** et de poursuivre sur la tâche suivante.

## Tâche 3 - Identification et correction des problèmes avec IdFix
Dans cette tâche vous allez appréhender l'utilisation de l'outil **idFix** pour identifier et corriger les problèmes sur vos objets ADDS avant de mettre en place la synchronisation de ce dernier vers Entra Id.
1. Vous devriez être encore connecté sur **LON-DC1** à l'issue de la tâche précédente.
1. Si votre navigateur Internet n'est pas ouvert, cliquez sur l'icône de **Edge** dans la barre des tâches et maximisez-le.
1. Dans votre navigateur, dans la barre d'adresse, rendez-vous à l'adresse suivante pour télécharger l'outil **idFix** : ```https://microsoft.github.io/idfix/```
1. Dans la page **Microsoft - IdFix**, Cliquez sur le titre **Step 2: Install IdFix** dans le menu de navigation à gauche.
1. Sous la section **Step 2: Install IdFix** en haut de page, les instructions vous proposent de télécharger et lancer **setup.exe**. Cliquez sur **setup.exe** pour télécharger le fichier sur LON-DC1.
1. Une fois le fichier **setup.exe** téléchargé, il apparaîtra normalement dans la barre de notifications en haut à droite de votre navigateur (si ce n'est pas le cas, retrouvez le dans le répertoire **Downloads** de LON-DC1). Cliquez sur **Open File** pour lancer l'installation.
1. Si une fenêtre **Do you want to run this file?** apparaît, cliquez sur **Run**.
1. Dans la fenêtre **Do you want to install this application?**, cliquez sur **Install**.
1. Sur le message **IdFix Privacy Statement**, cliquez sur **OK**.
1. Dans la fenêtre **IdFix** qui s'affiche, sur la barre bleue en haut, cliquez sur **Query** pour lancer l'analyse de votre ADDS.
1. Si un message **Schema Warning** s'affiche, cliquez sur le bouton **Yes** (faites de même à chaque fois que ce message apparait).  
	Après un instant, idFix devrait vous afficher quelques erreurs.
1. Cliquez sur le titre de la colonne **ERROR** pour trier les lignes en ordre alphabétique.
	>**Note :** Si des erreurs de type **topleveldomain** apparaissent, contentez-vous ici de les ignorer car l'outil idFix peut les identifier mais pas les réparer.
1. Sur la ligne de **Klemen Sic**, sélectionnez la valeur **EDIT** grâce au menu dans la colonne **ACTION**.
1. Dans la barre de menu bleue, cliquez sur le bouton **Apply**.
1. Dans la boite de dialogue **Apply Pending** cliquez sur **Yes**.
	>**Note :** Constatez que la valeur de la colonne **Action** a changé de **EDIT** vers **COMPLETE** pour Klemen, indiquant ainsi que IdFix a mis à jour l'objet utilisateur et corrigé l'erreur.
1. Sur la barre de menu bleue, cliquez sur **Query** pour relancer la requête et raffraîchir les résultats.
1. Vérifiez que Klemen n'apparaît plus dans la liste des erreurs.
1. Trouvez la ligne de **Logan Boyle**. La colonne **VALUE** pour Logan a été incorrectement saisie en **Lara@adatum.com**, ce qui produit un doublon avec le compte de Lara Raisic, qui est aussi dans la liste.  
	Pour corriger l'email de Logan, vous devez déjà choisir la valeur **Lara@adatum.com** dans la colonne **UPDATE** de Logan et la remplacer en saisissant ```logan@adatum.com```. 
1. Sélectionnez ensuite le champ **ACTION** sur la ligne de Logan et choisissez **EDIT**.
1. Dans la barre de menu bleue, cliquez sur le bouton **Apply**.
1. Dans la boite de dialogue **Apply Pending** cliquez sur **Yes**.
1. Sur la barre de menu bleue, clqiuez sur **Query** pour relancer la requête et raffraîchir les résultats.
1. Vérifiez que Logan et Lara n'apparaissent plus dans la liste des erreurs.
1. Fermez l'outil **idFix**, vous êtes prêt à mettre en place la synchronisation.

## Résultat
Dans cet exercice, vous avez préparé votre environnement ADDS pour la mise en place de la synchronisation avec Entra Id.

Vous pouvez poursuivre par [l'exercice 2 - Mise en oeuvre de la synchronisation d'identités](lab3e2)