import axios, { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { Trip } from "../components/TripCard";

export const useGetTrips = () =>
  useQuery<AxiosResponse<Trip[]>, AxiosError>(
    ["trips"],
    () => axios.get<Trip[]>(`/api/trips`),
    { staleTime: Infinity }
  );
