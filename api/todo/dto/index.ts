export class ResponseGetTodo {
  id: number;
  title: string;
  completed: boolean;
  constructor(json: any) {
    this.id = json.id;
    this.title = json.title;
    this.completed = json.completed;
  }
}

export interface RequestPostCreateTodo {
  title: string;
}

export interface RequestPostCompletedTodo {
  id: number;
}

export interface ResponsePostCompletedTodo {
  id: number;
  completed: boolean;
  title: string;
}
