import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class BlogComponent implements OnInit {

  public stories = [{
    imageUrl:'../../../assets/images/pricing_1.jpg',
    name:'story_1',
    link:'https://medium.com/@arpitranjan/how-ramesh-sold-burgers-to-make-enormous-profits-using-value-based-pricing-70d3dafde5ae',
    category:'Pricing',
    title:'A fish seller’s story. How pricing strategy affect product positioning',
  },
  {
    imageUrl:'../../../assets/images/pricing_2.jpg',
    name:'story_2',
    link:'https://medium.com/@arpitranjan/how-ramesh-sold-burgers-to-make-enormous-profits-using-value-based-pricing-70d3dafde5ae',
    category:'Pricing',
    title:'How Ramesh sold burgers to make profits using value-based pricing'
  }]

  public categoryList = ['All','Pricing','Innovation','SDLC','Competitive & Market Analysis','User Development','Modeling a solution','KPIs and Metrics',
                          'Data Science','Minimum Viable Product','User Experience','Agile Product Management','Product Release','People Management',
                        'Technology']

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelectCategory(ev){
    console.log(ev)
  }

  goCaseStudy(company) {
    this.router.navigate(['/pages/story-detail'],{ queryParams: { story: company } }); 
  }

}
