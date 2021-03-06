import { Component, OnInit } from '@angular/core';
import { GetNumberAPIService } from '../../services/get-number-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  results: Array<object> = []; // List of user's result

  date: string; // Number choose by user

  dateChooses: Array<string> = []; // List of user's date

  response: boolean; // To disable button during API request

  constructor(private getNumber: GetNumberAPIService) { }

  onSubmit() {
    this.response = true; // Disable button

    const userDate = this.date.split(','); // Split user's answer to transform it in array

    for (let i = 0 ; i < userDate.length ; i ++) { // Make a loop to get all API response in one submit

      this.getNumber.chooseDate(userDate[i]) // Call service's method
      .subscribe(data => { // Subscribe to the API call

        const answer = data;
        this.dateChooses.push(userDate[i]); // Push user's date in an array to display it on template
        this.results.push(answer); // Push results in result's list

        this.getNumber.transfertResult(answer, userDate[i]); // Call service to push result and transfert it to page 2

        this.response = false; // Enable button after API call
      });
    }

    this.date = ''; // Initialize input after submit
  }
}
