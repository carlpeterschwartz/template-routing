import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  pages = [
    {
      title: 'About',
      url: '/about'
    },
    {
      title: 'Contact',
      url: '/contact'
    },
    {
      title: 'Settings',
      url: '/settings'
    }
  ];

  constructor() {}
}
