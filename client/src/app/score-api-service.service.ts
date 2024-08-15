import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Post } from './post';


@Injectable({
  providedIn: 'root'
})
export class ScoreApiServiceService implements IScoreApiService{

  readonly URL = "http://localhost:5133/score"
  scores: Observable<Post[]> ;


  constructor(private http: HttpClient) {
    this.scores = new Observable();
  }

  getScores(){

    let res = this.http.get(this.URL);
    return res;



  }
}
export abstract class IScoreApiService{
  abstract getScores(): any;
}

