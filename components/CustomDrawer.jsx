import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import color from "../config/color";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const CustomDrawer = (props) => {
  const DrawerBackground = "../assets/beach4.jpg";
  const Logo = "../assets/user.jpg";

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: color.white, paddingTop: 0 }}
      >
        <ImageBackground
          source={require(DrawerBackground)}
          style={{
            padding: 20,
            height: 160,
          }}
        >
          <View style={[styles.overlay, styles.drawerHeader]}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                height: 50,
              }}
            >
              <Image
                source={require(Logo)}
                style={{
                  height: 50,
                  width: 50,
                  borderColor: color.golden,
                  borderWidth: 2,
                  borderRadius: 50,
                }}
              />
              <Text
                style={{
                  color: color.white,
                  fontWeight: "900",
                  letterSpacing: 2,
                  fontSize: 22,
                }}
              >
                Abhilash{"\n"}
                <Text
                  style={{
                    color: color.golden,
                    fontWeight: "300",
                    letterSpacing: 2,
                    fontSize: 12,
                  }}
                >
                  Pending Leaves (5)
                </Text>
              </Text>
            </View>
            {/* Pending Leaves Count */}

            {/* <Text
              style={{
                color: color.white,
                fontWeight: "500",
                letterSpacing: 2,
                fontSize: 12,
              }}
            >
              Enjoy your leave is Approved
            </Text> */}
          </View>
        </ImageBackground>
        {/* Drawer Items  to render list of drawer like home, about us, settings*/}
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Tell a frind and log out icon */}

      <View
        style={{
          paddingHorizontal: 20,
          borderTopWidth: 1,
          borderTopColor: "#ccc",
        }}
      >
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text style={{ marginLeft: 5 }}>Tell a friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} />
            <Text style={{ marginLeft: 5 }}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(165,67,244,0.5)",
  },
  drawerHeader: {
    // alignItems:"center",
    justifyContent: "flex-end",
    paddingLeft: 10,
    paddingBottom: 10,
  },
});
