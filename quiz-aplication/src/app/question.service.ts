import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map,mergeMap, toArray } from 'rxjs/operators';

export const API_BASE_URL = new InjectionToken<string>('');


@Injectable()
export class QuestionService {

  constructor(
    @Inject( API_BASE_URL ) private ApiBase:string,
    private http: HttpClient
    ){}

  getquestion(category?:string, difficulty?:string):Observable<any>{
    return this.http.get(`${this.ApiBase[category][difficulty]}`).pipe(
      map((data: any) => data.results),
      mergeMap(data => {
        return data.map(res =>  ({
          ...res,
          questionOptions: shuffleArray([ ...res.incorrect_answers, res.correct_answer])
        }))
      }),
      toArray()
    )
  }
}

function shuffleArray(arr) {
  return arr
  .map(a => [Math.random(), a])
  .sort((a, b) => a[0] - b[0])
  .map(a => a[1])
}