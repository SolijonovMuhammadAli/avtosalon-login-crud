import { apiSlice } from "../../config/apiSlice";
import { EMPLOYEE_API } from "../../config/api";

const { EMPLOYEE_LOGIN } = EMPLOYEE_API;

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: EMPLOYEE_LOGIN,
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
