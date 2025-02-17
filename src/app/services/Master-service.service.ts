import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseModel } from '../model/interface/IPosition';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  constructor(private http : HttpClient) { }



  // Add Return Type // Get Method Return Observable
  getChoices(): Observable<ApiResponseModel>{

    return this.http.get<ApiResponseModel>(environment.API_URL + "GetChoices")

  }



}
