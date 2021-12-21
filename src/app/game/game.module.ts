import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './game-card/game-card.component';
import {RestartDialogComponent} from './restart-dialog/restart-dialog.component'
import { MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    GameCardComponent,
    RestartDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],exports:[
    GameCardComponent,
    RestartDialogComponent,
  ],

})
export class GameModule { }
