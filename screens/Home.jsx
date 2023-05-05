import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import color from "../config/color";
const windowWidth = Dimensions.get("window").width;
import { users } from "../data/users";
import CustomCard from "../components/custom-card/CustomCard";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  const nav = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        {users.map((item, index) => {
          return (
            <CustomCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              buttonText={item.buttonText}
            />
          );
        })}

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: "center",
    width: windowWidth,
  },
});
