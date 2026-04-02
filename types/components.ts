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
export interface AccordionMenuProps extends LinkButtonProps {
  children?: React.ReactNode;
}
// diğer yazımı
// export interface AccordionMenuProps<T> extends LinkButtonProps {
//   children?: React.ReactNode;
// }
