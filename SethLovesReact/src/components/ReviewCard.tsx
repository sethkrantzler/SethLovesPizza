import React from 'react';
import {IRatingObject, ReviewCardRatingSection} from './ReviewCardRatingSection';

export interface IReviewCardProps {
  reviewInfo: IReviewInfo
}

export interface IReviewInfo {
  name: string;
  address: string;
  neighborhoodLoc: string;
  hasDelivery: boolean;
  ratingVal: IRatingObject;
  description: string;
  reviewBody: string;
  imageURL: string;
  dateEaten: Date;
  didSethLovePizza: boolean;
}
export default class ReviewCard extends React.Component<IReviewCardProps, any> {
  constructor(props: IReviewCardProps) {
    super(props);
    console.log(props);
  }

  public render() {
    return (
      <div id="holder">
      <h1>{ this.props.reviewInfo.name }</h1>
      <h2>{ this.props.reviewInfo.address }</h2>
      <h3>{ this.props.reviewInfo.neighborhoodLoc }</h3>
      <p id="pcolor2">{ this.props.reviewInfo.description }</p>
      <p id="pcolor2">{ this.props.reviewInfo.reviewBody }</p>
      <ReviewCardRatingSection ratingValues={this.props.reviewInfo.ratingVal}/>
      </div>
    );
  }
}
