import { Component, OnInit ,ElementRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EmailComponent } from '../modal/email/email.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  bsModalRef: BsModalRef;
  // TemplateRef:Ele 
  constructor(private modalService: BsModalService) {}
 
  openModal() {
    // const initialState = {
    //   list: [
    //     'Open a modal with component',
    //     'Pass your data',
    //     'Do something else',
    //     '...'
    //   ],
    //   title: 'Modal with component'
    // };
    // this.bsModalRef = this.modalService.show(EmailComponent, {initialState});
    // this.bsModalRef.content.closeBtnName = 'Close';
    var email = "aprit.ranjan4@gmail.com";
    document.location.href = "mailto:"+email;
  }

  ngOnInit() {
  }


}
