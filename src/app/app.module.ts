import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

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
import { BidDetailsComponent } from './bid-details/bid-details.component';

import {MatMenuModule} from '@angular/material/menu';
import { CustomerComponent } from './customer/customer.component';

import { ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CustomerSigninComponent } from './customer-signin/customer-signin.component';
import { WalletComponent } from './wallet/wallet.component';



@NgModule({
  declarations: [
    AppComponent,
    JackpotComponent,
    JackpotDetailsComponent,
    BidComponent,
    BidDetailsComponent,
    CustomerComponent,
    CustomerSigninComponent,
    WalletComponent
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
    MatMenuModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,    
    MatCarouselModule.forRoot()    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
