export interface QuestionResult {
    category: string;
    incorrect_answers: string;
    correct_answer: string;
    difficulty: string;
    question: string;
    questionOptions: Array<string>;
  }

  export interface QuestionApi {
    "response_code": number;
    "results": QuestionResult[];
  }

  export interface Questions {
    "results": QuestionResult[]
  }

  export interface Selected{
    FilmCategory: SelectCategory,
    DilmDifficulty: SelectDifficulty
  }

  export enum SelectCategory {
    Book = 'Book',
    Film = 'Film',
    Music = 'Music'
  }

  export enum SelectDifficulty {
    Easy = 'Easy',
    Medium = 'Medium',
    Hard = 'Hard'
  }

  