import {
  ControllerFieldState,
  ControllerRenderProps,
  FormState,
} from "react-hook-form";
import { AddModelFormValues } from "./Forms";

export interface UserProfileProps {
  profilePictureUrl?: string;
  name?: string;
  size?: number;
}

export interface TabItemProps {
  label: string;
  icon?: string;
  active?: boolean;
  onPress?: () => void;
}

export interface LinkButtonProps {
  href: string;
  label: string;
  icon?: string | undefined;
}

export interface AccordionMenuProps {
  icon?: string;
  label: string;
  children?: React.ReactNode;
}

export interface FormInputProps {
  field: ControllerRenderProps<AccordionMenuProps>;
  fieldState: ControllerFieldState;
  formState: FormState<AddModelFormValues>;
  fieldPlaceholder?: string;
}
