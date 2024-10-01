import { isAxiosError } from "axios";
import { growtwitterApi, TweetsResponse } from "../api.cliente-http";
import { ListAllRequestParams } from "./tweet.types";

export async function listProfile(params: ListAllRequestParams) {
  try {
    const authToken = params.token.replaceAll('"', "");

    const resposta = await growtwitterApi.get("/tweets", {
      headers: {
        Authorization: authToken,
      },
    });

    return resposta.data as TweetsResponse;
  } catch (err: unknown) {
    if (isAxiosError(err)) {
      return err.response!.data as TweetsResponse;
    }

    console.log(err);
    return {
      ok: false,
      message: "Erro ao listar os tweets",
    };
  }
}
