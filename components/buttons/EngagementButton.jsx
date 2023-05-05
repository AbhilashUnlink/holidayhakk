import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import color from "../../config/color";

const EngagementButton = ({ icon, count, engaged, engagedColor,size, onClick }) => {
  return (
    <View style={styles.post}>
      <TouchableOpacity style={styles.mainTouch} onPress={onClick}>
        {engaged ? (
          <>
            <FontAwesome name={icon} size={size} color={engagedColor} />
            <Text style={styles.postLikeCount}>{count}</Text>
          </>
        ) : (
          <>
            <FontAwesome name={icon} size={size} color={color.silver} />
            <Text style={styles.postLikedCount}>{count}</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  post: {
    display: "flex",
    alignItems: "center",
  },
  postLikeCount: {
    position: "absolute",
    fontWeight: "bold",
    color: color.black,
  },
  postLikedCount: {
    position: "absolute",
    fontWeight: "bold",
    color: color.white,
  },
  mainTouch: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EngagementButton;
