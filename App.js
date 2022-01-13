import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableHighlight,
  Button,
  Alert,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  console.log(useDeviceOrientation());
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Follow the white Rabbit!"
        color="orange"
        onPress={() =>
          Alert.alert("Matrix", "Choose a pill", [
            { text: "Red", onPress: () => alert("Back to normal") },
            {
              text: "Blue",
              onPress: () => alert("Back to human life in real world"),
            },
          ])
        }
      />
      <View
        style={{ backgroundColor: "dodgerblue", width: "100%", height: "30%" }}
      ></View>

      <Text>Success Back to Hello World!</Text>
      <TouchableHighlight onPress={() => console.log("image tabbed")}>
        <Image
          blurRadius={1}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
});
