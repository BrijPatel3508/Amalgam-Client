import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IApiResponse } from '../interfaces/api-response.interface';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient,
    private socialAuthService: SocialAuthService) { }

  isUserLoggedIn = () => {
    return this.getTokenKey()?.length > 0;
  };

  async loginInWithGoogle() {
    //TODO not working because of angularx-social-login version will soon be deprecated
    const response = await this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    return response.response;
  }

  async login(username, password) {
    return await this.http.post<IApiResponse<IUser>>(environment.authApi + '/login', { username, password }).toPromise();
  }

  async signUp(user: IUser) {
    return await this.http.post<IApiResponse<IUser>>(environment.authApi + '/signup', { user }).toPromise();
  }

  refreshToken(token: string) {
    return this.http.post(environment.authApi + '/refreshtoken', {
      refreshToken: token
    });
  }

  setTokenKey(tokenKey: string) {
    localStorage.setItem("TOKEN_KEY", tokenKey);
  }

  removeTokenKey() {
    localStorage.removeItem("TOKEN_KEY");
  }

  getTokenKey() {
    return localStorage.getItem("TOKEN_KEY");
  }
}
