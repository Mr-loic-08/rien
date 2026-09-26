Correction compilation Angular:
- OnInit est désormais réellement importé depuis @angular/core dans app.ts.
- suppression de la référence invalide this.mobile dans HeaderComponent ; utilisation de l'état mobile existant si présent.
- navigation #/solutions conservée.
