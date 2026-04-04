import ScreenLayout from "@/components/ScreenLayout";
import AccordionMenu from "@/components/ui/AccordionMenu";
import LinkButton from "@/components/ui/LinkButton";
import { StyleSheet, View } from "react-native";

export default function Settings() {
  return (
    <>
      <ScreenLayout style={styles.SettingsScreenLayout}>
        <View style={{ flexShrink: 1, gap: 15 }}>
          <AccordionMenu icon="office-building" label="Company Settings">
            <LinkButton
              href="/(tabs)/settings/company/list"
              label="List Companies"
              icon={"format-list-text"}
            />
            <LinkButton
              href="/(tabs)/settings/company/add"
              label="Add Company"
              icon={"playlist-plus"}
            />
            <LinkButton
              href="/(tabs)/settings/company/remove"
              label="Remove Company"
              icon={"playlist-remove"}
            />
          </AccordionMenu>

          <AccordionMenu icon="meteor" label="Models">
            <LinkButton
              href="/(tabs)/settings/model/list"
              label="List Models"
              icon={"format-list-text"}
            />
            <LinkButton
              href="/(tabs)/settings/model/add"
              label="Add Model"
              icon={"playlist-plus"}
            />
            <LinkButton
              href="/(tabs)/settings/model/remove"
              label="Remove Model"
              icon={"playlist-remove"}
            />
          </AccordionMenu>
        </View>
      </ScreenLayout>
    </>
  );
}

const styles = StyleSheet.create({
  SettingsScreenLayout: { borderTopLeftRadius: 0, borderTopRightRadius: 0 },
});
