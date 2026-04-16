import React from "react";
import type {
  InputModeOptions,
  KeyboardTypeOptions,
  TextInput as TextInputType,
} from "react-native";
import { StyleSheet, TextInput, View } from "react-native";

const LoginFormInput = ({
  value,
  onChange,
  onEditing,
  children,
  options,
}: {
  value: string;
  onChange: (inputText: string) => void;
  onEditing: () => void;
  children?: React.ReactNode;
  options: {
    ref: React.Ref<TextInputType>;
    inputMode: InputModeOptions;
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    secureMode?: boolean;
  };
}) => {
  return (
    <View style={styles.LoginFormTab}>
      <View style={styles.LoginFormInputGroup}>
        <TextInput
          ref={options.ref}
          inputMode={options.inputMode}
          placeholder={options.placeholder}
          value={value}
          onChangeText={onChange}
          style={styles.LoginFormInput}
          onSubmitEditing={onEditing}
          secureTextEntry={options.secureMode}
          keyboardType={options.keyboardType}
          enablesReturnKeyAutomatically={true}
        />
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LoginFormTab: {
    gap: 10,
    width: "100%",
    flexDirection: "column",
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingBlock: 10,
    paddingInline: 15,
  },
  LoginFormInputGroup: {
    borderRadius: 0,
    color: "rgb(0, 0, 0)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  LoginFormInput: {
    height: 40,

    flex: 1,
  },

  LoginFormErrorArea: {
    width: "auto",
    paddingHorizontal: 5,
  },
  LoginFormErrorText: {
    color: "red",
  },
});
export default LoginFormInput;
