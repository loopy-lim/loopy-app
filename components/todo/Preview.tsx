import { Todo } from '@/components/todo/Todo';
import { TodoState } from '@/store/useTodoStore';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

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

export function TodoPreview() {
  return (
    <View>
      <View>
        {todoMock.map((todo) => (
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
