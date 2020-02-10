import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements OnInit {

  public mediumLink: string;
  mapping = {
    swiggy: 'https://medium.com/@arpitranjan/case-study-swiggy-822f83606ee5',
    airbnb: 'https://medium.com/@arpitranjan/airbnb-case-study-522223e83046',
    thieve: 'https://medium.com/@arpitranjan/thieve-co-case-study-44e4abd5535c',
    dropbox: 'https://medium.com/@arpitranjan/dropbox-case-study-evolution-and-user-development-19905a51d3aa',
    foresquare:'https://medium.com/@arpitranjan/foursquare-case-study-theme-epic-user-story-and-task-a449f3db3cfa',
    circa:'https://medium.com/@arpitranjan/circa-news-case-study-object-oriented-modelling-89cda0e48210',
    vedantu:'https://medium.com/@urvashi.21north/angular-8-series-part-1-angular-8-introduction-90d4e72ff6e5',
    story_01: 'https://medium.com/@arpitranjan/a-fish-sellers-story-how-pricing-strategy-affect-product-positioning-7314e4ff867b',
    story_02: 'https://medium.com/@arpitranjan/how-ramesh-sold-burgers-to-make-enormous-profits-using-value-based-pricing-70d3dafde5ae'
  }

  constructor(private route: ActivatedRoute,public sanitizer: DomSanitizer) { 
    this.mediumLink = null;
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      console.log(Object.keys(params['params'])[0],);
      if(Object.keys(params['params'])[0] === 'case'){
        this.mediumLink = this.mapping[params['params']['case']];
      }
      if(Object.keys(params['params'])[0] === 'story'){
        this.mediumLink = this.mapping[params['params']['story']];
      }
    });
 
   }
   
}

