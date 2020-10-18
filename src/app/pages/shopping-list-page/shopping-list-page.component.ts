import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DemoModalComponent } from 'src/app/shared/demo-modal/demo-modal.component';

@Component({
  selector: 'app-shopping-list-page',
  templateUrl: './shopping-list-page.component.html',
  styleUrls: ['./shopping-list-page.component.scss']
})
export class ShoppingListPageComponent implements OnInit, AfterViewInit {

  constructor(private readonly modalService: NgbModal) { }

  public items = ['Milch', 'Nudeln'];

  public openDialog(): void {
    const heading = 'Demo';
    const body = 'In this demo, the user wants to add bread to their basket. Click begin to start the demo.';
    const closebutton = 'Start';

    const dialogRef = this.modalService.open(DemoModalComponent);
    dialogRef.componentInstance.data = { heading, body, closebutton };

    dialogRef.result.then(_ => this.startDemo(), _ => { });
  }

  public startDemo(): void {
    const userPrompt = new Audio();
    const systemReply = new Audio();
    userPrompt.src = 'assets/audios/Please_add_bread.mp3';
    systemReply.src = 'assets/audios/Bread_has_been_added.mp3';
    userPrompt.load();
    systemReply.load();
    userPrompt.play();
    userPrompt.onended = () => {
      this.items.push('Brot');
      setTimeout(() => systemReply.play(), 600);
    };
  }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.openDialog();
  }
}
