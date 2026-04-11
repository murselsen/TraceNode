import { shadowVisible, style, titleColor } from "@/constants/header";
import { store } from "@/redux/store";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
export default function RootLayout() {
  return (
    <Provider store={store}>
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
        {/* <Stack.Screen
          name="login"
          options={{
            headerShown: false,
          }}
        /> */}
      </Stack>
    </Provider>
  );
}
