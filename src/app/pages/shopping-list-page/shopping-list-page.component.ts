import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import {DemoModalComponent} from 'src/app/shared/demo-modal/demo-modal.component'
@Component({
  selector: 'app-shopping-list-page',
  templateUrl: './shopping-list-page.component.html',
  styleUrls: ['./shopping-list-page.component.scss']
})
export class ShoppingListPageComponent implements OnInit {

 constructor(private readonly modalService: NgbModal) {}

  openDialog() {
    let heading = 'scenario';
    let body = 'In this demo, the user wants to add bread to their basket. Click begin to start the demo.';
    let closebutton = 'Begin';
    const dialogRef = this.modalService.open(DemoModalComponent);
    dialogRef.componentInstance.data = {'heading': heading, 'body': body, 'closebutton': closebutton};
		
		dialogRef.result.then((data) => {
			this.startDemo()

		}, (reason) => {
		  
		});    
  }

  startDemo() {
  		let userPrompt = new Audio();
			let systemReply = new Audio();
			userPrompt.src = "assets/audios/Please_add_bread.mp3";
			systemReply.src = "assets/audios/Bread_has_been_added.mp3";
			userPrompt.load();
			systemReply.load();
			userPrompt.play();
			userPrompt.onended = function() {
		 		document.getElementById('brot').hidden = false;
		 		setTimeout(()=>{systemReply.play()},600)
			};  	
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  	this.openDialog()
  }

}
