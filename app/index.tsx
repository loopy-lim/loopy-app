import Logo from '@/components/common/Logo';
import { TodoPreview } from '@/components/todo/Preview';
import { ErrorBoundaryProps, Stack } from 'expo-router';
import { SafeAreaView, Text, View } from 'react-native';

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Text>{error.message}</Text>
      <Text onPress={retry}>Try Again?</Text>
    </View>
  );
}


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
