import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Post } from './post';
import {RegisterDto} from "./Model/Dto";


@Injectable({
  providedIn: 'root'
})
export class ScoreApiServiceService implements IScoreApiService{

  readonly URL = "http://localhost:5133/"
  scores: Observable<Post[]> ;


  constructor(private http: HttpClient) {
    this.scores = new Observable();
  }

  public getScores(){

    let res = this.http.get(this.URL+"scores");
    return res;

  }

  public Register(registerInfo: RegisterDto):Observable<any>{

    let res = this.http.post<any>(this.URL+"register",registerInfo);
    return res;

  }
}
export abstract class IScoreApiService{
  abstract getScores(): any;
  abstract Register(registerInfo: RegisterDto): any;
}

