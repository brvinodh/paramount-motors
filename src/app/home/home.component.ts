import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit(): void {

    //this.images[0]=;
  }

}