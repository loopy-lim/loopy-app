import { useTodoStore } from '@/store/useTodoStore';
import { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

export function AddTodo() {
  const { addTodo } = useTodoStore((state) => state.actions);
  const [text, setText] = useState('');

  const onAddTodo = () => {
    addTodo(text);
    setText('');
  };

  return (
    <View>
      <TextInput className="w-full py-2 px-4 border rounded-lg" value={text} onChangeText={setText} />
      <Button title="Add" onPress={onAddTodo} />
    </View>
  );
}
