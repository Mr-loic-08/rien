import { ErrorHandler } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { SiteErrorHandler, siteHttpErrorInterceptor } from './shared/site-state/site-state.service';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: ErrorHandler, useClass: SiteErrorHandler },
    provideHttpClient(withInterceptors([siteHttpErrorInterceptor])),
    provideRouter(routes)
  ]
};
