import React from 'react';
import './Showcase.scss';
import showcaseImage from '../../assets/images/showcase.png';

export default function Showcase({ ...props }) {
    return (
        <div className="Showcase container">
            <img src={showcaseImage} alt="" />
            <div className="Showcase__content">
                <div className="category">
                    Sweater
                </div>
                <div className="description">
                    Winter Chunky Knit Sweater For Women
                </div>
            </div>
        </div>
    )
}