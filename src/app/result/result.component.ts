import { Component, OnInit } from '@angular/core';
import {Result} from "../model/result";
import {Data} from "../model/data";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  model: Result = {
    name: '',
    surname: '',
    letter: ''
  }

  constructor() { }

  ngOnInit(): void {
   this.model = JSON.parse(<string>localStorage.getItem("result"));
  }

}
