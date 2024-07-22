import React, { useContext } from 'react';
import { ChangeProfile } from '../Components/ChangeProfile';
import { Context } from '../Context/Context';
import './Profile.css'; // Import the CSS file

export const Profile = () => {
    const { username, setUsername } = useContext(Context);

    return (
        <div className="Profile">
            <div className="username">
                The user is {username}
            </div>
            <div className="ChangeProfileContainer">
                <ChangeProfile/>
            </div>
        </div>
    );
};
