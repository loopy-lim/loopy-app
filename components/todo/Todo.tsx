import { Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from '@/components/ui/checkbox';
import { CheckIcon } from '@/components/ui/icon';
import { TodoState, useTodoStore } from '@/store/useTodoStore';

interface Props {
  todo: TodoState['todos'][0];
}

export function Todo({ todo: { completed, id, text } }: Props) {
  const { completedTodo } = useTodoStore((state) => state.actions);

  return (
    <Checkbox size="md" className="py-2" value="" isChecked={completed} onChange={() => completedTodo(id)}>
      <CheckboxIndicator>
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>{text}</CheckboxLabel>
    </Checkbox>
  );
}
