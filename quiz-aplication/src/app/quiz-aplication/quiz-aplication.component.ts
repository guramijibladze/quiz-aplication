import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionService } from '../question.service';
import {
  QuestionResult,
  SelectCategory,
  SelectDifficulty,
} from './question.model';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quiz-aplication',
  templateUrl: './quiz-aplication.component.html',
  styleUrls: ['./quiz-aplication.component.scss'],
})
export class QuizAplicationComponent implements OnInit {
  questionArray$: Observable<Array<QuestionResult>>;
  selectcategory = SelectCategory;
  selectdifficulty = SelectDifficulty;
  form: FormGroup;
  isSelect: boolean = true;
  questionForm = this.quizForm();
  correctAnswerCount = 0
  ProbableAnswers = ["A", "B", "C", "D"]
  
  constructor(
    private questionService: QuestionService,
    private modalService: NgbModal) {}

  ngOnInit(): void {
    this.createForm();
  }

  getQuestion(category?: string, difficulty?: string) {
    this.questionArray$ = this.questionService.getquestion(
      category,
      difficulty
    );
  }

  private createForm() {
    this.form = new FormGroup({
      selectcategory: new FormControl(),
      selectdifficulty: new FormControl(),
    });
  }

  private quizForm() {
    return new FormGroup({
      question: new FormControl(null),
    });
  }

  checkCorrectAnswer(option) {
    const {question}  = this.questionForm.value
    const correctAnswer = option.correct_answer
    if(question === correctAnswer) {
      this.correctAnswerCount += 1
      // console.log(this.correctAnswerCount)
    }
  }


  submit() {
    if (
      (this.form.value.selectcategory == null,
      this.form.value.selectdifficulty == null)
    ) {
      return;
    }
    this.isSelect = false;
    this.getQuestion(
      this.form.value.selectcategory,
      this.form.value.selectdifficulty
    );
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}


