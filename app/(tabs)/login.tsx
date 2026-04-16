import { FontAwesome } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useRef, useState } from "react";
import type { TextInput as TextInputType } from "react-native";
import { Pressable, StyleSheet, Text, ToastAndroid, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

// Types
import { SignInFormValues } from "@/types/Forms";

// Form Modules
import LoginFormInput from "@/components/ui/LoginFormInput";
// Redux Store & Reducers & Operations
import { signIn } from "@/redux/Auth/operations";
import type { AppDispatch } from "@/redux/store.js";

// Assets
const loginBackImage = require("../../assets/images/loginBackImage.jpg");
const appLogo = require("../../assets/icons/traceNode.png");

const Login = () => {
  const initialValues: SignInFormValues = {
    email: "",
    password: "",
  };
  const LoginForm = {
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
  };

  const [values, setValues] = LoginForm.values;
  const emailInputRef = LoginForm.inputs.emailInput;
  const passwordInputRef = LoginForm.inputs.passwordInput;

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (values: SignInFormValues) => {
    console.log("Form Values:", values);
    dispatch(signIn(values));

    // Burada API isteği veya Redux action tetiklenebilir
  };

  const handleEmailValidationAndTabSwitch = () => {
    LoginForm.schema.email
      .validate(LoginForm.values[0].email)
      .then((valid) => {
        passwordInputRef.current?.focus();
      })
      .catch((err) => {
        ToastAndroid.show("❌ " + err.message, ToastAndroid.LONG);
      });
  };

  const handlePasswordValidationAndSubmit = () => {
    LoginForm.schema.password
      .validate(values.password)
      .then((valid) => {
        handleSubmit(values);
      })
      .catch((err) => {
        ToastAndroid.show("❌ " + err.message, ToastAndroid.LONG);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image source={loginBackImage} style={StyleSheet.absoluteFill} />
      <View style={styles.LoginContainer}>
        {/* Login Header */}
        <View style={styles.LoginHeader}>
          <Image source={appLogo} style={styles.AppLogo} />
          <Text style={styles.AppName}>TraceNode</Text>
        </View>

        {/* Login Body */}
        <View style={styles.LoginBody}>
          <Text style={{ color: "white", fontSize: 16 }}>
            TraceNode&apos;a hoş geldiniz! Lütfen giriş yaparak devam edin.
          </Text>
          <View style={styles.LoginFormTabs}>
            <LoginFormInput
              value={values.email}
              onChange={(inputText) => {
                setValues((prev) => ({
                  ...prev,
                  email: inputText,
                }));
              }}
              onEditing={handleEmailValidationAndTabSwitch}
              options={{
                ref: emailInputRef,
                inputMode: "email",
                placeholder: "E-Posta Adresinizi Girin",
                keyboardType: "email-address",
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

            <LoginFormInput
              value={values.password}
              onChange={(inputText) => {
                setValues((prev) => ({
                  ...prev,
                  password: inputText,
                }));
              }}
              onEditing={handlePasswordValidationAndSubmit}
              options={{
                ref: passwordInputRef,
                inputMode: "text",
                placeholder: "Şifrenizi Girin",
                keyboardType: "visible-password",
                secureMode: true,
              }}
            >
              <Pressable
                onPress={() => {
                  emailInputRef.current?.focus();
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
          </View>
        </View>

        {/* Login Footer */}
        <View style={styles.LoginFooter}>
          <Text style={styles.LoginFooterTitle}>
            QR Işlemleri İçin TraceNode&apos;u Kullanın
          </Text>
          <View style={styles.LoginFooterTabs}>
            <Pressable style={styles.LoginFooterTab}>
              <Image
                source={require("../../assets/icons/qr-code.png")}
                style={styles.LoginFooterIcon}
              />
              <Text style={styles.LoginFooterText}>Kayıt Ol</Text>
            </Pressable>
            <Pressable style={styles.LoginFooterTab}>
              <Image
                source={require("../../assets/icons/qr-code.png")}
                style={styles.LoginFooterIcon}
              />
              <Text style={styles.LoginFooterText}>Şifremi Unuttum</Text>
            </Pressable>
            <Pressable style={styles.LoginFooterTab}>
              ,
              <Image
                source={require("../../assets/icons/qr-code.png")}
                style={styles.LoginFooterIcon}
              />
              <Text style={styles.LoginFooterText}>Son Üretim Kayıtı</Text>
            </Pressable>
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
    justifyContent: "space-between",
    paddingBlockStart: 20,
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
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  LoginBody: {
    flex: 1,
    width: "100%",
    gap: 20,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  LoginFormTabs: {
    width: "100%",
    borderRadius: 5,
    height: 50,
    gap: 20,
  },
  LoginFooter: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255,1)",
    padding: 20,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    gap: 15,
  },
  LoginFooterTitle: {
    color: "gray",
    fontSize: 16,
    fontFamily: "Inter-Regular",
  },
  LoginFooterTabs: {
    flexDirection: "row",
    gap: 20,
  },
  LoginFooterTab: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
  },
  LoginFooterText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
  LoginFooterIcon: {
    width: 45,
    height: 45,
  },
});

export default Login;
