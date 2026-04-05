import { ImageSourcePropType } from "react-native";

export interface AddModelFormValues {
  key: string;
  model: string;
  rs: boolean;
  image: ImageSourcePropType | null;
  materialCode: number | null;
}
export interface AddCompanyFormValues {
  flag: string;
  name: string | null;
}
