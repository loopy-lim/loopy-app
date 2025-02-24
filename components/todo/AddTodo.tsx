import { Button, ButtonText } from '@/components/ui/button';
import { FormControl } from '@/components/ui/form-control';
import { Input, InputField } from '@/components/ui/input';
import { useTodoStore } from '@/store/useTodoStore';
import { useState } from 'react';

export function AddTodo() {
  const { addTodo } = useTodoStore((state) => state.actions);
  const [text, setText] = useState('');

  const onAddTodo = () => {
    addTodo(text);
    setText('');
  };

  return (
    <FormControl className="flex-row gap-4 w-full">
      <Input variant="outline" className="flex-1">
        <InputField placeholder="오늘 할 일은...🤔" value={text} onChange={(e) => setText(e.nativeEvent.text)} />
      </Input>
      <Button variant="outline" action="primary" onPress={onAddTodo}>
        <ButtonText>ADD</ButtonText>
      </Button>
    </FormControl>
  );
}
