import { Link } from "expo-router";
import { Text, View } from "react-native";

const HomePage = () => {
  return (
    <View>
      <Text>Home page</Text>
      <Link href={"bus"}>bus</Link>
    </View>
  );
};

export default HomePage;
