import {HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {AuthorizationService} from '../services/authorization.service';
import {inject} from '@angular/core';

export function tokenInterceptor(): HttpInterceptorFn {
  return (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const authorizationService: AuthorizationService = inject(AuthorizationService);

    req = req.clone({
      setHeaders: {
        ['Authorization']: `Bearer ${authorizationService.accessToken}`,
      }
    })

    return next(req);
  };
}
