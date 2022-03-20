import { CircularProgress, Stack, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { Trip, TripCard } from "../components/TripCard";
import { useGetTrips } from "../hooks/useGetTrips";

const Container = () => {
  const { data, isLoading, error } = useGetTrips();

  if (error) return <>{error.message}</>;

  if (isLoading) return <CircularProgress />;

  if (!data) return <>No data</>;

  return (
    <>
      {data.data.map((trip) => (
        <TripCard key={trip.id} {...trip} />
      ))}
    </>
  );
};

const Home: NextPage = () => {
  return (
    <Stack my={10} alignItems="center" maxWidth="1300px" mx="auto">
      <Head>
        <title>Recently viewed trips</title>
      </Head>
      <header>
        <Typography variant="h6" fontWeight={900} component="h1" mb={5}>
          Recently viewed trips
        </Typography>
      </header>
      <Stack component="main" flexWrap="wrap" direction="row" alignItems="center" justifyContent="center">
        <Container />
      </Stack>
    </Stack>
  );
};

export default Home;
