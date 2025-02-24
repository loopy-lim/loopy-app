export class BaseDto<T> {
  statusCode: number;
  data: T;
  message?: { message: string, property: string }[]
  constructor({ statusCode, data, message }: BaseDto<T>) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
  }
} 
