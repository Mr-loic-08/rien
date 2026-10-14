import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .then(() => { document.getElementById('itech-startup')?.remove(); })
  .catch((err) => {
    console.error(err);
    const title = document.getElementById('itech-startup-title');
    if (title) title.textContent = 'Erreur technique — Technical error';
    const desc = document.getElementById('itech-startup-description');
    if (desc) desc.textContent = 'Impossible de démarrer le site. Vérifiez votre connexion et réessayez.';
    document.getElementById('itech-startup-retry')?.removeAttribute('hidden');
  });
