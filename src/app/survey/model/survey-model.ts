export interface ISurvey {
  surveys: ISurveyDetail[];
}

export interface ISurveyDetail {
  id: string;
  name: string;
  questions: IQuestions[];
}

export interface IQuestions {
  id: string;
  createdBy: string;
  createdDateTime: Date;
  title: string;
  subTitle: string;
  questionType: string;
  options: IOptions[];
}

export interface IOptions {
  id: string;
  text: string;
}
