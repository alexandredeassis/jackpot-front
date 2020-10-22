import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JackpotComponent } from './jackpot/jackpot.component';
import { JackpotDetailsComponent } from './jackpot-details/jackpot-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { MatCarouselModule } from '@ngmodule/material-carousel'

import {MatGridListModule} from '@angular/material/grid-list';
import { BidComponent } from './bid/bid.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    JackpotComponent,
    JackpotDetailsComponent,
    BidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatCarouselModule.forRoot()    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
