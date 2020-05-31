import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyComponent } from './survey.component';
import { SurveylistComponent } from './components/surveylist/surveylist.component';
import { SurveypointComponent } from './components/surveypoint/surveypoint.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SurveyComponent,
    SurveylistComponent,
    SurveypointComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SurveyRoutingModule,
    FormsModule
  ]
})
export class SurveyModule { }
