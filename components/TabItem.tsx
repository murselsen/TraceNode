import { TabItemProps } from "@/types/components";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

const TabItem = ({ label, icon, active, onPress }: TabItemProps) => {
  return (
    <View
      style={[styles.tabItemContainer, active && { borderColor: "#2CB4ED" }]}
    >
      <Pressable onPress={onPress}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          {icon && (
            <MaterialIcons
              name={icon}
              size={24}
              color={active ? "#2CB4ED" : "#000"}
            />
          )}
          <Text style={styles.tabItemText}>{label}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  tabItemContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 50,
    borderWidth: 2,
    borderColor: "transparent",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    cursor: "pointer",
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 5px 1px",
  },
  tabItemText: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Inter-Regular",
  },
});

export default TabItem;
