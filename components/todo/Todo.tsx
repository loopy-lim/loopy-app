import { TodoState } from '@/store/useTodoStore';
import { Text, View } from 'react-native';

interface Props {
  todo: TodoState['todos'][0];
}

export function Todo({ todo: { completed, id, text } }: Props) {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}
