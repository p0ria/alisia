import React, { useEffect, useRef, useState } from 'react';
import './Slider.scss';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

export default function Slider({ images = [], ...props }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const contentRef = useRef();

    useEffect(() => {
        console.log(currentIndex);
        contentRef.current.style.transform = `translateX(${-100 * currentIndex}%)`;
    }, [currentIndex])

    const moveNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    const movePre = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    return (
        <div className="Slider container">
            <div className="Slider__arrow Slider__arrow--left"
                disabled={currentIndex <= 0 ? true : null}
            >
                <RiArrowLeftSLine onClick={() => movePre()} />
            </div>
            <div className="content" ref={contentRef}>
                {
                    images.map((image, index) => (
                        <img key={index} src={image} width="100%" height="100%" />
                    ))
                }
            </div>
            <div className="Slider__arrow Slider__arrow--right"
                disabled={currentIndex >= images.length - 1 ? true : null}
            >
                <RiArrowRightSLine onClick={() => moveNext()} />
            </div>
        </div>
    )
}