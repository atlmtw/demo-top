import { Component, OnInit } from '@angular/core';
import { MediaMatcher, BreakpointObserver, Breakpoints   } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public mobileQuery: MediaQueryList;
  public isUnderRes: boolean;

  constructor(
    public media: MediaMatcher,
    public breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() : void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall
    ]).subscribe(result => {
      if(result.matches){
        this.isUnderRes = true;
      } else this.isUnderRes = false;
    });

    this.mobileQuery = this.media.matchMedia("(max-width: 600px)");
    if (this.mobileQuery.matches) this.isUnderRes = true;
    else this.isUnderRes = false;
  }
}
