import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../models/idp/login';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  let loginResponse: LoginResponse = new LoginResponse();
  const loginResponseStr = localStorage.getItem('currentUser') ?? '';

  if (loginResponseStr) {
    loginResponse = JSON.parse(loginResponseStr);
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + loginResponse.tokenInfo.accessToken
      }
    });
  }

  // request = request.clone({
  //   setHeaders: {
  //     'x-api-key': environment.xAPIKey,
  //     'x-partner-key': environment.partner.partnerCode,
  //     'UserTimeZone': 'India Standard Time',
  //     'latitude': '',
  //     'longitude': ''
  //   }
  // });

  return next(request);
};