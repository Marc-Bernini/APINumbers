import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetNumberAPIService {

  url = 'numbersapi'; // API's route

  constructor(private http: HttpClient) { }

  chooseDate(dateChoose) {
    return this.http.get(`${this.url}?number=${dateChoose}`); // Route to get data according to user's number
  }
}
