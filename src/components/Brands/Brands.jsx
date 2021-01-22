import React from 'react';
import './Brands.scss';

export default function Brands({ images = [], ...props }) {
    return (
        <div className="Brands container">
            {
                images.map((image, index) => (
                    <img key={index} src={image} />
                ))
            }
        </div>
    )
}