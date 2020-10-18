import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DemoModalComponent } from 'src/app/shared/demo-modal/demo-modal.component';

@Component({
    selector: 'app-navigation-page',
    templateUrl: './navigation-page.component.html',
    styleUrls: ['./navigation-page.component.scss']
})
export class NavigationPageComponent implements OnInit, AfterViewInit {

    public aheadHidden = false;
    public rightHidden = false;
    public leftHidden = false;
    public successHidden = false;

    constructor(private readonly modalService: NgbModal) { }

    public openDialog(): void {
        const heading = 'Scenario';
        const body = 'The user is now being navigated to the item via audio instructions. The user\'s location is being tracked and the instructions are being updated based on user\'s movement. Click begin to start the demo.';
        const closebutton = 'Begin';
        const dialogRef = this.modalService.open(DemoModalComponent);
        dialogRef.componentInstance.data = { heading, body, closebutton };

        dialogRef.result.then(
            _ => this.startDemo(),
            _ => this.startDemo());
    }

    public startDemo(): void {
        const ahead = new Audio();
        const left = new Audio();
        const right = new Audio();
        const success = new Audio();
        const start = new Audio();

        start.src = 'assets/audios/Navigating_to_bread.mp3';
        ahead.src = 'assets/audios/Ahead.mp3';
        left.src = 'assets/audios/Left.mp3';
        left.load();
        success.src = 'assets/audios/Approaching_bread.mp3';
        success.load();

        start.play();
        start.onended = () => {
            setTimeout(() => {
                this.leftHidden = false;
                left.play();
            }, 700);
        };

        left.onended = () => {
            setTimeout(() => {
                this.leftHidden = true;
                this.aheadHidden = false;
                ahead.play();
            }, 1000);
        };

        ahead.onended = () => {
            setTimeout(() => {
                this.aheadHidden = true;
                this.successHidden = false;
                success.play();
            }, 5000);
        };
    }

    public ngOnInit(): void {
    }

    public ngAfterViewInit(): void {
        this.openDialog();
    }
}
