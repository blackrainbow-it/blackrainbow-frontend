import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  public select(link: string) {
    this.router.navigate([link]);
  }

  ngOnInit(): void {
  }

}
