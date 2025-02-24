export class ResponseGetTodo {
  id: number;
  text: string;
  completed: boolean;
  constructor(json: any) {
    this.id = json.id;
    this.text = json.text;
    this.completed = json.completed;
  }
}

export interface RequestPostCreateTodo {
  text: string;
}
