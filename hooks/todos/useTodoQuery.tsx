import { getTodos } from "@/api/todo";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useTodoQuery() {
  return useSuspenseQuery({
    queryKey: ['todos'],
    queryFn: getTodos
  });
}
