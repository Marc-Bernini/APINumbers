import { Component, OnInit } from '@angular/core';
import { GetNumberAPIService } from '../services/get-number-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  results = []; // List of user's result
  date: number; // Number choose by user

  constructor(private getNumber: GetNumberAPIService) { }

  ngOnInit() {
    }

  onSubmit() {
    this.getNumber.chooseDate(this.date)
    .subscribe(data => {
      const answer = data;
      this.results.push(answer); // Push results in result's list

      return this.results;
    });
  }
}
