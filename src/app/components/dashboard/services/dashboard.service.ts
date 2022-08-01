import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { IApiResponse } from 'src/app/interfaces/api-response.interface';
import { IApplication } from 'src/app/interfaces/applications.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  async getApplications() {
    return await this.httpClient.get<IApiResponse<IApplication[]>>(environment.applicationsAPI)
      .pipe(
        map(response => {
          return response.data
        })
      ).toPromise();
  }

  async getUsers() {
    return await this.httpClient.get<IApiResponse<IUser[]>>(environment.userAPI)
      .pipe(
        map(response => {
          return response.data
        })
      ).toPromise();
  }

  async deleteUser(slid: string) {
    return await this.httpClient.delete<IApiResponse<IUser>>(environment.userAPI + `/${slid}`)
      .pipe(
        map(response => {
          return response.data
        })
      ).toPromise();
  }
}
