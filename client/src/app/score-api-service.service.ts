import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ScoreApiServiceService {
  scores: any[];
  readonly URL = "http://localhost:5133/score"

  constructor(private http: HttpClient) {
    this.scores = [];
  }

  getScores(){

    let res = this.http.get(this.URL);
    return res;



  }
}
