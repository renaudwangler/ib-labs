---
layout: stage
title: "Lab5-Ex2 - Déploiement de Microsoft 365 apps via MDM"
length: "00"
---
# Scénario
Vous avez pris l'identité de Dominique Skyetson, Administrateur de l'entreprise Adatum, et vous avez commencé à déployer Microsoft 365 dans un environnement virtuel pilote. Dans cet exercice, vous allez réaliser les tâches nécessaires à l'installation de Microsoft 365 Apps en utilisant le MDM.  
Depuis la version 1709 de Windows 10, vous pouvez utiliser un paramètre GPO pour déclancher l'enregistrement automatique des postes du domaine dans un MDM.  
L'intégration dans Intune est déclenchée par une GPO créée par l'administrateur de l'AD local et survient sans interaction utilisateur. Ce qui signifie que vous pouvez intégrer massivement un gran nombre de périphériques du domaine dans Intune. Le processus d'intégration démarre en tâche de fond une fois connecté au périphérique avec un compte Entra Id.  
Dans la première tâche, Dominique ajoute Microsoft 365 apps comme application gérée par Intune.
Dans les tâches 2 et 3 de cet exercice, Dominique étend l'hybridation entre Entra Id et ADDS pour enregistrer les périphériques dans la gestion cloud (MDM et MAM).  
Dans la tâche finale, vous allez vérifier l'installation automatisée et centralisée de 365 apps for enterprise.

# Objectifs
A la fin de cet exercice, vous aurez une meilleure connaissance de :
- L'*auto-enrolment* dans Intune
- L'installation automatique de la suite Office par le MDM Intune.


## Tâche 1 - Ajout de 365 apps dans Intune
Dominique souhaite désormais ajouter Microsoft 365 apps automatiquement aux périphériques qu'ils gère. Pour gérer les périphériques en utilisant Microsoft 365, adatum a acquis des abonnements Enterprise Mobility + Security E5 (EMS E5). Dans cette tâche, Dominique va affecter une de ces licences à un utilisateur. Ensuite, il ajoutera Mircosoft 365 apps aux périphériques gérés et en vérifie l'installation.
1. Basculez vers la VM cliente **LON-CL1** sur laquelle vous devriez être connecté avec le compte **Adatum\Administrator** et le mot de passe **Pa55w.rd**. Vous devriez encore être connecté sur votre navigateur Internet avec le compte de Dominique sur le portail **Microsoft 365 admin center**.
1. Dans le menu de navigation du portail **Microsoft 365 admin center**, cliquez sur **Show all...** si nécessaire pour pouvoir cliquer sur **Endpoint Manager**.
1. Dans le portail **Microsoft Intune admin center**, dans le menu de navigation de gauche, sélectionnez **Apps**.
1. Dans la fenêtre **Apps - Overview**, cliquez sur **All apps**.
1. Dans la fenêtre **Apps - All apps**, cliquez sur le bouton **+ Add**.
1. Dans le panneau **Select app type**, sous **App type**, cliquez sur le menu déroulant. Sous **Microsoft 365 Apps**, sélectionnez **Windows 10 and later** avant de cliquer sur **Select**.
1. Dans la page **App suite information**, conservez les valeurs par défaut et cliquez sur **Next**.
1. Dans l'onglet **Configure app suite**, sélectionnez **Office Open Document Format** pour le champ **Default file format**.
1. En face de **Select Office apps**, cliquez sur le panneau déroulant. Confirmez que toutes les applications, sauf **Skype for business** sont sélectionnez. Cliquez de nouveau sur l'en-tête de menu pour le fermer.
1. En face de **Select other Office apps (license required)**, cliquez sur le panneau déroulant. Sélectionnez **Project Online Desktop client** et **Visio Online Plan 2**.Cliquez de nouveau sur l'en-tête de menu pour le fermer.
1. En face de **Update channel**, sélectionnez **Semi-Annual Enterprise Channel**.
1. En face de **Accept the Microsoft Software License Terms on behalf of users**, sélectionnez **Yes**.
1. Cliquez sur **Next**.
1. Sur l'onglet **Assignments**, sous **Required**, cliquez sur le lien **+ Add all users** avant de cliquer sur **Next**.
1. Sur l'onglet **Review + create**, cliquez sur le bouton **Create**.

