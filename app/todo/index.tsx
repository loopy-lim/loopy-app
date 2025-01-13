import { Stack } from "expo-router";
import { Text, View } from "react-native";

function TodoPage() {
  return (
    <View className="px-6 bg-white flex-1">
      <Stack.Screen
        options={{
          title: "Todo",
          headerTintColor: "#004BFF",
        }}
      />
      <Text>Todo page</Text>
    </View>
  );
}

export default TodoPage;
