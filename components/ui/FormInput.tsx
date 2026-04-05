import { FormInputProps } from "@/types/components";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

// field: { onChange, onBlur, value },
// fieldState: { error },
// formState

const FormInput = ({
  type,
  field,
  fieldState,
  formState,
  fieldPlaceholder,
}: FormInputProps) => {
  const { onChange, onBlur, value } = field;

  const [touched, setTouched] = useState<boolean>(false);
  if (type === "text") {
    return (
      <View
        style={[
          styles.InputContainer,
          touched && {
            paddingVertical: 25,
          },
        ]}
      >
        <Text
          style={[
            styles.InputLabel,
            touched && {
              top: 12,
              fontSize: 13,
              color: "#d1d1d1",
            },
          ]}
        >
          {fieldPlaceholder}
        </Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={onChange}
          onBlur={() => {
            onBlur();
            value === "" && setTouched(false);
          }}
          onFocus={(event) => {
            setTouched(true);
          }}
          value={touched ? value : ""}
        />
      </View>
    );
  } if (type === "image") {
    
  }
};

const styles = StyleSheet.create({
  InputContainer: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 15,
    position: "relative",
  },
  InputLabel: {
    position: "absolute",
    top: 30,
    left: 20,
    color: "#1f1f1f",
    fontWeight: "600",
    fontSize: 17,
    fontFamily: "Inter-Regular",
    transitionProperty: "all",
    transitionDuration: "0.3s",
    transitionTimingFunction: "linear",
  },
  TextInput: {
    fontSize: 18,
    fontFamily: "Inter-Regular",
    paddingHorizontal: 10,
    // borderWidth: 2,
  },
});

export default FormInput;
