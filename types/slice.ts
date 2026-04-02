interface AuthUser {
  uid: string;
  email: string | null;
}

export interface AuthInitialState {
  user: AuthUser | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}
