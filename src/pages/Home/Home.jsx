import React from 'react';
import { sliderImages } from '../../common/constants';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import './Home.scss';

export default function Home({ ...props }) {
    return (
        <div className="Home">
            <Header />
            <Slider images={sliderImages.map(image => `/assets/images/slider/${image}`)} />
        </div>
    )
}