import { Component, OnInit} from '@angular/core';
import {IScoreApiService, ScoreApiServiceService} from "../score-api-service.service";
import {CommonModule} from "@angular/common";
import { TestApiServiceService } from '../test-api-service.service';
import {routeAnimation} from '../Animations/BasicAnimations'

@Component({
  selector: 'app-scores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scores.component.html',
  styleUrl: './scores.component.css',
  animations:[routeAnimation],
  providers:[{provide: IScoreApiService , useClass:TestApiServiceService}]
})
export class ScoresComponent implements OnInit{

  posts: any;

  constructor(private scoreService:IScoreApiService ) {


  }
  ngOnInit(): void {

    this.posts = this.scoreService.getScores();
    console.log(this.posts.toString())


  }






}
