import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-demo-modal',
  templateUrl: './demo-modal.component.html',
  styleUrls: ['./demo-modal.component.scss']
})

export class DemoModalComponent implements OnInit {
  data = {'heading': 'Scenario', 'body': 'Click begin to start the demo', 'closebutton': 'begin'}
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
