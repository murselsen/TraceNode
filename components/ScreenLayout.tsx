import React from "react";
import { ScrollView, View } from "react-native";

const ScreenLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "#2CB4ED" }}
    >
      <View
        style={{
          backgroundColor: "#EFF0E6",

          // width: "100%",
          flex: 1,
          borderTopRightRadius: 45,
          borderTopLeftRadius: 45,
          padding: 22.5,
        }}
      >
        {children}
      </View>
    </ScrollView>
  );
};

export default ScreenLayout;
