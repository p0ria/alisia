import React from 'react';
import { Link } from 'react-router-dom';
import './TopNavItem.scss';

export default function TopNavItem({ title, url, active, ...props }) {
    return (
        <div className={`TopNavItem${active ? ' active' : ''}`}>
            <Link to={url}>{title}</Link>
        </div>
    )
}