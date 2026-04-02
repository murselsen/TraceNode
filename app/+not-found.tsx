import { Link, Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Not Found",
          headerShown: true,
          headerBackVisible: true,
          headerShadowVisible: false,
          headerTransparent: true,
          headerTitleStyle: {
            color: "white",
          },
          headerTintColor: "white",
        }}
      />
      <View style={styles.container}>
        <Text style={styles.text}>404 - Not Found</Text>
        <Link href={"/"} style={styles.link}>
          Go back to Home
        </Link>
      </View>
    </>
  );
};

// Styles for the NotFoundScreen
const styles = StyleSheet.create({
  container: {
    paddingBlock: 120,
    flex: 1,
    backgroundColor: "#2CB4ED",
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    fontSize: 20,
    color: "white",
  },
  link: {
    marginTop: 20,
    color: "gray",
    fontSize: 26,
    lineHeight: 10,
    // textDecorationLine: "underline",
  },
});

export default NotFoundScreen;
