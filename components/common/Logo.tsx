import { Text, View } from 'react-native';

interface Props {
  className?: string;
}

export default function Logo({ className }: Props) {
  return (
    <View className={className}>
      <Text className="text-xl font-semibold">Loopy</Text>
    </View>
  );
}
