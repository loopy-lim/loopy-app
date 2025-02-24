import { Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from '@/components/ui/checkbox';
import { CheckIcon } from '@/components/ui/icon';
import { useTodoStore } from '@/store/useTodoStore';

interface Props {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  }
}

export function Todo({ todo: { completed, id, title } }: Props) {
  const { completedTodo } = useTodoStore((state) => state.actions);

  return (
    <Checkbox size="md" className="py-2" value="" isChecked={completed} onChange={() => completedTodo(`${id}`)}>
      <CheckboxIndicator>
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>{title}</CheckboxLabel>
    </Checkbox>
  );
}
