import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SumComponent } from './operations/sum.component';
import { ResComponent } from './operations/res.component';
import { MulComponent } from './operations/mul.component';
import { DivComponent } from './operations/div.component';

@NgModule({
  declarations: [
    AppComponent,
    SumComponent,
    ResComponent,
    MulComponent,
    DivComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const firebaseConfig = {
  apiKey: "AIzaSyCD8KNzHBTLgi8-IkzdJpsBq5Au7Eznjww"
};