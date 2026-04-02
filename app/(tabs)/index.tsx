import MeterCard from "@/components/MeterCard";
import ScreenLayout from "@/components/ScreenLayout";
import StackHeader from "@/components/StackHeader";
import TabList from "@/components/TabList";
import { View } from "react-native";

export default function Index() {
  return (
    <>
      <StackHeader />
      <ScreenLayout>
        <View style={{ flexShrink: 1, gap: 20 }}>
          <TabList />
          <MeterCard />
        </View>
      </ScreenLayout>
    </>
  );
}
