import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'amcardle.dev';
  display_content = 1;

  constructor() {}

  routerNavClass() {}

}
