import { AddTodo } from '@/components/todo/AddTodo';
import { TodoList } from '@/components/todo/TodoList';
import { Stack } from 'expo-router';
import { View } from 'react-native';

function TodoPage() {
  return (
    <View className="px-6 bg-white flex-1">
      <Stack.Screen
        options={{
          title: 'Todo',
          headerTintColor: '#004BFF',
        }}
      />
      <TodoList />
      <AddTodo />
    </View>
  );
}

export default TodoPage;
