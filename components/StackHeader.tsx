import UserProfile from "@/components/UserProfile";
import React from "react";
import { StyleSheet, View } from "react-native";

const StackHeader = () => {
  return (
    <View style={styles.StackHeaderContainer}>
      <UserProfile />
    </View>
  );
};

const styles = StyleSheet.create({
  StackHeaderContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBlockStart: 60,
    paddingBlockEnd: 20,
    paddingHorizontal: 22,
    backgroundColor: "#2CB4ED",
    position: "sticky",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  Text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
});

export default StackHeader;
