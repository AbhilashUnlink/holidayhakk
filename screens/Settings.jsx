import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import color from "../config/color";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text>Setup time!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
