import { Todo } from '@/components/todo/Todo';
import { useTodoStore } from '@/store/useTodoStore';
import { View } from 'react-native';

export function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <View>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </View>
  );
}
