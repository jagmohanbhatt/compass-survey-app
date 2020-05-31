import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyComponent } from './survey.component';
import { SurveypointComponent } from './components/surveypoint/surveypoint.component';
import { SurveylistComponent } from './components/surveylist/surveylist.component';

const routes: Routes = [
  {path: '', component: SurveylistComponent},
  {path: 'list', component: SurveylistComponent},
  {path: 'survey/:id', component: SurveypointComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }
