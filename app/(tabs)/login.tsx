import { Image } from "expo-image";
import React, { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Form Modules
import { SignInFormValues } from "@/types/Forms";
import { FontAwesome } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";

const loginBackImage = require("../../assets/images/loginBackImage.jpg");
const appLogo = require("../../assets/icons/traceNode.png");

interface LoginFormTabs {
  tabs: "start" | "emailTab" | "passwordTab" | "end";
}

const Login = () => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Geçerli bir email girin")
      .required("Email zorunludur"),
    password: Yup.string()
      .min(6, "Şifre en az 6 karakter olmalı")
      .required("Şifre zorunludur"),
  });

  const initialValues: SignInFormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: SignInFormValues) => {
    console.log("Form Values:", values);
    // Burada API isteği veya Redux action tetiklenebilir
  };

  const [tab, setTab] = useState<LoginFormTabs["tabs"]>("start");
  const buttonBackgroundColor = useRef<string>("#2CB4ED");
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
              <Pressable
                style={[
                  styles.LoginFormButton,
                  { backgroundColor: buttonBackgroundColor.current },
                ]}
                onPress={() => setTab("emailTab")}
              >
                <Text style={{ color: "white", fontSize: 16 }}>Giriş Yap</Text>
              </Pressable>

              <View style={{ gap: 10, width: "100%" }}>
                <View style={styles.LoginFormInput}>
                  <TextInput
                    inputMode="email"
                    placeholder="E-posta adresinizi girin"
                    // onBlur={  handleBlur("email")}
                    // onChangeText={formik.handleChange("email")}
                    style={{
                      borderRightWidth: 1,
                      borderRightColor: "rgba(0, 0, 0, 0.1)",
                      flex: 1,
                    }}
                    value={"formik.values.email"}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                  />
                  <Pressable onPress={() => setTab("passwordTab")}>
                    <FontAwesome
                      name="chevron-circle-right"
                      size={18}
                      color={buttonBackgroundColor.current}
                    />
                  </Pressable>
                </View>

                <View style={{ gap: 10, width: "100%" }}>
                  <View style={styles.LoginFormInput}>
                    <TextInput
                      inlineImageLeft="search_icon"
                      placeholder="Şifrenizi girin"
                      // onBlur={handleBlur("password")}
                      // onChangeText={handleChange("password")}
                      style={{
                        borderRightWidth: 1,
                        borderRightColor: "rgba(0, 0, 0, 0.1)",
                        flex: 1,
                      }}
                      value={"values.password"}
                      secureTextEntry
                      textContentType="password"
                    />

                    <Pressable
                      onPress={() => setTab("emailTab")}
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
                      onPress={
                        () => console.log("Submit") /* formik.handleSubmit() */
                      }
                    >
                      <FontAwesome
                        name="sign-in"
                        size={22}
                        color={buttonBackgroundColor.current}
                      />
                    </Pressable>
                  </View>
                </View>
              </View>
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
  LoginFormInput: {
    height: 70,
    padding: 10,
    gap: 15,
    paddingInline: 20,
    borderRadius: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  LoginFormButton: {
    padding: 10,
    borderRadius: 5,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
