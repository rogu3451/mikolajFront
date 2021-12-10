import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ResultComponent } from './result/result.component';
import {AppRoutingModule} from "./app-routing-module";
import { DrawComponent } from './draw/draw.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    DrawComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
      HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
