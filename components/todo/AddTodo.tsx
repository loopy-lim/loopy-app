import { useTodoStore } from '@/store/useTodoStore';
import { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

export function AddTodo() {
  const { addTodo } = useTodoStore((state) => state.actions);
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput value={text} onChangeText={setText} />
      <Button title="Add" onPress={() => addTodo(text)} />
    </View>
  );
}
