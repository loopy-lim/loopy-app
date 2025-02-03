import { Todo } from '@/components/todo/Todo';
import { useTodoStore } from '@/store/useTodoStore';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export function TodoPreview() {
  const todo = useTodoStore((state) => state.todos);

  return (
    <View className="rounded-lg border border-slate-300 p-4 my-4">
      <Text className="py-2 font-semibold text-lg">TODO</Text>
      <View>
        {todo.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </View>
      <View className="items-end">
        <Link href="todo">
          <View className="bg-slate-100 py-2 px-4 rounded">
            <Text>todo</Text>
          </View>
        </Link>
      </View>
    </View>
  );
}
