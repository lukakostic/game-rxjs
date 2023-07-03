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
    console.log("PLAYAA",player);
  }

  getGradient(): string {
    let hp = this.player.hp;
    hp*=0.9;
    let rest = 100 - hp;
    return `linear-gradient(125deg, green ${hp}%, transparent ${rest}%)`;
  }

  getStyle(): string{
    return `background: ${this.getGradient()}`;
  }
}
