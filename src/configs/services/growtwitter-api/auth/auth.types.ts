export interface Credentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  ok: boolean;
  message: string;
  authToken?: string;
  user?: {
    username: string;
    name: string;
    avatar?: string;
    // Adicionar outras propriedades do usuário conforme necessário
  };
}
