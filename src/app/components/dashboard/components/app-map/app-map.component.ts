import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-map',
  templateUrl: './app-map.component.html',
  styleUrls: ['./app-map.component.scss']
})
export class AppMapComponent implements OnInit {

  constructor() { }
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  ngOnInit(): void {
  }


}
