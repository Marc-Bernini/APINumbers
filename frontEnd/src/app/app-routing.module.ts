import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { Page2Component } from './components/page2/page2.component';

const routes: Routes = [
  {
    path: 'homePage', component: HomePageComponent
  },
  {
    path: '', redirectTo: 'homePage', pathMatch: 'full'
  },
  {
    path: 'page2', component: Page2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
