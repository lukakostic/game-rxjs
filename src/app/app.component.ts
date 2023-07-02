import { Component } from '@angular/core';

declare global {
  interface Window { appComponent: any; }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  player:any={
    powerups : ['Powerup1', 'Powerup2','Powerup1', 'Powerup2','Powerup1', 'Powerup2','Powerup1', 'Powerup2','Powerup1', 'Powerup2','Powerup1', 'Powerup2','Powerup1', 'Powerup2'],
    hp: 100,
  };
  enemies=[
    {
      name:"enemy",
      position:{x:0,y:0},
      hp:75,
    }
  ];
  constructor() {
    window.appComponent = this;
  }
}
