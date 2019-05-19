import React, { Component } from 'react';
import './HomePageHeaderStyles.scss'
import LogoHr from '../LogoHr/LogoHr';

export default class HomePageHeader extends React.Component<any, any> {
    public render () {
        return (
            <div>
                <h1 className="home-page-header-title">seth loves pizza</h1>
                <LogoHr />
                <div className="home-page-header-description">I, Seth, love pizza. I also like writing about how much I love some pizza. Maybe i've even written about pizza that you love, check out all the pizzas i've loved below</div>
                <LogoHr />            
            </div>
        )
    }
}