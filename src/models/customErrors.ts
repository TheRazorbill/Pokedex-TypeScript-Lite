export class APIError extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "APIError";
  }
}
export class LocalBoxError extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "LocalBoxError";
  }
}