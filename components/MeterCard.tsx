import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MeterCard = () => {
  const BT_10 = require("@/assets/images/meters/bt_10.png");
  return (
    <View style={styles.MeterCardContainer}>
      <Image source={BT_10} style={styles.MeterImage} />

      <View style={styles.MeterInfoContainer}>
        <View style={styles.MeterInfoItemContainer}>
          <Text style={styles.MeterInfoItemSubTitle}>Meter Type</Text>
          <Text style={styles.MeterInfoItemTitle}>Electric Meter</Text>
        </View>

        <View style={styles.MeterInfoItemContainer}>
          <Text style={styles.MeterInfoItemSubTitle}>Model:</Text>
          <Text style={styles.MeterInfoItemTitle}>BT.10</Text>
        </View>
        <View style={styles.MeterInfoItemContainer}>
          <Text style={styles.MeterInfoItemSubTitle}>Total Production:</Text>
          <Text style={styles.MeterInfoItemTitle}>150.000</Text>
        </View>
      </View>
      <View style={styles.MeterInfoContainer}>
        <View style={styles.MeterInfoItemContainer}>
          <Text style={styles.MeterInfoItemSubTitle}>Meter Type</Text>
          <Text style={styles.MeterInfoItemTitle}>Electric Meter</Text>
        </View>

        <View style={styles.MeterInfoItemContainer}>
          <Text style={styles.MeterInfoItemSubTitle}>Model:</Text>
          <Text style={styles.MeterInfoItemTitle}>BT.10</Text>
        </View>
        <View style={styles.MeterInfoItemContainer}>
          <Text style={styles.MeterInfoItemSubTitle}>Total Production:</Text>
          <Text style={styles.MeterInfoItemTitle}>150.000</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MeterCardContainer: {
    flexShrink: 1,
    overflowX: "scroll",
    flexDirection: "row",
    // flexWrap: "wrap",
    alignItems: "flex-start",
    gap: 16,
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  MeterImage: {
    width: 100,
    minHeight: 140,
    objectFit: "cover",
    borderRadius: 8,
  },
  MeterInfoContainer: {
    flexDirection: "column",
    gap: 7,
  },
  MeterInfoItemContainer: {
    flexDirection: "column",
  },
  MeterInfoItemSubTitle: {
    fontSize: 10,
    fontWeight: "400",
    color: "#888",
    fontFamily: "Inter-Regular",
  },
  MeterInfoItemTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    fontFamily: "Inter-Bold",
  },
});
export default MeterCard;
