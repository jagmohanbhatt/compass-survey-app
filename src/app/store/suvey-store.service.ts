import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SurveyState, Count } from './store-model';
import { count } from 'rxjs/operators';

@Injectable()
export class SurveyStoreService {
  private initialCount: Count = { qno: 1 };
  private initialSurveyState: SurveyState = {
    id: null,
    questions: [{ id: null, options: [{ id: null }] }],
  };

  private resetState: SurveyState = {
    id: null,
    questions: [{ id: null, options: [{ id: null }] }],
  };

  private surveyTracker = new BehaviorSubject<SurveyState>(
    this.initialSurveyState
  );
  private questionTracker = new BehaviorSubject<Count>(this.initialCount);

  getQuestionState(): Observable<Count> {
    return this.questionTracker.asObservable();
  }

  setQuestionState(qid: number) {
    this.questionTracker.next({ qno: qid });
  }
  getSurveyState() {
    return this.surveyTracker.value;
  }

  setSurveyState(
    sruveyId: string,
    qid: string,
    optionId: string,
    action: string
  ) {
    const surveyStateLocal: SurveyState = Object.assign({}, this.surveyTracker.value);
    console.log(surveyStateLocal);
    surveyStateLocal.id = sruveyId;
    const qIndex = surveyStateLocal.questions.findIndex((a) => a.id === qid);

    if (action === 'ADD') {
      if (qIndex !== -1) {
        surveyStateLocal.questions[qIndex].options.push({ id: optionId });
      } else {
        surveyStateLocal.questions.push({
          id: qid,
          options: [{ id: optionId }],
        });
      }
    }

    if (action === 'REMOVE') {
      const oIndex = surveyStateLocal.questions[qIndex].options.findIndex(
        (a) => a.id === optionId
      );

      if (qIndex !== -1) {
        surveyStateLocal.questions[qIndex].options.splice(oIndex);
      }
    }

    this.surveyTracker.next(surveyStateLocal);
  }

  resetSurveyState(): void {
    this.surveyTracker.next(this.resetState);
  }

  resetCount(): void {
    console.log('setting again');
    this.questionTracker.next(this.initialCount);
  }

  constructor() {}
}
