import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `<div style="overflow-x: hidden;">
  <app-header></app-header>
  <div class="pagesWrapper">
      <div>
          <router-outlet></router-outlet>
      </div>
  </div>
  <app-footer></app-footer>
  </div>
`,
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  title = 'portfolio';
}
