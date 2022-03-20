import { Rating, Stack, Typography } from "@mui/material";
import Image from "next/image";

export type Trip = {
  id: number;
  name: string;
  days: number;
  numberOfCountries: number;
  rating: number;
  imageUrl: string;
  price: number;
  previousPrice: number | null;
};

const formatter = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export const TripCard = ({
  name,
  days,
  numberOfCountries,
  rating,
  imageUrl,
  price,
  previousPrice,
}: Trip) => {
  return (
    <Stack
      position="relative"
      m={1}
      border="1px solid #f5f5f5"
      borderRadius={1}
      overflow="hidden"
      minWidth={290}
    >
      <Image src={imageUrl} alt={name} width={400} height={300} />
      <Stack m={1}>
        <Typography color="#888" fontWeight={800} fontSize={14}>
          {numberOfCountries} Countries, {days} Days
        </Typography>
        <Typography variant="h5" fontWeight={800} component="h2">
          {name}
        </Typography>
        <Stack direction="row" fontWeight={800} mt={2} mb={1}>
          <Rating
            name="rating"
            value={rating}
            readOnly
            sx={{ mr: 1, "& svg": { color: "rgb(255,235,11)" } }}
            precision={0.5}
          />
          {rating.toFixed(1)}
        </Stack>
        <Typography fontWeight={700} display="flex">
          From {formatter.format(price)} &bull;
          {previousPrice && (
            <Typography
              ml={1}
              color="#888"
              fontWeight={600}
              sx={{ textDecoration: "line-through" }}
            >
              Price {formatter.format(previousPrice)}
            </Typography>
          )}
        </Typography>
      </Stack>
    </Stack>
  );
};
