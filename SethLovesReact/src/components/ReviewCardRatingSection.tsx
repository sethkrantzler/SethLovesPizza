import React from 'react';

export interface IRatingSectionProps {
  ratingValues: IRatingObject;
}

export interface IRatingObject {
  priceVal: number;
  tasteVal: number;
  speedVal: number;
  decorVal: number;
  boxVal: number;
}
export class ReviewCardRatingSection extends React.Component<IRatingSectionProps, any> {
  constructor(props: IRatingSectionProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <p>{this.props.ratingValues.priceVal}/5</p>
        <p>{this.props.ratingValues.tasteVal}/5</p>
        {this.props.ratingValues.speedVal   ? <p>{this.props.ratingValues.speedVal}/5</p> : null}
        {this.props.ratingValues.decorVal   ? <p>{this.props.ratingValues.decorVal}/5</p> : null}
        {this.props.ratingValues.boxVal     ? <p>{this.props.ratingValues.boxVal}/5</p> : null}
      </div>
    );
  }
}
