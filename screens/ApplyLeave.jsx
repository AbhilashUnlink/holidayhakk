import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import aspectRatio from "../config/aspect-ratios";
import color from "../config/color";
import { Text, Divider } from "@rneui/themed";

export default function ApplyLeave() {
  const [form, setForm] = useState({
    type: "",
    reason: "",
    days: "",
  });

  const apply = () => {
    console.log(form);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontWeight: "900", fontSize: 30, marginBottom: 10 }}>
          Apply Leave
        </Text>
        <Divider width={5} style={{ marginBottom: 40 }} />
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Type of Leave"
            placeholderTextColor={color.pink}
            onChangeText={(form) => setForm(form.type)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Reason"
            placeholderTextColor={color.pink}
            onChangeText={(form) => setForm(form.reason)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Number of Days"
            placeholderTextColor={color.pink}
            onChangeText={(form) => setForm(form.days)}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={apply}>
          <Text style={styles.loginText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    display: "flex",
    alignItems: "center",
    height: aspectRatio.fullHeight,
  },

  logoImage: {
    height: aspectRatio.loginLogoHeight,
    width: aspectRatio.loginLogoWidth,
    resizeMode: "contain",
    marginBottom: 10,
    marginTop: 100,
  },

  inputView: {
    backgroundColor: color.lightPink,
    borderRadius: 30,
    width: aspectRatio.loginInputFieldWidth,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  textInput: {
    height: 50,
    flex: 1,
    color: color.white,
  },
  forgot_div: {
    width: aspectRatio.loginInputFieldWidth,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  forgot_button: {
    marginBottom: 15,
    marginRight: 10,
    color: color.pink,
  },

  loginBtn: {
    width: aspectRatio.loginInputFieldWidth,
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: color.purple,
  },
  loginText: {
    color: color.white,
    fontWeight: "bold",
  },
});
