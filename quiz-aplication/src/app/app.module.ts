import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QuizAplicationComponent } from './quiz-aplication/quiz-aplication.component';
import { API_BASE_URL, QuestionService } from './question.service';
import { environment } from 'src/environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuizStartComponent } from './quiz-start/quiz-start.component';




@NgModule({
  declarations: [
    AppComponent,
    QuizAplicationComponent,
    QuizStartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [QuestionService,
  {
    provide: API_BASE_URL,
    useValue: environment.ApiBase
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
