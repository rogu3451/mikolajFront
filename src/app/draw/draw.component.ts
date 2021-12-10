import { Component, OnInit } from '@angular/core';
import {Data} from "../model/data";
import {Router} from "@angular/router";
import {HttpService} from "../services/http-service";

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {

  model: Data = {
    name: '',
    uniqueCode: '',
    letter: ''
  }

  message: string = '';

  constructor( private router: Router, private httpService: HttpService) {
  }

  ngOnInit(): void {
  }

  draw() {
    console.log(this.model.name);


     this.httpService.draw(this.model).subscribe((response) => {
       localStorage.setItem('result',JSON.stringify(response));
       this.router.navigate(['./wynik']);
     },
       (error) => {
       this.message = error.error.message;
       });

  }
}
