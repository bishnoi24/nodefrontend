import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  styles: [`
    header {
      background-image: url('assets/images/img_bg_1.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
  `]
})
export class NavComponent implements OnInit {
  appTitle: string = 'Mona Bishnoi';

  constructor() {}

  ngOnInit() {
  }

  typed() {
    console.log('hello');
  }
}
