import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Result} from "../model/result";
import {Data} from "../model/data";


@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  draw(model: Data): Observable<Result> {
    return this.httpClient.post<Result>('http://164.92.249.234:8080/draw', model);
  }

}
