import ScreenLayout from "@/components/ScreenLayout";
import AccordionMenu from "@/components/ui/AccordionMenu";
import LinkButton from "@/components/ui/LinkButton";
import { StyleSheet, View } from "react-native";

export default function Settings() {
  return (
    <>
      <ScreenLayout style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        <View style={{ flexShrink: 1, gap: 15 }}>
          <LinkButton
            href="/(tabs)/settings/add-model"
            label="Add Model"
            icon={"plus-circle"}
          />
          <AccordionMenu icon="meters" label="Models">
            <LinkButton
              href="/(tabs)/settings/connected-devices"
              label="Connected Devices"
              icon={"mobile"}
            />
          </AccordionMenu>
        </View>
      </ScreenLayout>
    </>
  );
}

const styles = StyleSheet.create({
  SettingsScreenLayout: {},
});
