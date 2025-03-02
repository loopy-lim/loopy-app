import { Button, ButtonText } from '@/components/ui/button';
import { FormControl } from '@/components/ui/form-control';
import { Input, InputField } from '@/components/ui/input';
import { useCreateTodoMutation } from '@/hooks/todos/useTodoMutation';
import { useState } from 'react';

export function AddTodo() {
  const { mutate: addTodo } = useCreateTodoMutation();
  const [text, setText] = useState('');

  const onAddTodo = () => {
    addTodo({ title: text }, {
      onSuccess: () => setText(''),
      onError: (error) => alert(error)
    });
  };

  return (
    <FormControl className="flex-row gap-4 w-full">
      <Input variant="outline" className="flex-1">
        <InputField placeholder="오늘 할 일은...🤔" value={text} onChange={(e) => setText(e.nativeEvent.text)} />
      </Input>
      <Button className='active:opacity-80 active:bg-slate-200' variant="outline" action="primary" onPress={onAddTodo}>
        <ButtonText>추가하기</ButtonText>
      </Button>
    </FormControl>
  );
}
