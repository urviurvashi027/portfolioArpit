import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { PagesRoutingModule } from './pages-routing';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { ResumeComponent } from '../pages/resume/resume.component';
import { AboutComponent } from '../pages/about/about.component';
import { BlogComponent } from '../pages/blog/blog.component';
import { SelectWorkComponent } from '../pages/select-work/select-work.component';
import { PagesComponent } from '../pages/pages.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CaseStudyComponent } from './case-study/case-study.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EmailComponent } from './modal/email/email.component';
import { SidebarModule } from 'ng-sidebar';
// import { UrlPipe } from '../../pipe/';


@NgModule({
  declarations: [HomeComponent, 
    // UrlPipe,
    FooterComponent,
    LayoutComponent,
    PagesComponent,
    HeaderComponent,
    ResumeComponent,
    AboutComponent,
    BlogComponent,
    SelectWorkComponent,
    CaseStudyComponent,
    EmailComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ModalModule.forRoot(),
    SidebarModule.forRoot(),
    BsDropdownModule.forRoot()
  ]
})
export class PagesModule { }
