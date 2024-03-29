export type CreateUserInput = {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
};

export type CreateUserResponse = {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
};
