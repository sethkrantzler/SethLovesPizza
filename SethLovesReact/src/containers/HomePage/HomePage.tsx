import React, { Component } from 'react';
import ReviewList from '../../components/ReviewList/ReviewList';
import HomePageHeader from '../../components/HomePageHeader/HomePageHeader';
import {ReviewCard} from '../../components/ReviewCard/ReviewCard';
import LoadScreen from '../../components/LoadScreen/LoadScreen';
import {ReviewCardRatingSection} from '../../components/ReviewCardRatingSection/ReviewCardRatingSection';

export default class HomePage extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {reviewList: null, isLoading: true};
    }
    componentDidMount(): void{
        const API = 'https://sheets.googleapis.com/v4/spreadsheets/1K0GcnJTFXXqIMGyD1-Ev_tdBW90XZsHugZlop45_6oA/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=AIzaSyCROwY_A9JF1hRCM19tH9CiEXSb9nRbeQY'
        fetch(API).then(response => response.json()).then((data)=>{
            console.log(data.value)
            let reviewCards: Array<JSX.Element> = [];
            for (let row=1; row<data.valueRanges[0].values.length; row++) {
                let reviewCardRatingSection: JSX.Element = <ReviewCardRatingSection 
                priceVal = {data.valueRanges[0].values[row][9]}
                boxVal = {data.valueRanges[0].values[row][10]}
                tasteVal = {data.valueRanges[0].values[row][11]}
                decorVal = {data.valueRanges[0].values[row][12]}
                overallVal = {data.valueRanges[0].values[row][13]}
                />
                let reviewCard: JSX.Element = <ReviewCard 
                name={data.valueRanges[0].values[row][0]}
                address={data.valueRanges[0].values[row][1]}
                neighborhoodLoc={data.valueRanges[0].values[row][2]}
                hasDelivery={data.valueRanges[0].values[row][3]}
                description={data.valueRanges[0].values[row][4]}
                reviewBody={data.valueRanges[0].values[row][5]}
                imageURL={data.valueRanges[0].values[row][6]}
                dateEaten={data.valueRanges[0].values[row][7]}
                didSethLovePizza={data.valueRanges[0].values[row][8]}
                rating={reviewCardRatingSection}
                />
                reviewCards.push(reviewCard);
            }
            this.setState({reviewList: reviewCards, isLoading: false})
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