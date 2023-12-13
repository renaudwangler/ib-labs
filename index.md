---
layout: home
title: 'Ateliers ib'
---
# Ateliers de stages *ib Cegos*
Vous trouverez ici les descriptifs d'ateliers pour des formations animées par [ib Cegos](https://www.ib-formation.fr)

{% for lab in site.pages %}
  {% if lab.synopsis %}
## - [{{lab.title}}]({{site.github.url}} {{lab.url}})  
> {{lab.synopsis}}
  {% endif %}
{% endfor %}
___
# Conseils génériques
## - [Démarrage propre d'un atelier mono-DC](dcNetStart)
> Correction  des problèmes de démarrage des VMs dans un environnement Active Directory (ADDS) ou un seul contrôleur de domaine (DC) est présent.  

## - [Mise en place environnement Azure](ibAzureLabs)  
> Comment mettre en place quelques ressources dans un compte Azure. Ces procédures pourront, par exemple, être utilisées en début d'une formation pour simplifier le déroulement d'ateliers basés sur un compte Azure par la suite...  

