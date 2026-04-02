import React from "react";
import { ScrollView, View, ViewStyle } from "react-native";

const ScreenLayout = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: ViewStyle;
}) => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: "#2CB4ED" }}
    >
      <View
        style={{
          backgroundColor: "#EFF0E6",
          flex: 1,
          borderTopRightRadius: 45,
          borderTopLeftRadius: 45,
          padding: 22.5,
          ...style,
        }}
      >
        {children}
      </View>
    </ScrollView>
  );
};

export default ScreenLayout;
