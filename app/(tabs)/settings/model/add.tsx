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
        <View style={{ flexShrink: 1, paddingVertical: 40, gap: 20 }}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={(input) => (
              <FormInput
                type="text"
                field={input.field}
                fieldState={input.fieldState}
                formState={input.formState}
                fieldPlaceholder="Model Key"
              />
            )}
            name="key"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={(input) => (
              <FormInput
                type="text"
                field={input.field}
                fieldState={input.fieldState}
                formState={input.formState}
                fieldPlaceholder="Model Name"
              />
            )}
            name="model"
          />
        </View>
      </ScreenLayout>
    </>
  );
};

export default AddModel;
