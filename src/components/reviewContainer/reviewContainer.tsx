"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "@/utils/getReviews";
import { Review } from "../review/review";
import { IReview } from "@/interfaces/interfaz";
import { RootState } from "@/store/store";

export const ReviewContainer: React.FC = () => {
  const dataReviews: IReview[] = useSelector(
    (state: RootState) => state.reviews.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    fetchReviews(dispatch);
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-4 rounded-xl">
      {dataReviews.map((review: IReview) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};
