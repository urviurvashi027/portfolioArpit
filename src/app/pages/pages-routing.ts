import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { PagesComponent } from './pages.component' ;


const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
        { path: 'home', component: HomeComponent },
        { path: 'stories', component: BlogComponent },
        { path: 'about', component: AboutComponent },
        { path: 'resume', component: ResumeComponent },
        { path: 'case-study', component: CaseStudyComponent },
        { path: 'story-detail', component: CaseStudyComponent },
        { path: '', redirectTo: '/', pathMatch: 'full'},
        { path: '**', component: HomeComponent }
    ],
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
