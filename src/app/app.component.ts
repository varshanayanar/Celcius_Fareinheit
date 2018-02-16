import { Component } from '@angular/core';
import {  MyRemoteService } from './app.myremoteservice';

@Component({
    selector: 'app-root',
    template:
      `<h1>This is the header</h1>
    <nav>
    <a routerLink="/home" routerLinkActive="active">Home</a> |
    <a routerLink="/feedback" routerLinkActive="active">Feedback</a>
    </nav>
    <!-- Where router should display a view -->
    <router-outlet></router-outlet>`,
    // Providers allow us to inject an object instance through the constructor.
  providers: [MyRemoteService]
})
export class AppComponent {


    convertToC() {

    }




}
