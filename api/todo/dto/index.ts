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
