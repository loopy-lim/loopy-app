import { postCompletedTodo, postCreateTodo } from "@/api/todo"
import { Todos } from "@/types/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['addTodo'],
    mutationFn: postCreateTodo,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  });
}

export const useCompletedTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postCompletedTodo,
    onSuccess: (data) => {
      queryClient.setQueryData(['todos'], (prev: Todos[]) => {
        return prev.map((todo) => {
          if (todo.id === data.id) {
            return { ...data }
          }
          return todo;
        });
      });
    }
  });
}
