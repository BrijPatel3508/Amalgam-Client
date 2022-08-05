import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-map',
  templateUrl: './app-map.component.html',
  styleUrls: ['./app-map.component.scss']
})
export class AppMapComponent implements OnInit {

  constructor() { }
  title = 'My first AGM project';
  lat = 22.308155;
  lng = 70.800705;
  zoom = 5;

  ngOnInit(): void {
  }


}
