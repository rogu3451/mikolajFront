import {Component, Input} from '@angular/core';
import {Data} from "./model/data";
import {HttpService} from "./services/http-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mikołajkowa loteria';
}
