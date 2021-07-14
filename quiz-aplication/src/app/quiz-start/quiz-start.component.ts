import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';

export interface SignInForm {
  name: string;
  lastName: string;
}

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.scss']
})
export class QuizStartComponent implements OnInit {
  
  constructor(
    private router: Router,
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
  }

  signIn({ name, lastName }: SignInForm) {
    if (!name || !lastName) {
      return;
    }

    
    this.router.navigate(['aplication']);
  }

}
