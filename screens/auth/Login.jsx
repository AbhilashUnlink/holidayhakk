import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import aspectRatio from "../../config/aspect-ratios";
import color from "../../config/color";

export default function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const login = () => {
    console.log(email, password);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} source={require("../../assets/logo.png")} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor={color.pink}
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={color.pink}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity onPress={login} style={styles.forgot_div}>
        <Text style={styles.forgot_button}>Forgot Password ?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={login}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: "center",
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
