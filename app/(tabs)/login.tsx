import { Image } from "expo-image";
import React, { useRef, useState } from "react";
import type { TextInput as TextInputType } from "react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Form Modules
import LoginFormInput from "@/components/ui/LoginFormInput";
import { SignInFormValues } from "@/types/Forms";
import { FontAwesome } from "@expo/vector-icons";
import * as Yup from "yup";

const loginBackImage = require("../../assets/images/loginBackImage.jpg");
const appLogo = require("../../assets/icons/traceNode.png");

interface LoginFormTabs {
  tabs: "start" | "emailTab" | "passwordTab" | "end";
}

const Login = () => {
  const initialValues: SignInFormValues = {
    email: "",
    password: "",
  };
  const LoginForm = {
    tabs: useState<LoginFormTabs["tabs"]>("start"),
    inputs: {
      emailInput: useRef<TextInputType>(null),
      passwordInput: useRef<TextInputType>(null),
    },
    schema: {
      email: Yup.string()
        .email("Geçerli bir email girin")
        .required("Email zorunludur"),
      password: Yup.string()
        .min(6, "Şifre en az 6 karakter olmalı")
        .required("Şifre zorunludur"),
    },
    values: useState<SignInFormValues>(initialValues),
    errors: useState<SignInFormValues>(initialValues),
  };

  const handleSubmit = (values: SignInFormValues) => {
    console.log("Form Values:", values);
    // Burada API isteği veya Redux action tetiklenebilir
  };

  const handleEmailValidationAndTabSwitch = () => {
    LoginForm.schema.email
      .validate(LoginForm.values[0].email)
      .then((valid) => {
        LoginForm.tabs[1]("passwordTab");
        LoginForm.inputs.passwordInput.current?.focus();
        LoginForm.errors[1]((prev) => ({
          ...prev,
          email: "",
        }));
      })
      .catch((err) => {
        LoginForm.errors[1]((prev) => ({
          ...prev,
          email: err.message,
        }));
      });
  };

  const handlePasswordValidationAndSubmit = () => {
    LoginForm.schema.password
      .validate(LoginForm.values[0].password)
      .then((valid) => {
        LoginForm.errors[1]((prev) => ({
          ...prev,
          password: "",
        }));
        handleSubmit(LoginForm.values[0]);
      })
      .catch((err) => {
        LoginForm.errors[1]((prev) => ({
          ...prev,
          password: err.message,
        }));
      });
  };

  const [tab, setTab] = LoginForm.tabs;
  const [values, setValues] = LoginForm.values;
  const [errors, setErrors] = LoginForm.errors;
  const emailInputRef = LoginForm.inputs.emailInput;
  const passwordInputRef = LoginForm.inputs.passwordInput;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image source={loginBackImage} style={StyleSheet.absoluteFill} />
      <View style={styles.LoginContainer}>
        <View style={styles.LoginHeader}>
          <Image source={appLogo} style={styles.AppLogo} />
          <Text style={styles.AppName}>TraceNode</Text>
        </View>

        <View style={styles.LoginBody}>
          <Text style={{ color: "white", fontSize: 16 }}>
            TraceNode&apos;a hoş geldiniz! Lütfen giriş yaparak devam edin.
          </Text>

          <View style={styles.LoginFormTabs}>
            {/* Start Tab */}
            {tab === "start" && (
              <Pressable
                style={[styles.LoginFormButton, { backgroundColor: "#2CB4ED" }]}
                onPress={() => {
                  LoginForm.inputs.emailInput.current?.focus();
                  LoginForm.tabs[1]("emailTab");
                }}
              >
                <Text style={{ color: "white", fontSize: 16 }}>Devam Et</Text>
              </Pressable>
            )}

            {/* Email Tab */}
            {tab === "emailTab" && (
              <LoginFormInput
                value={values.email}
                onChange={(inputText) => {
                  setValues((prev) => ({
                    ...prev,
                    email: inputText,
                  }));
                  setErrors((prev) => ({
                    ...prev,
                    email: "",
                  }));
                }}
                errorMessage={errors.email}
                onEditing={handleEmailValidationAndTabSwitch}
                options={{
                  ref: emailInputRef,
                  inputMode: "email",
                  placeholder: "E-Posta Adresinizi Girin",
                }}
              >
                <Pressable onPress={handleEmailValidationAndTabSwitch}>
                  <FontAwesome
                    name="chevron-circle-right"
                    size={18}
                    color={"#2CB4ED"}
                  />
                </Pressable>
              </LoginFormInput>
            )}

            {/* Password Tab */}
            {tab === "passwordTab" && (
              <LoginFormInput
                value={values.password}
                onChange={(inputText) => {
                  setValues((prev) => ({
                    ...prev,
                    password: inputText,
                  }));
                  setErrors((prev) => ({
                    ...prev,
                    password: "",
                  }));
                }}
                onEditing={handlePasswordValidationAndSubmit}
                options={{
                  ref: passwordInputRef,
                  inputMode: "text",
                  placeholder: "Şifrenizi Girin",
                }}
              >
                <Pressable
                  onPress={() => {
                    LoginForm.tabs[1]("emailTab");
                    LoginForm.inputs.emailInput.current?.focus();
                  }}
                  style={{
                    borderRightWidth: 1,
                    borderRightColor: "rgba(0, 0, 0, 0.1)",
                    paddingRight: 10,
                  }}
                >
                  <FontAwesome
                    name="chevron-circle-left"
                    size={18}
                    color={"#2CB4ED"}
                  />
                </Pressable>
                <Pressable
                  onPress={async () => {
                    handlePasswordValidationAndSubmit();
                  }}
                >
                  <FontAwesome name="sign-in" size={22} color={"#2CB4ED"} />
                </Pressable>
              </LoginFormInput>
            )}
            {/* <View style={styles.LoginFormTab}>
              <View style={styles.LoginFormInput}>
                <TextInput
                  ref={LoginForm.inputs.passwordInput}
                  placeholder="Şifrenizi girin"
                  style={{
                    borderRightWidth: 1,
                    borderRightColor: "rgba(0, 0, 0, 0.1)",
                    flex: 1,
                  }}
                  value={LoginForm.values[0].password}
                  onChangeText={(s) =>
                    LoginForm.values[1]((prev) => ({
                      ...prev,
                      password: s,
                    }))
                  }
                  secureTextEntry={true}
                  textContentType="password"
                />

                <Pressable
                  onPress={() => {
                    LoginForm.tabs[1]("emailTab");
                    LoginForm.inputs.emailInput.current?.focus();
                  }}
                  style={{
                    borderRightWidth: 1,
                    borderRightColor: "rgba(0, 0, 0, 0.1)",
                    paddingRight: 10,
                  }}
                >
                  <FontAwesome
                    name="chevron-circle-left"
                    size={18}
                    color={buttonBackgroundColor.current}
                  />
                </Pressable>
                <Pressable
                  onPress={async () => {
                    handlePasswordValidationAndSubmit();
                  }}
                >
                  <FontAwesome
                    name="sign-in"
                    size={22}
                    color={buttonBackgroundColor.current}
                  />
                </Pressable>
              </View>
              {LoginForm.errors[0].password !== "" && (
                <View style={styles.LoginFormErrorArea}>
                  <Text style={styles.LoginFormErrorText}>
                    {LoginForm.errors[0].password}
                  </Text>
                </View>
              )}
            </View> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  LoginContainer: {
    flex: 1,
    gap: 120,
    alignItems: "center",
    padding: 20,
    paddingBlockStart: 40,
  },
  LoginHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 20,
  },
  AppLogo: {
    width: 40,
    height: 40,
  },
  AppName: {
    color: "white",
    fontSize: 23,
    fontWeight: "500",
  },
  LoginFormButton: {
    flex: 1,
  },
  LoginBody: {
    alignItems: "center",
    justifyContent: "center",
    gap: 20,

    width: "100%",
  },
  LoginFormTabs: {
    width: "100%",
    borderRadius: 5,
    height: 50,
    gap: 20,
  },
});

export default Login;
