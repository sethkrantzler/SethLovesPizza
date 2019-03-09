import React from 'react';
import {ReviewCard} from '../ReviewCard/ReviewCard';
import './ReviewListStyles.scss';

export interface IReviewListProps {
    reviewList: Array<ReviewCard>
  }

export default class ReviewList extends React.Component<IReviewListProps, any> {
    constructor(props: IReviewListProps) {
        super(props);
        console.log(props);
    }

    public render() {
        return (
            <div className="review-list-holder">
                {this.props.reviewList}
            </div>
        );
    }
}