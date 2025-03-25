# Ateliers

- Scénario 1 : Migration d’un serveur ESXi autonome
    - Atelier 1 : Vérification de l’existant
        
        
        1. Connectez vous au Host-Client de votre serveur ESXi :
            1. Ouvrez **Firefox** (Il y a un raccourcis dans la barre des tâches de votre machine « Student »)
            2. Dans la barre personnelle de Firefox, ouvrez le dossier « **Scénario 1**» et choisissez « **ESXi-01** »
            3. Identifiez vous en tant que “**root”**
                
                ![image.png](image.png)
                
        2. Vérifiez la connectivité réseau de vos 2 VMs vers leur passerelle respective (ping) en vous connectant en console sur chacune de ses VMs :
            1. Prod-01 :
                - Utilisateur : localadmin
                - Adresse de passerelle : 172.20.11.254
                    
                    ![image.png](image%201.png)
                    
            2. Test-01 :
                - Utilisateur : localadmin
                - Adresse de passerelle : 172.20.111.254
                    
                    ![image.png](image%202.png)
                    
        
        1. Vérifier la non-connectivité entre ces deux VMs :
            - Pour récupérer l’adresse IP :
                - Windows : ipconfig
                - Ubuntu : ip a
                Notez au passage le nom de l’interface réseau : **ens160**
                Ce nom d’interface risque de changer après la migration de la VM. Il faudra certainement adapter la configuration réseau de la machine
            
            ![image.png](image%203.png)