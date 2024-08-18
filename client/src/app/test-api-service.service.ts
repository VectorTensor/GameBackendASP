import { Injectable } from '@angular/core';
import { IScoreApiService } from './score-api-service.service';
import {RegisterDto} from "./Model/Dto";

@Injectable({
  providedIn: 'root'
})
export class TestApiServiceService implements IScoreApiService {

  posts = [{name:"Prayash",score:12},
{name:"Trash",score:121},
{name:"Newman",score:133},
{name:"Stacy",score:112},
{name:"Gojo",score:120}


  ]

  constructor() { }

  getScores() {

    return this.posts;

  }

  Register(registerInfo: RegisterDto): any {
  }

}
