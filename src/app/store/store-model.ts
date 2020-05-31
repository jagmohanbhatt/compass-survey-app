export interface Count {
  qno: number;
}

export class SurveyState {
  id: string;
  questions: [
    {
      id: string;
      options: [
        {
          id: string;
        }
      ];
    }
  ];
}
