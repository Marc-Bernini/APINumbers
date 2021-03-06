import { Component, OnInit } from '@angular/core';
import { GetNumberAPIService } from 'src/app/services/get-number-api.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  userResults: Array<object> = []; // Array to stock result

  userDates: Array<string> = []; // Array to stock date

  constructor(private getNumber: GetNumberAPIService) { }

  ngOnInit() {
    this.userResults = this.getNumber.resultTransfert; // Get result from homePage via GetNumberAPIService
    this.userDates = this.getNumber.dateTransfert; // Get date from homePage
  }

}
