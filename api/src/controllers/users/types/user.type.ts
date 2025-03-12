import { User } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export type UserType = {
  username: string;
  password: string;
  email: string;
};

export type DataLimitType = {
  username: string;
  data_limit: Decimal;
};

export type DataUsedType = {
  username: string;
  data_used: Decimal;
};

export type UserResponse = Omit<User, "password">;
