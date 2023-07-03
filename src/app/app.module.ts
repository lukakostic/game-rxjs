import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PowerupComponent } from './powerup/powerup.component';
import { PowerupItemComponent } from './powerup-item/powerup-item.component';
import { HealthbarComponent } from './healthbar/healthbar.component';
import { PlayerHealthComponent } from './player-health/player-health.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerupComponent,
    PowerupItemComponent,
    HealthbarComponent,
    PlayerHealthComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
