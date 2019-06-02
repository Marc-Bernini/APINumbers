import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  home = true; // To know on which page user is

  // Function to switch class depending on which page user is on
  userPage(page) {
    switch (page) {
      case 'home':
        this.home = true;
        break;

      case 'page2':
        this.home = false;
        break;
    }
  }

}
