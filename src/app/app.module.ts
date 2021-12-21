import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { GameModule } from './game/game.module';
import { CartaServicioService } from './game/services/carta-servicio.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GameModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [CartaServicioService],
  entryComponents:[MatDialogModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
