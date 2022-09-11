import { apiSlice } from "../../config/apiSlice";
import { CAR_API } from "../../config/api";

const CAR_TAG = "CAR_TAG";
const defaultCar = {
  limit: 20,
  page: 1,
  categoryId: "63180c53d0953487569045c7",
};
const { CAR_CREATE, CAR_UPDATE } = CAR_API;

export const carSlice = apiSlice.injectEndpoints({
  reducerPath: "api",
  tagTypes: [CAR_TAG],
  endpoints: builder => ({
    getCars: builder.query({
      query: ({ limit, page }) => ({
        url: CAR_CREATE,
        method: "GET",
        params: {
          limit,
          page,
        },
      }),
      providesTags: [CAR_TAG],
    }),
    getCarCategory: builder.query({
      query: ({
        limit = defaultCar.limit,
        page = defaultCar.page,
        categoryId = defaultCar.categoryId,
      }) => {
        return {
          url: CAR_CREATE,
          method: "GET",
          params: {
            limit,
            page,
            categoryId,
          },
        };
      },
      providesTags: [CAR_TAG],
    }),
    getCarById: builder.query({
      query: id => ({
        url: `${CAR_CREATE}/${id}`,
        method: "GET",
      }),
      providesTags: [CAR_TAG],
    }),
    postCar: builder.mutation({
      query: car => {
        console.log(car);
        return {
          url: CAR_CREATE,
          method: "POST",
          body: car,
        };
      },
      invalidatesTags: [CAR_TAG],
    }),
    deleteCar: builder.mutation({
      query: id => {
        return {
          url: `${CAR_CREATE}/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [CAR_TAG],
    }),
    updateCar: builder.mutation({
      query: car => ({
        url: CAR_UPDATE(car.id),
        method: "PUT",
        body: car,
      }),
      invalidatesTags: [CAR_TAG],
    }),
  }),
});

export const {
  useGetCarsQuery,
  useGetCarCategoryQuery,
  useGetCarByIdQuery,
  useDeleteCarMutation,
  useUpdateCarMutation,
  usePostCarMutation,
} = carSlice;
