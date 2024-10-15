import { isAxiosError } from "axios";
import { Credentials, LoginResponse } from "./auth.types";
import { growtwitterApi } from "../api.cliente-http";

export async function login(credentials: Credentials): Promise<LoginResponse> {
  try {
    const resposta = await growtwitterApi.post<LoginResponse>(
      "/auth/login",
      credentials
    );
    console.log("Resposta da API de login:", resposta.data); // Log da resposta da API
    return resposta.data;
  } catch (err: unknown) {
    if (isAxiosError(err)) {
      return err.response!.data as LoginResponse;
    }
    console.log(err);
    return {
      ok: false,
      message: "Erro ao realizar login",
    } as LoginResponse;
  }
}

export const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("name");
  localStorage.removeItem("username");
  localStorage.removeItem("avatar");
};
