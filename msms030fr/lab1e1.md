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

## Tâche 2: 
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