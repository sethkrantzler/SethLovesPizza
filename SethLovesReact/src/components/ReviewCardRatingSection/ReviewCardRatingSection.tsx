import React from 'react';

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
      <div>
        <p>{this.props.priceVal}/5</p>
        <p>{this.props.tasteVal}/5</p>
        {this.props.decorVal   ? <p>{this.props.decorVal}/5</p> : null}
        {this.props.boxVal     ? <p>{this.props.boxVal}/5</p> : null}
        {this.props.overallVal     ? <p>{this.props.overallVal}/5</p> : null}
      </div>
    );
  }
}
