import ScreenLayout from "@/components/ScreenLayout";
import React from "react";
import { View } from "react-native";
import { Formik, Form } from "formik";

const AddModel = () => {
  return (
    <>
      <ScreenLayout>
        <View style={{ flexShrink: 1 }}>

          <Formik initialValues={}>
            <Form>

            </Form>
          </Formik>

        </View>
        
      </ScreenLayout>
    </>
  );
};

export default AddModel;
