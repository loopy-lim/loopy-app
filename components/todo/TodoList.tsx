import { Todo } from '@/components/todo/Todo';
import { useTodoStore } from '@/store/useTodoStore';
import { Stack } from 'expo-router';
import { View } from 'react-native';

export function TodoList() {
  const todos = useTodoStore((state) => state.todos);

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
