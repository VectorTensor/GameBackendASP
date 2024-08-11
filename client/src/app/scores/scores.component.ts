import { Component, OnInit} from '@angular/core';
import {ScoreApiServiceService} from "../score-api-service.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-scores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scores.component.html',
  styleUrl: './scores.component.css',
  providers:[{provide:ScoreApiServiceService}]
})
export class ScoresComponent implements OnInit{

  posts: any;

  constructor(private scoreService: ScoreApiServiceService) {


  }
  ngOnInit(): void {

    this.posts = this.scoreService.getScores();
    console.log(this.posts.toString())



  }





}
