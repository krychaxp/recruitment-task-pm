import type { NextApiRequest, NextApiResponse } from "next";
import faker from "faker";
import type { Trip } from "../../components/TripCard";
import { getRandomNumber } from "../../utils/getRandomNumber";

const numberOfTrips = 5;

const func = (req: NextApiRequest, res: NextApiResponse<Trip[]>) => {
  const trips: Trip[] = Array.from({ length: numberOfTrips }).map((_, i) => {
    const price = getRandomNumber(100, 3000);

    return {
      id: i + 1,
      name: faker.address.city(),
      days: getRandomNumber(1, 30),
      numberOfCountries: getRandomNumber(1, 11),
      rating: getRandomNumber(10, 50) / 10,
      imageUrl: `https://source.unsplash.com/400x300/?city&id=${i}`,
      price,
      previousPrice:
        Math.random() < 0.5 ? null : price + getRandomNumber(100, 1000),
    };
  });

  res.status(200).json(trips);
};

export default func;
