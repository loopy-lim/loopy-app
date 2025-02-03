import 'react-native-get-random-values';
import { create } from 'zustand';
import { nanoid } from 'nanoid';

export interface TodoState {
  todos: {
    id: string;
    text: string;
    completed: boolean;
  }[];
}

interface TodoAction {
  addTodo: (todo: string) => void;
  removeTodo: (id: string) => void;
  completedTodo: (id: string) => void;
  clearTodos: () => void;
}

interface TodoStore extends TodoState {
  actions: TodoAction;
}

const todoMock: TodoState['todos'][0][] = [
  {
    id: '1',
    text: 'Buy milk',
    completed: false,
  },
  {
    id: '2',
    text: 'Buy eggs',
    completed: false,
  },
  {
    id: '3',
    text: 'Buy bread',
    completed: false,
  },
];

export const useTodoStore = create<TodoStore>()((set) => ({
  todos: todoMock,
  actions: {
    addTodo: (todo: string) =>
      set((state) => ({
        todos: [
          ...state.todos,
          {
            id: nanoid(),
            text: todo,
            completed: false,
          },
        ],
      })),
    completedTodo: (id: string) =>
      set((state) => ({
        todos: state.todos.map((t) =>
          t.id === id
            ? {
                ...t,
                completed: !t.completed,
              }
            : t,
        ),
      })),
    removeTodo: (id: string) =>
      set((state) => ({
        todos: state.todos.filter((t) => t.id !== id),
      })),
    clearTodos: () => set({ todos: [] }),
  },
}));
