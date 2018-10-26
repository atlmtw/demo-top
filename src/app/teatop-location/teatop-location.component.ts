import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-teatop-location',
  templateUrl: './teatop-location.component.html',
  styleUrls: ['./teatop-location.component.scss']
})
export class TeatopLocationComponent implements OnInit {
  @ViewChild('googleM') googleMap;
  public apiKey: string = "AIzaSyBsbYymWa7bB1hKUdOesKUoIPoDLRPtYmM";

  constructor() { }

  ngOnInit() : void {
    console.log(this.googleMap);
    this.googleMap.nativeElement.blur();
  }

}
