import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { topNavItems } from '../../../common/constants';
import './TopNav.scss';
import TopNavItem from './TopNavItem/TopNavItem';

export default function TopNav({ ...props }) {
    const match = useRouteMatch();
    console.log(match);
    return (
        <div className="TopNav">
            {
                topNavItems.map((item, index) => (
                    <TopNavItem
                        key={index}
                        title={item.title}
                        url={item.url}
                        active={match.path === item.url}
                    />
                ))
            }
        </div>
    )
}