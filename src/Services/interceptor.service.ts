import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, switchMap, filter, take } from 'rxjs/operators';
import { DataStoreService } from './data-store.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private authService: DataStoreService, @Inject(PLATFORM_ID) private platformId: Object) {}

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;

    if (this.isBrowser()) { // Only access localStorage in the browser environment
    
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
          authReq = req.clone({
            setHeaders: {
              Authorization: `bearer ${accessToken}`
            }
          });
        }
    }

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && !authReq.url.includes('/refresh')) {
          return this.handle401Error(authReq, next);
        }
        return throwError(error);
      })
    );
  }

  

  private handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isBrowser()) {
      console.warn('401 handling skipped in SSR environment.');
      return throwError(() => new Error('Token refresh not supported in SSR environment.'));
    }
  
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
  
      return this.authService.refreshToken().pipe(
        switchMap((token: string) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token);
          localStorage.setItem('accessToken', token);
  
          return next.handle(req.clone({
            setHeaders: { Authorization: `bearer ${token}` }
          }));
        }),
        catchError((err) => {
          const refreshToken = localStorage.getItem('refreshToken');
          this.isRefreshing = false;
          this.authService.logout(refreshToken);
          return throwError(err);
        })
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(token => next.handle(req.clone({
          setHeaders: { Authorization: `bearer ${token}` }
        })))
      );
    }
  }
  
}
