import { AccordionMenuProps } from "@/types/components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const AccordionMenu = ({
  icon,
  label,
  children,
}: Omit<AccordionMenuProps, "href">) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const accordionBackground = useSharedValue<string>("#fff");
  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(accordionBackground.value, {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
      }),
    };
  });

  return (
    <Animated.View style={[styles.AccordionMenuContainer, animatedStyle]}>
      <Pressable
        onPress={() => {
          setIsOpen((prev) => !prev);
        }}
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingInlineStart: 20,
            paddingInlineEnd: 25,
            paddingVertical: 25,
          },
        ]}
      >
        <View style={styles.AccordionMenuContent}>
          {icon && (
            <MaterialCommunityIcons
              name={icon as any}
              size={24}
              color={"#2CB4ED"}
            />
          )}
          <Text style={styles.AccordionMenuLabel}>{label}</Text>
        </View>
        <MaterialCommunityIcons
          name={isOpen ? "chevron-up" : "chevron-down"}
          size={24}
        />
      </Pressable>
      {children && isOpen && (
        <View style={styles.AccordionMenuDropdownContent}>{children}</View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  AccordionMenuContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // paddingInlineStart: 20,
    // paddingInlineEnd: 25,
    // paddingVertical: 25,
    borderRadius: 10,
  },
  AccordionMenuContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  AccordionMenuLabel: {
    // marginLeft: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  AccordionMenuDropdownContent: {
    marginTop: 10,
    paddingInlineStart: 20,
    gap: 10,
  },
});

export default AccordionMenu;
