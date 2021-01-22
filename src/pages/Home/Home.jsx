import React from 'react';
import { brandImages, sliderImages } from '../../common/constants';
import Brands from '../../components/Brands/Brands';
import Header from '../../components/Header/Header';
import Showcase from '../../components/Showcase/Showcase';
import Slider from '../../components/Slider/Slider';
import './Home.scss';

export default function Home({ ...props }) {
    return (
        <div className="Home">
            <Header />
            <Slider images={sliderImages.map(image => `/assets/images/slider/${image}`)} />
            <Brands images={brandImages.map(image => `/assets/images/brands/${image}`)} />
            <Showcase />
        </div>
    )
}