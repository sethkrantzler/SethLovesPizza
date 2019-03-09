import React, { Component } from 'react';
import ReviewList from '../../components/ReviewList/ReviewList';
import {testGetReviewsResponse, testReview} from '../../testReview';
import HomePageHeader from '../../components/HomePageHeader/HomePageHeader';
import {IReviewInfo} from '../../components/ReviewCard/ReviewCard';
import LoadScreen from '../../components/LoadScreen/LoadScreen';

export default class HomePage extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {reviewList: null, isLoading: true};
    }
    componentDidMount(): void{
        const API = 'https://sheets.googleapis.com/v4/spreadsheets/1K0GcnJTFXXqIMGyD1-Ev_tdBW90XZsHugZlop45_6oA/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=AIzaSyCROwY_A9JF1hRCM19tH9CiEXSb9nRbeQY'
        fetch(API).then(response => response.json()).then((data)=>{
            console.log(data.value)
            let keyMap:Array<string> = data.valueRanges[0].values[0];
            let reviewResults: Array<IReviewInfo> = [];
            for (let row=1; row<data.valueRanges[0].values.length; row++) {
                let reviewInfo:IReviewInfo = testReview;
                for (let i=0; i<data.valueRanges[0].values[row].length; i++) {
                    let val = data.valueRanges[0].values[row][i];
                    if (val === "TRUE" || val === "FALSE") {
                        val = val == "TRUE" ? true : false;
                    }
                    reviewInfo[keyMap[i]] = val;
                }
                reviewResults.push(reviewInfo);
            }
            console.log(reviewResults);
            this.setState({reviewList: reviewResults, isLoading: false})
        })
      }
    

    displayErrorMessage(): void{
    
      };

    render () {

        return (
            <>
                <HomePageHeader/>
                {this.state.isLoading && <LoadScreen/>}
                {this.state.reviewList && <ReviewList reviewList={this.state.reviewList}/>}
            </>

        )
    }
}