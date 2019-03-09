import React from 'react';
import {ReviewCard, IReviewInfo} from '../ReviewCard/ReviewCard';

export interface IReviewListProps {
    reviewList: Array<IReviewInfo>
  }

export default class ReviewList extends React.Component<IReviewListProps, any> {
    constructor(props: IReviewListProps) {
        super(props);
        console.log(props);
    }

    public render() {

        const reviewComponentArray = this.generateReviewComponents(this.props.reviewList);

        return (
            <div id="holder">
                {reviewComponentArray}
            </div>
        );
    }

    generateReviewComponents(reviewList: Array<IReviewInfo>): Array<JSX.Element> {
        let componentsArray= Array<JSX.Element>();
        if (!reviewList) {
            return componentsArray;
        }
        for (var i = 0; i < reviewList.length ; i++) {
            const component: JSX.Element =
                <div id="holder" key={`id-${i}`}>
                    <ReviewCard reviewInfo = {reviewList[i]}/>
                </div>
            componentsArray.push(component);
        }
        return componentsArray;

    }
}