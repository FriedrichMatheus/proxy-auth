export type ErrorType = {
  message: string;
  code: number;
};

export const isErrorType = (obj: any): obj is ErrorType => {
  return typeof obj === "object" && "message" in obj && "code" in obj;
};
