import { TodoState } from '@/store/useTodoStore';
import { Text, View } from 'react-native';

export function Todo({ done, id, text }: TodoState['todos'][0]) {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}
