import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {ScoresComponent} from "./scores/scores.component";
import { RegisterComponent } from './register/register.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {MatIcon} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatAnchor, MatButton} from "@angular/material/button";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, ScoresComponent,
    RegisterComponent, MatToolbar, MatMenuTrigger, MatIcon,
    MatMenu, MatTabsModule, MatAnchor, RouterLink, MatButton,
    RouterLinkActive],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'client';



}
