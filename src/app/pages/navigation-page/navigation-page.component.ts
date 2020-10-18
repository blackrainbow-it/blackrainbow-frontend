import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import {DemoModalComponent} from 'src/app/shared/demo-modal/demo-modal.component'

@Component({
  selector: 'app-navigation-page',
  templateUrl: './navigation-page.component.html',
  styleUrls: ['./navigation-page.component.scss']
})
export class NavigationPageComponent implements OnInit {

  constructor(private readonly modalService: NgbModal) { }

  openDialog() {
    let heading = 'Scenario';
    let body = 'The user is now being navigated to the item via audio instructions. The user\'s location is being tracked and the instructions are being updated based on user\'s movement. Click begin to start the demo.';
    let closebutton = 'Begin';
    const dialogRef = this.modalService.open(DemoModalComponent);
    dialogRef.componentInstance.data = {'heading': heading, 'body': body, 'closebutton': closebutton};
		
		dialogRef.result.then((data) => {
			this.startDemo()

		}, (reason) => {
		  this.startDemo()
		});    
  }

  startDemo() {
  	let ahead = new Audio();
		let left = new Audio();
		let right = new Audio();
		let success = new Audio();
		let start = new Audio();
		
		start.src =  "assets/audios/Navigating_to_bread.mp3";
		ahead.src = "assets/audios/Ahead.mp3";
		left.src = "assets/audios/Left.mp3";
		left.load();
		success.src = "assets/audios/Approaching_bread.mp3";
		success.load();

		start.play();
		start.onended = ()=> {

	 		setTimeout(()=>{
		 		document.getElementById('left').hidden = false;
	 			left.play();
	 		},700)
		}; 

		left.onended = ()=> {
	 		setTimeout(()=>{
		 		document.getElementById('left').hidden = true;
		 		document.getElementById('ahead').hidden = false;
	 			ahead.play();
	 		},1000)
		}; 

		ahead.onended = ()=> {
	 		setTimeout(()=>{
		 		document.getElementById('ahead').hidden = true;
		 		document.getElementById('success').hidden = false;
	 			success.play();
	 		},5000)
		}; 
	}


  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  	this.openDialog()
  }
}
