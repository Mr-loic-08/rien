import { Injectable, ErrorHandler, inject } from '@angular/core';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';

export type SiteError = '500' | '503' | null;
@Injectable({providedIn: 'root'})
export class SiteStateService {
  error: SiteError = null;
  private listeners = new Set<() => void>();
  subscribe(fn: () => void) { this.listeners.add(fn); return () => this.listeners.delete(fn); }
  setError(error: SiteError) { this.error = error; this.listeners.forEach(fn => fn()); }
}
@Injectable()
export class SiteErrorHandler implements ErrorHandler {
  private state = inject(SiteStateService);
  handleError(error: unknown): void {
    console.error('I-TECH : erreur applicative', error);
    this.state.setError('500');
  }
}
// Only genuine HttpClient responses produce HTTP status error screens.
// Do not infer a 500/503 from a failed image, video, or offline state.
export const siteHttpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const state = inject(SiteStateService);
  return next(req).pipe(
    // No RxJS catchError needed: preserve errors and all existing request behavior.
    // Error statuses are observed via tap.
    tap({ error: (err: unknown) => {
      if (err instanceof HttpErrorResponse && navigator.onLine) {
        if (err.status === 503) state.setError('503');
        else if (err.status === 500) state.setError('500');
      }
    } })
  );
};
import { tap } from 'rxjs/operators';
