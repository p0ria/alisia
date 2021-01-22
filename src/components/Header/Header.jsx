import React from 'react';
import './Header.scss';
import HeaderActions from './HeaderActions/HeaderActions';
import TopNav from './TopNav/TopNav';

export default function Header({ ...props }) {
    return (
        <div className="Header container">
            <div className="Header__logo">
                Alisia
            </div>
            <TopNav />
            <HeaderActions />
        </div>
    )
}