import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-healthbar',
  templateUrl: './healthbar.component.html',
  styleUrls: ['./healthbar.component.scss']
})
export class HealthbarComponent implements OnInit {

  @Input() player: any;

  constructor() { }

  ngOnInit(): void {
  }

  getGradient(): string {
    let hp = this.player.hp;
    let rest = 100 - hp;
    return `linear-gradient(45deg, green ${hp}%, red ${rest}%)`;
  }
}
