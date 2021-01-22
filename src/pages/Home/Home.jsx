import React from 'react';
import Header from '../../components/Header/Header';
import './Home.scss';

export default function Home({ ...props }) {
    return (
        <div className="Home">
            <Header></Header>
        </div>
    )
}