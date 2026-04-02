import ScreenLayout from "@/components/ScreenLayout";
import LinkButton from "@/components/ui/LinkButton";
import { Text, View } from "react-native";

export default function Settings() {
  return (
    <>
      <ScreenLayout>
        <View style={{ flexShrink: 1 }}>
          <LinkButton href="/(tabs)/settings/add-model" label="Add Model" icon={"plus-circle"} />
        </View>
      </ScreenLayout>
    </>
  );
}
