import type { BaseResponse } from "@/types/response";
import type { Genre } from "./genre.type";
import { privateInstance } from "@/lib/axios";



export const getGenres = (): Promise<BaseResponse<Genre[]>> =>
  privateInstance.get("/admin/genres").then((res) => res.data);
