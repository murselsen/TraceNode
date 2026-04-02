import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { UserProfileProps } from "@/types/components";

const UserProfile = ({
  profilePictureUrl,
  name,
  size = 45,
}: UserProfileProps) => {
  return (
    <View style={styles.UserProfileContainer}>
      <Image
        source={{
          uri:
            profilePictureUrl ||
            "https://static.vecteezy.com/system/resources/previews/018/742/015/original/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png",
        }}
        style={[
          styles.Image,
          { width: size, height: size, borderRadius: size / 2 },
        ]}
      />
      <View>
        <Text style={[styles.Text, { fontSize: size / 3 }]}>Welcome,</Text>
        <Text style={[styles.Text, { fontSize: size / 3 }]}>
          {name || "Guest"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  UserProfileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  Text: { fontWeight: "bold" },
  Image: {
    borderWidth: 3,
    borderColor: "#fff",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 10px 6px",
  },
});

export default UserProfile;
