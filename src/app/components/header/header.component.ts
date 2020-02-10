import { Component, OnInit } from '@angular/core';
import { Router }  from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public _opened: boolean = false;
 
  public _toggleSidebar() {
    this._opened = !this._opened;
  }

  public _onBackdropClicked(): void {
    console.info('Backdrop clicked');
  }  

  myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  menuItemHomeClick(){
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    this.router.navigate(['/pages/home']); 
  }

  menuItemResumeClick(){
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    this.router.navigate(['/pages/resume']); 
  }

  menuItemStoriesClick(){
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    this.router.navigate(['/pages/stories']); 
  }

  menuItemAboutClick(){
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    this.router.navigate(['/pages/about']); 
  }

}
