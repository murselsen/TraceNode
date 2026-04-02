import { LinkButtonProps } from "@/types/components";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const LinkButton = ({ href, label, icon }: LinkButtonProps) => {
  return (
    <View style={styles.LinkButtonContainer}>
      <Link href={href} asChild>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View style={styles.LinkButtonContent}>
            <FontAwesome name={icon} size={24} color={"#2CB4ED"} />
            <Text style={styles.LinkButtonLabel}>{label}</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} />
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  LinkButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingInlineStart: 20,
    paddingInlineEnd: 25,
    paddingVertical: 25,
    borderRadius: 10,
  },
  LinkButtonContent: {
    flexDirection: "row",
      alignItems: "center",
    gap:15,
  },
  LinkButtonLabel: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "500",
  },
});

export default LinkButton;
