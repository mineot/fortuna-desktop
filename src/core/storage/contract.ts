export interface User {
  id: string;
  name: string;
}

export interface Data {
  users: User[];
}

export const defaultData: Data = {
  users: [],
};

export const dataKeys = {
  USERS: 'users',
};
