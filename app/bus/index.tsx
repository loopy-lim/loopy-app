import { router } from "expo-router";
import { Button, Text } from "react-native";

const BusPage = () => {
  return (
    <>
      <Text>bus</Text>
      <Button onPress={() => router.back()} title="back" />
    </>
  );
};

export default BusPage;
