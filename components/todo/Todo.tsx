import { Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from '@/components/ui/checkbox';
import { CheckIcon } from '@/components/ui/icon';
import { useCompletedTodoMutation } from '@/hooks/todos/useTodoMutation';

interface Props {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  }
}

export function Todo({ todo: { completed, id, title } }: Props) {
  const { mutate: completedTodo } = useCompletedTodoMutation();

  return (
    <Checkbox size="md" className="p-3 flex justify-between rounded-md active:opacity-80 active:bg-slate-200" value="" isChecked={completed} onChange={() => completedTodo({ id })}>
      <CheckboxLabel>{title}</CheckboxLabel>
      <CheckboxIndicator>
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
    </Checkbox>
  );
}
