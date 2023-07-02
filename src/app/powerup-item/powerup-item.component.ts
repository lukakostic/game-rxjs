import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-powerup-item',
  templateUrl: './powerup-item.component.html',
  styleUrls: ['./powerup-item.component.scss']
})
export class PowerupItemComponent {
  @Input() text: string = "";
}
