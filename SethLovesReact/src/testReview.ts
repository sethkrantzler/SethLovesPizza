import React from 'react';
import {IRatingObject} from './components/ReviewCardRatingSection';
import {IReviewCardProps, IReviewInfo} from './components/ReviewCard';

const ratingObject: IRatingObject = {
  priceVal: 5,
  tasteVal: 5,
  speedVal: 5,
  decorVal: 3,
  boxVal: 4,
}

export const testReview: IReviewInfo = {
  name: 'Olympia Pizza',
  address: '1500 Queen Anne Ave N, Seattle, WA 98109',
  neighborhoodLoc: 'Queen Anne',
  hasDelivery: true,
  ratingVal: ratingObject,
  description: "Family-friendly Greek-style pizzeria with pies, pastas, sandwiches & Greek items plus patio seating.",
  reviewBody: "This is the body of the review This is the body of the review This is the body of the review This is the body of the review This is the body of the review This is the body of the review This is the body of the review This is the body of the review This is the body of the review This is the body of the review This is the body of the review This is the body of the review This is the body of the review This is the body of the review This is the body of the review This is the body of the review This is the body of the review This is the body of the review ",
  imageURL: "dont worry yet",
  dateEaten: Date,
  didSethLovePizza: true,
}
