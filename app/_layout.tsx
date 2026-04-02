import { shadowVisible, style, titleColor } from "@/constants/header";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: style,
        headerTintColor: titleColor,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "500",
        },
        headerShadowVisible: shadowVisible,
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
