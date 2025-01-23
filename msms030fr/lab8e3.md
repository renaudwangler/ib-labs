---
layout: stage
title: "Lab8-Ex3 - Partage externe dans Sharepoint Online"
length: "00"
date: "17/05/2024"
script: "msms030.js"
---
# Scénario
Dans les deux précédents exercices, Dominique Skyetson a configuré les services et les sites *SharePoint Online*. Il est donc désormais prêt à gérer le partage externe dans Sharepoint Online, dans le contexte d'ouverture d'Adatum vers Microsoft 365.  
Les fonctionnalités de partage externe de Sharepoint Online permet aux utilisateurs d'une entreprise de partager du contenu avec des utilisateurs externes à l'entreprise (comme des partenaires, vendeurs ou des clients). Le partage externe peut également être utilisé pour faciliter le travail de collaborateurs dont les comptes sont situés dans des *tenant Entra Id* distinct, si votre organisation en regroupe plusieurs.  
Sharepoint propose un paramétrage du partage externe au niveau de la globalité de l'entreprise et au niveau de chaque site. Pour permettre le partage sur un site de Adatum, Dominique doit d'abord l'autoriser au niveau de l'entreprise. Il pourra ensuite restreindre le partage externe site par site. Si les paramètres de partage externe d'un site et ceux de l'entreprise ne sont pas identique, ce sera le niveau le plus restrictif qui sera appliqué.  
Même si le niveau global de l'entreprise autorise le partage externe, touts les nouveaux sites ne l'autoriseront pas par défaut. Le niveau de partage par défaut pour les sites correspondant aux équipes *Teams* et autres groupes Microsoft 365 est "*New and existing guests*". Le niveau de partage par défaut pour les sites Sharepoint de communication classiques est "*Only people in your organization*".  
Dans cet exercice, Dominique va autoriser le partage externe au niveau de l'organisation et pour un site spécifique. Il vérifiera ensuite qu'il peut partager un document comme un site avec des utilisateurs externes.

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- L'activation du partage externe
- La fonctionnalité de partage externe
- La consommation du partage externe par un utilisateur non membre de l'entreprise

## Tâche 1 - Configurer le paramètre de partage global de Sharepoint
Dans cette tâche, Dominique va autoriser le partage externe sur la globalité de l'entreprise.
1. Basculez vers la machine virtuelle **LON-CL1** ou votre session devrait déjà ouverte, avec le compte **ADATUM\Administrator** et le mot de passe **Pa55w.rd**.
1. Les portails **Microsoft 365 admin center** et **Sharepoint admin center** devraient encore être resté ouverts dans votre navigateur Internet (et vous devriez y être connecté avec le compte de *Dominique Skyetson*).
1. Dans le menu de navigation du portail **SharePoint admin center**, sélectionnez **Sharing** dans le groupe d'options **Policies**.
1. Sur la page **Sharing**, cliquez sur la section **More external sharing settings** pour l'ouvrir et vérifiez que la case **Allow only users in specific security groups to share externally** est décochée. Si elle était cochée, décochez-la avant de cliquer sur le bouton **Save** en bas de page.
1. Conservez votre navigateur Internet ouvert pour la tâche suivante.

## Tâche 2- Configurer un site pour le partage externe
Dans l'exercice précédent, vous avez créé un site pour le service formation d'Adatum. Dans cette tâche, vous allez configurer la possibilité de configurer le partage externe sur ce site.
1. Dans le menu de navigation du portail **SharePoint admin center**, cliquez sur **Active sites** dans le groupe d'options **Sites**.
1. Sur la liste des sites Sharepoint, cliquez sur le nom du site **Training** (pas sur son adresse *../sites/TRaining*).
1. Sur le panneau **Training** qui apparaît à droite de l'écran, cliquez sur l'onglet **Settings**.
1. Sur l'onglet **Settings**, l'option **Anyone** devrait être sélectionnée par défaut pour le champ **External file sharing**. Si ce n'est pas le cas, changez-la avant de sauvegarder (avec le bouton *Save*) ce changement.
1. Fermez ensuite le panneau **Training**.
1. Dans la liste des sites Sharepoint, cliquez désormais sur l'adresse **../sites/training** du site du service formation.
1. Un nouvel onglet s'ouvre, affichant le contenu du site **Training**. En haut de ce nouvel onglet (sous le bandeau *Sharepoint*), cliquez sur **Site access**.
1. dans le panneau **Site access** qui s'affiche, vous pouvez afficher les propriétaires, membres et visiteurs du site. En ouvrant la section **Site visitors - no control**, vous devriez pouvoir vérifier la présence de **Elvis Cress** et **Libby Hayward**.
1. Dans le champ situé au-dessus de ces groupes (sous la mention **Add users, Microsoft 365 groups or \[...]**), entrez une adresse email personnelle (qui n'a pas besoin d'être un compte Microsoft 365). Votre adresse email apparaît ensuite sous le champ en question, vous pouvez cliquer dessus.  
	Votre adresse personnelle apparaît désormais sous le champ, accompagnée d'un message indiquant que cette adresse est en dehors de l'entreprise Adatum.
