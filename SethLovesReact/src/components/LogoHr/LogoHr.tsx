import React from 'react';
import './LogoHr.scss';
import { PriceLogo } from '../../svg/PriceLogo';
import { BoxLogo } from '../../svg/BoxLogo';
import { TasteLogo } from '../../svg/TasteLogo';
import { OverallLogo } from '../../svg/OverallLogo';
import { DecorLogo } from '../../svg/DecorLogo';

export default class LogoHr extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div id="logo-span">
                <span>
                    <TasteLogo />
                    <PriceLogo />
                    <DecorLogo />
                    <BoxLogo />
                    <OverallLogo />
                </span>
            </div>
        );
    }
}