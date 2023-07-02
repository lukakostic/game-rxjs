import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-powerup',
  templateUrl: './powerup.component.html',
  styleUrls: ['./powerup.component.scss']
})
export class PowerupComponent {
  @Input() powerups: string[] = [];
}
