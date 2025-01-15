import 'react-native-get-random-values';
import { create } from 'zustand';
import { nanoid } from 'nanoid';

export interface TodoState {
  todos: {
    id: string;
    text: string;
    done: boolean;
  }[];
}

interface TodoAction {
  addTodo: (todo: string) => void;
  removeTodo: (id: string) => void;
  doneTodo: (id: string) => void;
  clearTodos: () => void;
}

interface TodoStore extends TodoState {
  actions: TodoAction;
}

export const useTodoStore = create<TodoStore>()((set) => ({
  todos: [],
  actions: {
    addTodo: (todo: string) =>
      set((state) => ({
        todos: [
          ...state.todos,
          {
            id: nanoid(),
            text: todo,
            done: false,
          },
        ],
      })),
    doneTodo: (id: string) =>
      set((state) => ({
        todos: state.todos.map((t) =>
          t.id === id
            ? {
                ...t,
                done: !t.done,
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
