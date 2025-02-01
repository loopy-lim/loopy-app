import Logo from '@/components/common/Logo';
import { TodoPreview } from '@/components/todo/Preview';
import { Stack } from 'expo-router';
import { SafeAreaView, View } from 'react-native';

export default function HomePage() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <Stack.Screen
        options={{
          title: 'Loopy',
        }}
      />
      <View className="px-4">
        <Logo />
        <TodoPreview />
      </View>
    </SafeAreaView>
  );
}
