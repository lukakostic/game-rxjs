import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScoreComponent } from './score/score.component'; 

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
  game:any=null;
  enemies:any=null;

  rerender(){
    this.cdRef.detectChanges();
  }

  constructor(private cdRef:ChangeDetectorRef) {
    this.cdRef = cdRef;
    window.appComponent = this;
  }
}
