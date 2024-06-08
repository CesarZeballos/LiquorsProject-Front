import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';

export default function HalfRating() {

  //estado global que contiene las reviews
  const ratingReview = useSelector((state: any) => state.reviews.data)
  console.log(ratingReview);
  
  return (
    <Stack spacing={1}>
      {/*deberia crear promedio de reviews de ratingReview y ponerlo en defaultValue. */}
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>
  );
}