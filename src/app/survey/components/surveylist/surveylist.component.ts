import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/shared/survey.service';
import { ISurvey, ISurveyDetail } from '../../model/survey-model';

@Component({
  selector: 'app-surveylist',
  templateUrl: './surveylist.component.html'
})
export class SurveylistComponent implements OnInit {

  public surveys: ISurveyDetail[];
  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
    this.surveyService.getAvailableSurveys().subscribe((data: ISurvey) => {
      this.surveys = data.surveys;
    });
  }

}
