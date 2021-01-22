import React, { useState } from 'react';
import { RiNotification3Line } from 'react-icons/ri';
import { RiHeart3Line } from 'react-icons/ri';
import './HeaderActions.scss';
import avatar from '../../../assets/images/avatar.png';

export default function HeaderActions({ ...props }) {
    const [hasNotifications, setHasNotifications] = useState(true);
    return (
        <div className="HeaderActions">
            <div className="HeaderActions__action HeaderActions__action__heart">
                <RiHeart3Line />
            </div>
            <div className={`HeaderActions__action HeaderActions__action__notification${hasNotifications ? ' has-notifications' : ''}`}
                data-count={3}
            >
                <RiNotification3Line />
            </div>
            <div className="HeaderActions__action HeaderActions__action__avatar">
                <img src={avatar} />
            </div>
        </div >
    )
}