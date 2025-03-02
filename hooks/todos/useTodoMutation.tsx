import { postCreateTodo } from "@/api/todo"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['addTodo'],
    mutationFn: postCreateTodo,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  });
}
