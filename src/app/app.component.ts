import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

declare global {
  interface Window { appComponent: any; }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  player:any=null;
  enemies=[
    {
      name:"enemy",
      position:{x:0,y:0},
      hp:75,
    }
  ];
  rerender(){
    this.cdRef.detectChanges();
  }
  constructor(private cdRef:ChangeDetectorRef) {
    this.cdRef = cdRef;
    window.appComponent = this;
  }
}
