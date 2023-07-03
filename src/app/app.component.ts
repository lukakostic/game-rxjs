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

  openDialog() {
    const dialogRef = this.dialog.open(ScoreComponent, {
      
    width: '100vw',
    height: '100vh',
    hasBackdrop: true,
    backdropClass: 'backdrop',
    panelClass: 'custom-dialog-container',
    data:this.game
  });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  constructor(private cdRef:ChangeDetectorRef,public dialog: MatDialog) {
    this.cdRef = cdRef;
    window.appComponent = this;
  }
}
