import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import TabItem from "./TabItem";

interface Meter {
  label: string;
  isActive: boolean;
  icon: string;
}
const TabList = () => {
  const [meters, setMeters] = useState<Meter[]>([
    {
      label: "Tümü",
      isActive: true,
      icon: "border-all",
    },
    {
      label: "Electric  ",
      isActive: false,
      icon: "electric-meter",
    },
    {
      label: "Water  ",
      isActive: false,
      icon: "water",
    },
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={meters}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <TabItem
          label={item.label}
          key={index}
          icon={item.icon}
          active={item.isActive}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    gap: 12,
  },
});

export default TabList;
