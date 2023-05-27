import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  shouldShowSideMenu(): boolean {
    // Check if the current route is landing-page or auth
    const currentRoute = this.activatedRoute?.snapshot?.firstChild?.routeConfig?.path;
    return currentRoute !== 'landing-page' && currentRoute !== 'auth' && currentRoute !== 'login';
  }
  
  
  title = 'SRP';
}
