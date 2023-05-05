import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import color from "../../config/color";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from "react-native";
import aspectRatio from "../../config/aspect-ratios";
import { useNavigation } from "@react-navigation/native";

export default function About() {
  const nav=useNavigation()
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <FontAwesome
          name="chevron-left"
          size={36}
          color={color.silver}
          style={{ marginRight: 10 }}
          onPress={()=>{nav.openDrawer()}}
        />

        <Text
          style={{
            fontWeight: "900",
            fontSize: 36,
            color: color.purple,
          }}
        >
          About Us
        </Text>
      </View>

      <Text style={{ fontWeight: "900" }}>
        A Digital FootPrint of Unlink Technologies
      </Text>
      <Divider />
      <Text>
        Unlink Technologies Private Limited is an unlisted private company
        incorporated on 04 June, 2021. It is classified as a private limited
        company and is located in Ghaziabad, Uttar Pradesh. It's authorized
        share capital is INR 1.00 lac and the total paid-up capital is INR 1.00
        lac. The current status of Unlink Technologies Private Limited is -
        Active. Details of the last annual general meeting of Unlink
        Technologies Private Limited are not available. The company is yet to
        submit its first full-year financial statements to the registrar. Unlink
        Technologies Private Limited has two directors - Vijay Vardhan Shastri
        and Honey Tomer. The Corporate Identification Number (CIN) of Unlink
        Technologies Private Limited is U72900UP2021PTC146882. The registered
        office of Unlink Technologies Private Limited is at Gali No-5, Bag
        Colony, Modi Nagar, ModiNagar, Ghaziabad, Uttar Pradesh.
      </Text>
      <Image
        style={styles.logoImage}
        source={require("../../assets/logo.png")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: "center",
    paddingTop: 80,
  },
  logoImage: {
    height: aspectRatio.loginLogoHeight,
    width: aspectRatio.loginLogoWidth,
    resizeMode: "contain",
    marginBottom: 10,
  },
});
