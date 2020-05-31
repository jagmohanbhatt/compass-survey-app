import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  ISurveyDetail,
  IQuestions,
  IOptions,
  ISurvey,
} from '../../model/survey-model';
import { SurveyService } from 'src/app/shared/survey.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyStoreService } from 'src/app/store/suvey-store.service';

@Component({
  selector: 'app-surveypoint',
  templateUrl: './surveypoint.component.html',
  styleUrls: ['./surveypoint.component.css'],
})
export class SurveypointComponent implements OnInit, OnDestroy {
  fetched = false;
  id: string;
  currentQid: 1;
  public survey: ISurveyDetail;
  public questions: IQuestions[];
  public options: IOptions[];
  public selectedOptions: {id: string; }[];

  currentQ: number;
  subscription;

  constructor(
    private surveyService: SurveyService,
    private route: ActivatedRoute,
    private router: Router,
    public store: SurveyStoreService
  ) {}

  isFirstQuestion() {
    return this.currentQid === 1;
  }

  isLastQuestion() {
    return this.currentQid === this.questions.length;
  }

  checkBoxClik(event) {
    let action = 'ADD';
    if (!event.target.checked) {
      action = 'REMOVE';
    }

    console.log(`${this.survey.id} =>
    ${this.currentQid.toString()} => ${event.target.id}`);

    this.store.setSurveyState(
      this.survey.id,
      this.currentQid.toString(),
      event.target.id,
      action
    );
  }
  moveNext() {
    this.currentQid++;
    this.setSelection();
    this.store.setQuestionState(this.currentQid);
    this.options = this.questions[Number(this.currentQid) - 1].options;
  }

  movePrev() {
    this.currentQid--;
    this.setSelection();
    this.store.setQuestionState(this.currentQid);
    this.options = this.questions[Number(this.currentQid) - 1].options;

    console.log(this.store.getSurveyState());
  }

  setSelection() {
    this.selectedOptions = undefined;
    const surveyState = this.store.getSurveyState();
    const qDetail = surveyState.questions.find(
      (a) => a.id === this.currentQid.toString()
    );
    if (qDetail !== undefined) {
      this.selectedOptions = [...qDetail.options];
    }
  }

  isSelected(optionId) {
    if (this.selectedOptions !== undefined) {
      return this.selectedOptions.findIndex((a) => a.id === optionId) !== -1;
    }

    return false;
  }
  subitSurvey() {
    console.log('submit');
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.subscription = this.store.getQuestionState().subscribe((a) => {
      this.currentQ = a.qno;
    });

    if (!this.survey) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.surveyService.getSurveyById(this.id).subscribe((data: ISurvey) => {
        this.survey = data.surveys.find((a) => a.id === this.id);
        this.questions = this.survey.questions;
        this.options = this.questions[Number(this.currentQ) - 1].options;

        this.fetched = true;
        this.currentQid = 1;
      });
    }
  }

  ngOnDestroy(): void {
    console.log('destroyed');
    this.store.resetCount();
    this.store.resetSurveyState();
    this.subscription.unsubscribe();
  }
}
