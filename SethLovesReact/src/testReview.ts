import React from 'react';
import {IRatingObject} from './components/ReviewCardRatingSection/ReviewCardRatingSection';
import {IReviewCardProps, IReviewInfo} from './components/ReviewCard/ReviewCard';

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
  reviewBody: "Lorem ipsum dolor sit amet, duo persius sanctus oporteat ad. Cu vide etiam usu. Autem viris putant ne ius. Est corrumpit efficiendi necessitatibus an, alii ubique nostrud pro ne. Eum consul scribentur ut, mei ad amet vocibus, illud fabulas efficiendi eu vis. Mollis scripta suscipiantur usu cu. Ne cum reque deserunt. Pro no modus imperdiet, has justo accommodare ad. An sed modo tation, duo porro noluisse no, et nec eros pertinacia sententiae. In natum laoreet copiosae eam, quas debitis eu mei. Mea dicit appellantur eu, ad scribentur efficiantur complectitur sed. Feugait detraxit eu pri, eum errem tempor possit in. Ea putent sensibus democritum pri, has ne dictas singulis prodesset. Purto aperiam sea an, tale causae eu eos. Eam quod comprehensam id, eos eu dolores temporibus. Ius dictas detraxit eu, volumus forensibus in est. Has ad odio consequat, ad quaeque dolorum cum. Et nec unum semper consequuntur. Ut ornatus epicurei argumentum sed, eos an eripuit consequuntur. At sit veritus consequuntur, eu duo docendi expetenda voluptatum. Eum quod primis at, mei eruditi concludaturque vituperatoribus te, cu eam eius invidunt. His detraxit moderatius at, in has dicant volutpat. Ex alterum maiestatis sea. Cu laudem invidunt eos, cibo efficiantur eum te, diam inani in vis. Id omnes labore facete nam, latine fastidii at pri.",
  imageURL: "http://www.pmq.com/images/cache/cache_b/cache_3/cache_8/styling-lead-3ae7783b.jpeg?ver=1493261046&aspectratio=1.5009380863039",
  dateEaten: new Date(),
  didSethLovePizza: true,
}

export const testGetReviewsResponse: Array<IReviewInfo> = Array(4).fill(testReview);
