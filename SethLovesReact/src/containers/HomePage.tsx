import React, { Component } from 'react';
import ReviewList from '../components/ReviewList';
import {testGetReviewsResponse} from '../testReview';
import HomePageHeader from '../components/HomePageHeader';

export default class HomePage extends React.Component<any, any> {
    public render () {
        return (
            <>
                <HomePageHeader/>
                <ReviewList reviewList={testGetReviewsResponse}/>
            </>

        )
    }
}