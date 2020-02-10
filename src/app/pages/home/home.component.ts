import { Component, OnInit } from '@angular/core';
import { Router }  from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goCaseStudy(company) {
    this.router.navigate(['/pages/case-study'],{ queryParams: { case: company } }); 
  }

  goToAbt(){
    this.router.navigate(['/pages/about']); 
  }

}
