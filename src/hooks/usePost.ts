import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import http from "@/http/api";
import type { AxiosRequestConfig } from "axios";

const usePost = <T = any, D = any>(
  url: string,
  config?: AxiosRequestConfig
): UseMutationResult<T, Error, D> => {
  return useMutation({
    mutationFn: async (data: D) => {
      const res = await http.post<T>(url, data, config);
      return res.data;
    },
  });
};

export default usePost;