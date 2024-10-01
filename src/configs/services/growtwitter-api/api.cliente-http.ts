import axios from "axios";
import { Tweet } from "./tweet/tweet.types";

export const growtwitterApi = axios.create({
  baseURL: "http://localhost:8080",
});

export interface ResponseAPI<T> {
  ok: boolean;
  message: string;
  errors?: Array<{
    field: string;
    message: string;
  }>;
  data?: T;
  pagination?: {
    limit: number;
    page: number;
    count: number;
    totalPages: number;
  };
}

export interface TweetsResponse {
  ok: boolean;
  message: string;
  errors?: Array<{
    field: string;
    message: string;
  }>;
  tweets?: Tweet[];
  pagination?: {
    limit: number;
    page: number;
    count: number;
    totalPages: number;
  };
}
