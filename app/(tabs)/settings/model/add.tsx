import ScreenLayout from "@/components/ScreenLayout";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";

import FormInput from "@/components/ui/FormInput";
import { AddModelFormValues } from "@/types/Forms";

const AddModel = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddModelFormValues>();

  return (
    <>
      <ScreenLayout>
        <View style={{ flexShrink: 1, paddingVertical: 40 }}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={(input) => (
              <FormInput
                field={input.field}
                fieldState={input.fieldState}
                formState={input.formState}
                fieldPlaceholder="First Name"
              />
            )}
            name="firstName"
          />
        </View>
      </ScreenLayout>
    </>
  );
};

export default AddModel;
