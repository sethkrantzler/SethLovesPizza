import React from 'react';
import {ReviewCardRatingSection} from '../ReviewCardRatingSection/ReviewCardRatingSection';
import './ReviewCardStyles.scss';
import LogoHr from '../LogoHr/LogoHr';

export interface IReviewCardProps {
  name: string;
  address: string;
  neighborhoodLoc: string;
  hasDelivery: boolean;
  rating: JSX.Element;
  reviewBody: string;
  imageURL: string;
  dateEaten: Date;
  didSethLovePizza: boolean;
}

export class ReviewCard extends React.Component<IReviewCardProps, any> {

  private ReviewRef = React.createRef<HTMLDivElement>();

  constructor(props: IReviewCardProps) {
    super(props);
    this.state = {isOpen: false, className: "review-card-closed"};
    this.OnPizzaBoxClick = this.OnPizzaBoxClick.bind(this);
  }

  OnPizzaBoxClick() : void {
    this.setState({isOpen: !this.state.isOpen, className: !this.state.isOpen ? "review-card-open" : "review-card-closed"});
  }


  public render() {
    return (
      <div ref={this.ReviewRef} className={this.state.className}>
        {!this.state.isOpen && <h1 className="review-card-name" onClick={this.OnPizzaBoxClick}>{ this.props.name }</h1>}
        {this.state.isOpen && 
        <div>
          <h1 className="review-card-name" onClick={this.OnPizzaBoxClick}>{ this.props.name }</h1>
          <div>
            <img className="review-card-img" src={this.props.imageURL}/>
            <div className="review-card-location-info">
              <div className="review-card-neighborhood">Neighborhood: { this.props.neighborhoodLoc }</div>
              <div className="review-card-address">{ this.props.address }</div>
            </div>
            <p className="review-card-review">{ this.props.reviewBody }</p>
          </div>
          <LogoHr />
        {this.props.rating}
        </div>}
      </div>
    );
  }
}
