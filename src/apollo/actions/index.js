import {
  useQuery,
} from "@apollo/client";

import {
  GET_DOGS,
  GET_DOG_PHOTO
} from "../queries"

export const useGetDog = () => useQuery(GET_DOGS);
export const useGetDogPhoto = options => useQuery(GET_DOG_PHOTO, options);