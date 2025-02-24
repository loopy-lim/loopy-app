import { Todo } from '@/components/todo/Todo';
import { useTodoQuery } from '@/hooks/todos/useTodoQuery';
import { Stack } from 'expo-router';
import { View } from 'react-native';

export function TodoList() {
  const { data: todos } = useTodoQuery();

  return (
    <View>
      <Stack.Screen options={{ title: 'Todo', headerShown: true }} />
      <View>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </View>
    </View>
  );
}
