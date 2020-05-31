import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ISurvey } from '../survey/model/survey-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  public getAvailableSurveys(): Observable<ISurvey> {
    return this.http.get<ISurvey>('../../assets/survey-data.json');
  }

  public getSurveyById(id: string): Observable<ISurvey> {
    // console.log(id);
    return this.http.get<ISurvey>('../../assets/survey-data.json')
    .pipe(
      catchError(this.handleError<ISurvey>(`getSurveyById: id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`SurveyService: ${message}`);
  }
}
