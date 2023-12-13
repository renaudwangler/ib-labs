---
layout: home
title: 'Ateliers ib'
---
# Ateliers de stages *ib Cegos*
Vous trouverez ici les descriptifs d'ateliers pour des formations animées par [ib Cegos](https://www.ib-formation.fr)
## MSMS030 - [Administration de Microsoft 365](msms030fr)
> Ateliers en Français et tenus à jour de la formation ib msms030

## [Key Vault et Identité gérée](managedId)  
> Permettre à une VM d'accèder au mot de passe d'un partage dans un *Key Vault*. La VM n'aura pas besoin de s'authentifier car vous utiliserez une *System Assigned Managed Identity*.  

## [Mise en place d'un compte de test Microsoft 365](test365)
> Création d'un compte développeur chez Microsoft et mise en place d'un environnement de test complet Microsoft 365.

___
# Conseils génériques
## - [Démarrage propre d'un atelier mono-DC](dcNetStart)
> Correction  des problèmes de démarrage des VMs dans un environnement Active Directory (ADDS) ou un seul contrôleur de domaine (DC) est présent.  

## - [Mise en place environnement Azure](ibAzureLabs)  
> Comment mettre en place quelques ressources dans un compte Azure. Ces procédures pourront, par exemple, être utilisées en début d'une formation pour simplifier le déroulement d'ateliers basés sur un compte Azure par la suite...  

{% for lab in site.pages %}
  {% if lab.synopsis %}
## - [{{lab.title}}]({{site.github.url}} {{lab.url}})  
> {{lab.synopsis}}
  {% endif %}
{% endfor %}
