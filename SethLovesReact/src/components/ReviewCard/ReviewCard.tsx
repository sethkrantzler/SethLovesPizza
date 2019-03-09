import React from 'react';
import {IRatingObject, ReviewCardRatingSection} from '../ReviewCardRatingSection/ReviewCardRatingSection';
import './ReviewCardStyles.scss';

export interface IReviewCardProps {
  reviewInfo: IReviewInfo
}

// export class ReviewInfo implements IReviewInfo {
//   [key: string]: string|boolean|IRatingObject|Date;
//   name: string = "";
//   address: string = "";
//   neighborhoodLoc: string= "";
//   hasDelivery: boolean = false;
//   ratingVal: IRatingObject = {
//     priceVal: 0,
//     boxVal: 0,
//     decorVal: 0,
//     tasteVal: 0,
//     overallVal: 0
//   };
//   description: string= "";
//   reviewBody: string= "";
//   imageURL: string= "";
//   dateEaten: Date = new Date('1995-12-17T03:24:00');;
//   didSethLovePizza: boolean = false;

//   ReviewInfo(name: string, address: string, neighborhoodLoc: string, hasDelivery: boolean, 
//     ratingVal: IRatingObject, description: string, reviewBody: string, imageURL: string, 
//     dateEaten: Date, didSethLovePizza: boolean) {
//       this.name = name;
//       this.address = address;
//       this.neighborhoodLoc = neighborhoodLoc;
//       this.hasDelivery = hasDelivery;
//       this.ratingVal = ratingVal;
//       this.description = description;
//       this.reviewBody = reviewBody;
//       this.imageURL = imageURL;
//       this. dateEaten = dateEaten;
//       this.didSethLovePizza = didSethLovePizza;
//     }
// }
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
  [key: string]: string|boolean|IRatingObject|Date;
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
