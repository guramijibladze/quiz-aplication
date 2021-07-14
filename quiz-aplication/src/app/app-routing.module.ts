import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizAplicationComponent } from './quiz-aplication/quiz-aplication.component';
import { QuizStartComponent } from './quiz-start/quiz-start.component';


const routes: Routes = [
  {
    path: '', component: QuizStartComponent
  },
  {
    path: 'aplication', component: QuizAplicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
