export interface CommonResponse<Type> {
  status: number;
  message: string;
  data: Type;
}
