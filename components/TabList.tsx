import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import TabItem from "./TabItem";

interface Meter {
  label: string;
  isActive: boolean;
  icon: string;
}
const TabList = () => {
  const [activeTab, setActiveTab] = useState<string>("Tümü");
  const [meters] = useState<Meter[]>([
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
          active={activeTab === item.label}
          onPress={() => setActiveTab(item.label)}
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
