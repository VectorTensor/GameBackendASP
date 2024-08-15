import { Routes } from '@angular/router';
import {ScoresComponent} from "./scores/scores.component";
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {path: 'scores',component:ScoresComponent},
  {path: 'register',component:RegisterComponent}
];
