import React, { useState, useContext } from 'react';
import { Context } from '../Context/Context';
import './ChangeProfile.css'

export const ChangeProfile = () => {
    const [newUsername, setNewUsername] = useState("");
    const { setUsername } = useContext(Context);

    const handleChangeUsername = () => {
        setUsername(newUsername);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter new username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
            />
            <button onClick={handleChangeUsername}>Change Username</button>
        </div>
    );
};
