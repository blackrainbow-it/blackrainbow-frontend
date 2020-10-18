import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private readonly router: Router) { }

  public items = [{
    icon: 'photo_camera',
    text: 'Digitales Auge',
    link: 'digital-eye'
  }, {
    icon: 'receipt_long',
    text: 'Einkaufsliste',
    link: 'shopping-list'
  }, {
    icon: 'navigation',
    text: 'Navigation',
    link: 'navigation'
  }];

  public select(link: string): void {
    if (link === 'navigation') {
      this.startNav(link);
    }
    else if (link === 'digital-eye') {
      this.openDigitalEye(link);
    }
    else if (link === 'shopping-list') {
      this.openEinkaufsliste(link);
    }
  }

  public openDigitalEye(link: string): void {
    const systemReply = new Audio();
    systemReply.src = 'assets/audios/Opening_digital_eye.mp3';
    systemReply.onended = () => {
      this.router.navigate([link]);
    };
    systemReply.play();
  }

  public openEinkaufsliste(link: string): void {
    const systemReply = new Audio();
    systemReply.src = 'assets/audios/Opening_Shopping_List.mp3';
    systemReply.onended = () => {
      this.router.navigate([link]);
    };
    systemReply.play();
  }

  public startNav(link: string): void {
    const userRequest = new Audio();
    const openingNav = new Audio();

    userRequest.src = 'assets/audios/Please_start_navigation.mp3';
    openingNav.src = 'assets/audios/Opening_Navigation.mp3';
    openingNav.load();
    openingNav.onended = () => {
      console.log();
      this.router.navigate([link]);
    };

    userRequest.play();
    userRequest.onended = () => {
      setTimeout(() => {
        openingNav.play();
      }, 600);
    };
  }

  public ngOnInit(): void {
  }

}
