export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}