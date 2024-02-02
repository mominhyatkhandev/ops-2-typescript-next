type TLoginUser = {
  name: string;
  email: string;
};

type TLogin = {
  user: TLoginUser | null;
  apiKey: string;
  apiSecret: string;
  jwt: string | undefined;
  loading: boolean;
  success: boolean;
  isAuthenticated: boolean;
};
