import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

const HomePage = () => {
  return (
    <View className="px-6 bg-white flex-1">
      <Text>Home page</Text>
      <Link href={"bus"}>bus</Link>
    </View>
  );
};

export default HomePage;
