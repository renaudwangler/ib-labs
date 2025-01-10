---
layout: stage
title: "Lab3-Ex1 - Préparation de la synchronisation d'identités"
length: "00"
date: "10/01/2025"
script: "ms365.js"
---
# Scénario
Comme dans les précédents exercices, vous allez vous glisser dans la peau de Dominique Skyetson, administratrice de ib Cegos Workshop. Dans cet atelier, vous réaliserez les tâches nécessaires pour gérer l'hybridation de la gestion d'identités du projet pilote entre l'Active Directory existant et l'Entra ID utilisé par l'environnement Microsoft 365.  
Pendant cet premier atelier, vous allez préparer l'ADDS pour la mise en oeuvre de Entra Connect qui sera un jalon important pour ICW dans sa décision de déplacer ses données et applications vers le cloud 365.

## Tâche 1 - Modification des UPN
Dans *Active Directory Domain Service* (ADDS), le suffixe UPN par défaut est le nom DNS du domaine dans lequel le compte utilisateur a été créé. L'assistant d'installation Entra Connect utilise l'attribut *UserPrincipalName* (bien qu'il soit possible d'en sélectionner un autre) comme nom de connexion utilisateur pour Entra Id.  
L'environnement de test du pilote de Adatum que vous utilisez a été créé par votre hébergeur d'ateliers et le nom de domaine de l'ADDS choisi est **adatum.com**. Les utilisateurs ADDS ont donc été créés dans ce domaine qui ne sera pourtant pas celui utilisé pour l'environnement Entra Id de Adatum (le nom DNS d'entreprise sera utilisé à la place).  
Dans cette tâche, vous allez vous faciliter la vie en utilisant Windows Powershell pour changer le suffixe UPN de votre environnement ADDS et l'UPN de tous les utilisateurs *on-premises*.  
1. Cette manipulation se réalise depuis la machine virtuelle **LON-DC1**.
1. Si vous l'aviez fermée, ouvrez l'outil **Windows PowerShell ISE** en administrteur.
1. Dans la fenêtre **Administrator: Windows PowerShell ISE**, utilisez la commande suivante pour remplacer le suffixe UPN de votre forêt ADDS :
	```Set-ADForest -identity adatum.com -UPNSuffixes @{replace = '[godeployDomain].godeploylabs.com'}```
1. Utilisez, pour terminer, la commande suivante pour modifier l'UPN de tous les utilisateurs du domaine ADDS :  
	```Get-ADUser -Filter * -Properties SamAccountName | ForEach-Object { Set-ADUser $_  -UserPrincipalName "$($_.SamAccountName.replace(' ','')@[godeployDomain].godeploylabs.com'"}```

## Résultat
Dans cet exercice, vous avez préparé votre environnement ADDS pour la mise en place de la synchronisation avec Entra Id.

Vous pouvez poursuivre par [l'exercice 2 - Synchronisation d'objets](lab3e2)