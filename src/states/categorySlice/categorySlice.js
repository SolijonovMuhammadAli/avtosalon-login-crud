import { apiSlice } from "../../config/apiSlice";
import { CATEGORY_API } from "../../config/api";

const CATEGORY_TAG = "CATEGORY";

const { CATEGORY_MARKA, CATEGORY_UPDATE, CATEGORY_DELETE, CATEGORY_CREATE } =
  CATEGORY_API;

export const categorySlice = apiSlice.injectEndpoints({
  reducerPath: "api",
  tagTypes: [CATEGORY_TAG],
  endpoints: builder => ({
    getCategoy: builder.query({
      query: ({ limit, page }) => {
        return {
          url: CATEGORY_MARKA,
          method: "GET",
          params: {
            limit,
            page,
          },
        };
      },
      providesTags: [CATEGORY_TAG],
    }),
    postCategory: builder.mutation({
      query: category => ({
        url: CATEGORY_CREATE,
        method: "POST",
        body: category,
      }),
      invalidatesTags: [CATEGORY_TAG],
    }),
    deleteCategroy: builder.mutation({
      query: ({ id }) => ({
        url: CATEGORY_DELETE(id),
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: [CATEGORY_TAG],
    }),
    updateCategroy: builder.mutation({
      query: category => ({
        url: CATEGORY_UPDATE,
        method: "PUT",
        body: category,
      }),
      invalidatesTags: [CATEGORY_TAG],
    }),
  }),
});

export const {
  useGetCategoyQuery,
  useDeleteCategroyMutation,
  useUpdateCategroyMutation,
  usePostCategoryMutation,
} = categorySlice;
