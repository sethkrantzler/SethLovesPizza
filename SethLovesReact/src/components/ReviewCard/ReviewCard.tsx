import React from 'react';
import {IRatingObject, ReviewCardRatingSection} from '../ReviewCardRatingSection/ReviewCardRatingSection';
import './ReviewCardStyles.scss';

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
export class ReviewCard extends React.Component<IReviewCardProps, any> {
  constructor(props: IReviewCardProps) {
    super(props);
    console.log(props);
  }

  public render() {
    return (
      <div className="review-card-holder">
        <h1 className="review-card-name">{ this.props.reviewInfo.name }</h1>
        <p className="review-card-description">{ this.props.reviewInfo.description }</p>
        <div>
          <img className="review-card-img" src={this.props.reviewInfo.imageURL}/>
          <div className="review-card-location-info">
            <div className="review-card-neighborhood">Neighborhood: { this.props.reviewInfo.neighborhoodLoc }</div>
            <div className="review-card-address">{ this.props.reviewInfo.address }</div>
          </div>
        </div>
        <p className="review-card-review">{ this.props.reviewInfo.reviewBody }</p>
        <ReviewCardRatingSection ratingValues={this.props.reviewInfo.ratingVal}/>
      </div>
    );
  }
}
