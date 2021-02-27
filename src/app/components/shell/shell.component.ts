import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from "rxjs/operators";

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset]) //Common breakpoint for desktop and mobile
    .pipe(
      map(result =>result.matches),
      shareReplay()  //to make all subscriptions listen to updated value of the same source
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
