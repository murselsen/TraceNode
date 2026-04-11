import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

// Screen Header Styles
import { shadowVisible, style, titleColor } from "../../constants/header";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: style,
        headerTintColor: titleColor,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "500",
        },
        headerShadowVisible: shadowVisible,
        tabBarActiveTintColor: "#2CB4ED",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerStyle: { height: 0 },
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
          title: "Settings",
        }}
      />
      <Tabs.Screen
        name="settings/model/add"
        options={{
          href: null,
          title: "Add Model",
        }}
      />
      <Tabs.Screen
        name="login"
        options={{ headerShown: false, tabBarStyle: { display: "none" } }}
      />
    </Tabs>
  );
};

export default TabLayout;
