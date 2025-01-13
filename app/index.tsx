import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

const HomePage = () => {
  return (
    <View className="px-6 bg-white flex-1">
      <Stack.Screen options={{
        title: 'Home',
        headerTintColor: '#004BFF',
      }} />
      <Text>Home page</Text>
      <Link href="todo">todo</Link>
    </View>
  );
};

export default HomePage;
