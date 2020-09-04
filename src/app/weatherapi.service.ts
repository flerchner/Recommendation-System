import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {
  apiURL = 'api.openweathermap.org/data/2.5/weather?id=70806&appid=3770eec4f553ea1432f25fc0f993be1d';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getTemp() {
    return this.http.get(`${this.apiURL}`);
  }
}
