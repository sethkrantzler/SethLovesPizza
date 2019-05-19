import React from 'react';
import './ReviewCardRatingSectionStyles.scss';
import { BoxLogo } from '../../svg/BoxLogo';
import { DecorLogo } from '../../svg/DecorLogo';
import { PriceLogo } from '../../svg/PriceLogo';
import { TasteLogo } from '../../svg/TasteLogo';
import { OverallLogo } from '../../svg/OverallLogo';

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

    const priceRating = this.generatePriceRating();
    const tasteRating = this.generateTasteRating();
    const decorRating = this.generateDecorRating();
    const boxRating = this.generateBoxRating();
    const overallRating = this.generateOverallRating();
    
    return (
      <div className="rating-holder">
      Ratings
        <div className="rating-object">
          Taste:{tasteRating}
        </div>
        <div className="rating-object">
          Price:{priceRating}
        </div>
        <div className="rating-object">
          Decor:{decorRating}
        </div>
        <div className="rating-object">
          Box:{boxRating}
        </div>
        <div className="rating-object">
          Overall:{overallRating}
        </div>
    </div>
    );
  }

  generatePriceRating() {
    let content = []
    for (let i = 0; i < this.props.priceVal; i++) {
      content.push(<PriceLogo key={i} />);
    }
    return content;
  }

  generateTasteRating() {
    let content = []
    for (let i = 0; i < this.props.tasteVal; i++) {
      content.push(<TasteLogo key={i} />);
    }
    return content;
  }

  generateBoxRating() {
    let content = []
    for (let i = 0; i < this.props.boxVal; i++) {
      content.push(<BoxLogo key={i} />);
    }
    return content;
  }

  generateDecorRating() {
    let content = []
    for (let i = 0; i < this.props.decorVal; i++) {
      content.push(<DecorLogo key={i} />);
    }
    return content;
  }

  generateOverallRating() {
    let content = []
    for (let i = 0; i < this.props.overallVal; i++) {
      content.push(<OverallLogo key={i} />);
    }
    return content;
  }
}
