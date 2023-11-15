---
layout: stage
title: "Démarrage propre d'un atelier mono-DC"
length: "3"
date: "15/11/2023"
---
Dans un environnement Active Directory (ADDS) ou un seul contrôleur de domaine (DC) est présent, il est fort probable que les machines virtuelles aient des problèmes d'accès aux fonctionnalités réseau.  
Ceci s'explique par la séquence de démarrage : un DC n'est pas seulement un serveur ADDS, c'est aussi en client ADDS. Lorsque le DC démarre, son client ADDS se lance alors que la partie serveur ADDS n'a pas fini de démarrer (ce ne sera pas le cas si l'environnement compte plusieurs DC du même domaine ADDS).  
## Vérification du démarrage du DC
Il est possible de constater si le DC n'a pas correctement démarré dans l'interface, comme en PowerShell.
1. Pour vérifier en PowerShell, lancer une invite *Windows PowerShell* en administrateur (en faisant, par exemple, un clic-droit sur le bouton Démarre de la barre des tâches et en choisissant **Windows Powershell (admin)** ou **Terminal (admin)**)
1. Dans l'invite PowerShell, utilisez la commande suivante :  
    ```(Get-NetConnectionProfile).NetworkCategory```  
    Si le résultat de la précente commande est **Public** ou **Private**, le DC n'a pas correctement démarré : passez à la [procédure de *nettoyage* du réseau du DC](#nettoyage-du-r%C3%A9seau-du-dc). Sinon (si le résultat de la commande est **DomainAuthenticated**), le reste de cette procédure ne vous servira pas pour ce démarrage.
1. Pour vérifier en interface graphique, dans une session administrative sur votre DC, lancez le gestionnaire de serveur (**Server Manager**).
1. Cliquez sur l'onglet **Local Server**
1. Dans la section **Properties**, notez la valeur de **Microsoft Defender Firewall**  
    Si le résultat affiché est **Public: On** ou **private: On**, le DC n'a pas correctement démarré : passez à la [procédure de *nettoyage* du réseau du DC](#nettoyage-du-r%C3%A9seau-du-dc). Sinon, le reste de cette procédure ne vous servira pas pour ce démarrage.

## Nettoyage du réseau du DC
Si le DC de votre domaine ADDS n'a pas correctement démarré, vous pouyvez *forcer* le redémarrage de son client ADDS une fois que le service serveur ADDS a démarré. Si vous êtes connecté localement sur le DC, le service serveur ADDS a correctement démarré.
1. Pour redémarrer la carte réseau du DC en PowerShell, lancer une invite *Windows PowerShell* en administrateur (en faisant, par exemple, un clic-droit sur le bouton Démarre de la barre des tâches et en choisissant **Windows Powershell (admin)** ou **Terminal (admin)**)
1. Dans l'invite PowerShell, utilisez la commande suivante :  
    ```Get-NetAdapter|restart-NetAdapter```
1. Une fois cette commande passée, votre DC devrait être *proprepment* démarré (vous pouvez le vérifier par la procédure précédente).
1. Pour redémarrer la carte réseau du DC en interface graphique, lancez le gestionnaire de serveur (**Server Manager**).
1. Dans la section **Properties**, cliquez sur l'adresse IP en face du nom de votre carte réseau (*Ethernet* par défaut).
1. Dans la fenêtre *Network Connections* qui s'affiche, sélectionnez la carte réseau.
1. Cliquez ensuite sur le bouton **Disable this network device**.
1. Resélectionnez la carte réseau.
1. Cliquez ensuite sur le bouton **Enable this network device**.
1. Après ces deux actions, votre DC devrait être *proprepment* démarré (vous pouvez le vérifier par la procédure précédente).

## (re)Démarrage des clients
Une fois le DC correctement démarré, il va vous falloir redémarrer toutes les autres machines virtuelles (afin qu'elles aient effectué leur démarrage dans un contexte ADDS propre et sécurisé).  
Comme pour les procédures précédentes, vous pouez réaliser celle-ci en PowerShell :  
1. lancer une invite *Windows PowerShell* en administrateur (en faisant, par exemple, un clic-droit sur le bouton Démarre de la barre des tâches et en choisissant **Windows Powershell (admin)** ou **Terminal (admin)**)
1. Dans l'invite PowerShell, utilisez la commande suivante :  
    ```Get-ADDomain|foreach-object {get-ADComputer -Filter * -searchBase $_.computersContainer|foreach-object {echo "Redémarrage de $($_.DNSHostName)"; Restart-Computer -ComputerName $_.DNSHostName -Force}}```
1. Une fois ces commandes passées, attendez que la machine sur laquelle vous souhaitez travailler ait redémarré...
1. Pour redémarrer les machines en passant par l'interface graphique, réalisez les opérations suivantes sur **chaque** machine virtuelle :
    1. Basculez sur la machine à redémarrer.
    1. Ouvrez une session administrative sur la machine virtuelle
    1. Faites un clic-droit sur le menu **Démarrer** et choisissez **Shutdown or sign out > Restart**
1. Il est fortement conseillé de commencer par la machine sur laquelle vous souhaitez ouvrir ensuite une session, la séquence de redémarrage des autres permettra ainsi de patienter pendant le redémarrage de la première...

## Astuce
Si vous voulez vous simplifier la vie, vous pouvez utiliser les quelques lignes de script suivantes pour réaliser l'ensemble des opérations proposées dans les procédures précédentes en une fois :  
```
Get-NetAdapter|restart-NetAdapter
while((Get-NetConnectionProfile).NetworkCategory -ne 'DomainAuthenticated') { Start-Sleep -Seconds 1 }
Get-ADDomain | Foreach-object {
    get-ADComputer -Filter * -searchBase $_.computersContainer | foreach-object {
        write-host "Redemarrage de $($_.DNSHostName)"
        Restart-Computer -ComputerName $_.DNSHostName -Force}}
        
```