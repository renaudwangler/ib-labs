---
layout: home
title: 'Ateliers ib'
---
# Ateliers de stages *ib Cegos*
Vous trouverez ici les descriptifs d'ateliers pour des formations animées par [ib Cegos](https://www.ib-formation.fr)

{% for lab in site.pages %}
  {% if lab.synopsis %}
## - [{{lab.title}}]({{site.github.url}}{{lab.url}})  
> {{lab.synopsis}}  
  {% endif %}
{% endfor %}

___
# Conseils génériques

{% for lab in site.pages %}
  {% if lab.genericSynopsis %}
## - [{{lab.title}}]({{site.github.url}}{{lab.url}})  
> {{lab.genericSynopsis}}  
  {% endif %}
{% endfor %}
