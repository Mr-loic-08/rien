Correction appliquée sur le ZIP fourni par l'utilisateur.
La vidéo de fond du footer est maintenant verrouillée sans son à trois niveaux :
- attribut HTML muted
- binding Angular [muted]="true" et [volume]="0"
- verrouillage DOM muted=true, volume=0, defaultMuted=true après initialisation
Aucun autre bloc n'a été modifié.
