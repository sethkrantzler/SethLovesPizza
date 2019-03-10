import React from 'react';
import './ReviewCardRatingSectionStyles.scss';

export interface IRatingSectionProps {
  priceVal: number;
  tasteVal: number;
  decorVal: number;
  boxVal: number;
  overallVal: number;
}

export class ReviewCardRatingSection extends React.Component<IRatingSectionProps, any> {
  constructor(props: IRatingSectionProps) {
    super(props);
  }

  public render() {
    return (
      <div className="rating-holder">
        <div className="rating-object">
          <p>Price: {this.props.priceVal}/5</p>
        </div>
        <div className="rating-object">
          <p>Taste: {this.props.tasteVal}/5</p>
        </div>
        {this.props.decorVal   ? <div className="rating-object">
          <p>Decor: {this.props.decorVal}/5</p>
        </div> : null}
        {this.props.boxVal     ? <div className="rating-object">
          <p>Box: {this.props.boxVal}/5</p>
        </div> : null} 
        <div className="rating-object">
          <p>Overall: {this.props.overallVal}/5</p>
        </div>

      </div>
    );
  }
}
