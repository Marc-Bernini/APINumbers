import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetNumberAPIService {

  url = 'numbersapi'; // API's route

  resultTransfert: Array<object> = []; // Array to transfert results

  dateTransfert: Array<string> = []; // Array to transfert user's date choose

  constructor(private http: HttpClient) { }

  chooseDate(dateChoose): Observable<object> {
    return this.http.get(`${this.url}?number=${dateChoose}`); // Route to get data according to user's number
  }

  transfertResult(result, date) { // Method to transfert data in page2
    this.resultTransfert.push(result);
    this.dateTransfert.push(date);
  }
}