1. Dans le champ **Add a message**, saisissez le message suivant : ```Comme convenu, vous pouvez désormais accéder au site Formation de Adatum.```.
1. Cliquez ensuite sur le bouton **Share**.
1. Dans la barre de menu de la page **training**, cliquez sur **Documents**.
1. Dans la barre de menu de la page **Documents** qui s'affiche, cliquez sur **+ New** pour choisir **Word document**.
1. **Word Online** s'ouvre dans un nouvel onglet de votre navigateur Internet. Si une boite de dialogue **Your privacy option** s'affiche, cliquez sur **Close**.
1. Dans le document vierge *Word*, tapez quelques mots de test et attendez que le document soit automatiquement sauvegardé (vous pouvez le surveiller en attendant l'icône de nuage marqué d'une coche de validation à droite du nom du **Document**). Cliquez l'icône de nuage à droite du nom du **Document**.
1. Dans le panneau qui s'affiche, dans le champ **Location**, cliquez sur le lien **Shared Documents**.
1. Un nouvel onglet s'ouvre dans votre navigateur, affichant de nouveau la page des **Documents** du site **training**. Le document que vous venez de créer (Nommé par défaut *Document.docx*) devrait apparaître dans la liste des documents.
1. Sélectionnez donc le bouton **Share this item with other people** qui s'affiche à droite du nom de votre document lorsque vous passez la souris dessus.
1. Dans la boite de dialogue **Share "Document.docx"** qui s'affiche, entrez l'adresse de messagerie personnelle que vous avez déjà utilisée au point précédent dans le champ **Add a name, group or email** et saisissez ```Voici le document que nous avions convenu de vous partager. Il vous est possible de l'éditer.``` dans le champ **Add a message**.
1. Cliquez sur le bouton **Send**.
1. Fermez la boite de dialogue **Link shared with you** qui s'affiche.
1. Conservez votre navigateur Internet ouvert, mais fermez-y tous les onglets sauf le premier (le portail **Microsoft 365 admin center**) pour le prochain atelier. 

## Tâche 3 - Vérification du partage externe
1. Ouvrez la boite aux lettres personnelle que vous avez utilisée dans la tâche précédente.
1. Votre boite de réception devrait contenir deux messages d'invitation. Si vous ne les y trouvez pas, vérifiez votre dossier de courrier indésirable.
1. Ouvrez le message qui a pour sujet : **Dominique Skyetson wants to share Training**.
1. Cliquez sur le lien **Training** dans le message.
1. Connectez-vous avec les indications qui vous sont fournies (qui vont différer selon que vous ayiez un compte *Entra Id*, un compte personnel Microsoft ou ni l'un ni l'autre) et vérifiez que vous pouvez accéder au site **Training**
1. Fermez le site **Training** et retournez dans votre boite aux lettres personnelle pour ouvrir le second message qui devrait avoir pour sujet **Dominique Skyetson shared "Document" with you**.
1. Une fois le second message ouvert, vous pouvez cliquer sur le bouton **Open**
	>**Note :** Vous êtes automatiquement redirigé vers Word Online ou s'ouvre le document que vous avez créé tout à l'heure.
1. Vérifiez que vous pouvez modifier le contenu du document, en surveillant la marque de sauvegarde à droite de son nom après avoir fait quelques modifications dedans.

## Résultat
A l'issue de cet exercice, vous avez configuré un nouveau site Sharepoint Online pour le partager avec des utilisateurs externes et testé cette fonctionnalité.

# Fin de l'atelier 8