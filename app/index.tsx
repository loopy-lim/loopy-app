import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

const HomePage = () => {
  return (
    <View className="px-6 bg-white flex-1 py-4">
      <Stack.Screen
        options={{
          title: "Home",
          headerTintColor: "#004BFF",
        }}
      />
      <Text>Home page</Text>
      <Link href="todo">
        <View className="py-2 px-4 border rounded">
          <Text>todo</Text>
        </View>
      </Link>
    </View>
  );
};

export default HomePage;
