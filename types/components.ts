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
  icon?: string;
}
