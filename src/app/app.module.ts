import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyService } from './shared/survey.service';
import { MessageService } from './shared/message.service';
import { SurveyStoreService } from './store/suvey-store.service';
import { NavComponent } from './layout/nav/nav.component';
import { SurveylistComponent } from './survey/components/surveylist/surveylist.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    SurveyService,
    MessageService,
    SurveyStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
