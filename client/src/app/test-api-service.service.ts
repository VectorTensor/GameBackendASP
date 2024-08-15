import { Injectable } from '@angular/core';
import { IScoreApiService } from './score-api-service.service';

@Injectable({
  providedIn: 'root'
})
export class TestApiServiceService implements IScoreApiService {

  posts = [{name:"Prayash",score:12}]

  constructor() { }

  getScores() {

    return this.posts;

  }

}
