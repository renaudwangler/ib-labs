---
layout: home
title: 'Ateliers ib'
---
# Ateliers de stages *ib Cegos*
Vous trouverez ici les descriptifs d'ateliers pour des formations animées par [ib Cegos](https://www.ib-formation.fr)
## MSMS030 - [Administration de Microsoft 365](msms030fr)
> Ateliers en Français et tenus à jour de la formation ib msms030

## [Mise en oeuvre Azure File Sync](azureFileSync)  
> Tester la synchronisation de fichiers entre un serveur SMB Windows Server "classique" et un partage de fichiers "Azure File Share".  

## [Intégration de serveur avec ARC](AzureResourceControl)  
> Utilisation de l'*Azure Resource Control* pour gérer une machine Windows depuis l'environnement Azure.  
(L'accès aux resources Azure depuis la machine Windows se fera nativement gràce à une *Managed Identity*)  

## [Key Vault et Identité gérée](managedId)  
> Permettre à une VM d'accèder au mot de passe d'un partage dans un *Key Vault*. La VM n'aura pas besoin de s'authentifier car vous utiliserez une *System Assigned Managed Identity*.  

## [Mise en place de la MFA avec une application Windows](alternateMFA)
> utiliser une application installée sur un poste Windows 10/11 pour réaliser l'authentification multifactorielle (MFA) d'un utilisateur m365 ou Entra Id.  

## [Mise en place d'un test Windows AutoPilot](autopilot)  
> Tester de manière la plus simple et rapide possible la fonctionnalité Windows Autopilot Afin de constater la jonction et la customisation automatique d'un poste Windows 10/11 dans un tenant Microsoft 365  

## [Mise en place d'un compte de test Microsoft 365](test365)
> Création d'un compte développeur chez Microsoft et mise en place d'un environnement de test complet Microsoft 365.

___
# Conseils génériques
## - [Démarrage propre d'un atelier mono-DC](dcNetStart)
> Correction  des problèmes de démarrage des VMs dans un environnement Active Directory (ADDS) ou un seul contrôleur de domaine (DC) est présent.  

## - [Mise en place environnement Azure](ibAzureLabs)  
> Comment mettre en place quelques ressources dans un compte Azure. Ces procédures pourront, par exemple, être utilisées en début d'une formation pour simplifier le déroulement d'ateliers basés sur un compte Azure par la suite...  

<table>
{% for lab in site.pages  %}
<tr id="line-{{ lab.name | remove: '.md' }}"><td><a href="{{ site.github.url }}{{ lab.url }}">{{ lab.name | remove: '.md' }}</a></td><td><a href="{{ site.github.url }}{{ lab.url }}">{{ lab.title }}</a></td></tr>
{% endfor %}
</table>