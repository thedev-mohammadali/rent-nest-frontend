export class ApiError extends Error {
  statusCode: number;
  data?: unknown;

  constructor(message: string, statusCode: number, data?: unknown) {
    super(message);

    this.statusCode = statusCode;
    this.name = "ApiError";
    this.data = data;
  }
}