## Tâche 2 - Prérequis d'auto-enrollment
Pour que l'*auto-enrollment* fonctionne comme prévu, vous devez vérifierque que le paramètrage en a été fait correctment. Les étapes suivantes montrent les principaux prérequis dans l'utilisation d'Intune :  
1. Sutie à la tâche précédente, vous devriez encore être connecté sur le portail **Microsoft Intune admin center** avec le compte de Dominique.
1. Dans le menu de navigation à gauche du portail **Microsoft Intune admin center**, cliquez sur **Devices**.
1. Dans la section **Devices**, sous **Device enrollment**, cliquez sur **Enroll devices**.
1. Dans la page **Enroll devices**, sélectionnez la tuile **Automatic Enrollment**.
1. Dans la page **Configure**, en regard de **MDM user scope**, sélectionnez **All**. En regard de **MAM user cope**, sélectionnez **All**.
1. Cliquez sur **Save**.

## Tâche 3 - GPO locale pour *auto-enrollment*
Dominique souhaite désormais vérifier comment fonctionne la stratégie d'*auto-enrollment*. En production, vous feriez la même manipulation sur les strétgies de groupe (GPO) de l'ADDS. Mais ici, pour son test, Dominique va utiliser la GPO locale de la machine **LON-CL1**
1. Vous devriez être encore connecté sur **LON-CL1** avec le compte **Adatum\Administrator**. 
1. cliquez dans la barre de recherche à droite du bouton démarrer sur la barre des tâches et tapez ```gpedit```.
1. Dans la section **Best match** du menu **Démarrer**, cliquez sur **Edit group policy**.
1. Dans l'outil qui s'ouvre, ouvrez séquentiellement les sections **Computer Configuration** > **Administrative Templates** > **Windows Components** > **MDM**.
1. Double-cliquez ensuite, dans le panneau de détails à droite, sur **Enable automatic MDM enrollment using default Azure AD credentials**. 
1. Dans le panneau **Enable automatic MDM enrollment using default Azure AD credentials**, cliquez sur **Enabled**.
1. Dans le menu **Select Credential Type to Use**, choisissez **User Credential**.
1. Cliquez sur **OK**
1. Fermez l'outil **Local Group Policy Editor** et redémarrez LON-CL1.

## Tâche 4 - Vérification du déploiement par MDM
Dans cette tâche, Beth Burke va vérifier que l'ordinateur est enrôlé pour le MDM et que Microsoft 365 apps est installée.
>**Note :** Il peut facilement se passer plus de 5 minutes avant que l'enrôlement du poste ne soit effectif.
1. Connectez-vous à  **LON-CL1** en cliquant sur **Other user** pour utiliser le compte **Beth@labxxxxx.godeploylabs.com** avec le mot de passe **Pa55w.rd**.
   >**Note :** Si le mot de passe de Beth n'est pas correct, vous pouvez le réinitialiser :
   1. Basculez sur **LON-DC1**
   1. Dans l'outil **Server Manager**, utilisez le menu **Tools** en haut à droite pour lancer l'**Active Directory Administrative Center**.
   1. Dans a page **Pverview** de l'**Active Directory Administrative Center**, tapez ```adatum\beth``` dans le champ **User name** de la tuile **RESET PASSWORD**.
   1. Tapez ```Pa55W.rd``` dans les champs **Password** et **Confirm password**.
   1. Décochez la case **User must change password at next log on**.
   1. Cliquez sur **Apply**.
   1. Fermez l'**Active Directory Administrative Center** et rebasculez sur **LON-CL1** pour vous connecter avec le compte de Beth.
1. Cliquez sur le bouton **Démarrer** à gauche de la barre des tâches et cliquez sur **Settings**.
1. Cliquez sur la section **Accounts** et choisissez l'onglet **Access work or school**.
1. Sélectionnez le compte de domaine de Beth's.
1. Cliquez sur **Info** pour voir les informations d'enrôlement MDM (redémarre **LON-CL1** pourra accélérer la manoeuvre).
1. Patientez quelques minutes, pour vérifier que la suite Microsoft 365 apps a été installée sur LON-CL1.
1. Fermez la session de Beth sur LON-CL1

## Résultat
Dans cet exercice, vous avez constaté l'*auto-enrolment* d'un poste dans Intune et l'installation automatique de la suite Office sur celui-ci.

# Fin de l'atelier 5