import React, { useContext } from 'react';
import { Context } from '../Context/Context';
import './Home.css'; // Import the CSS file
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export const Home = () => {
    const { username } = useContext(Context);
    const { data, error, isLoading } = useQuery({
        queryKey: ["excuse"],
        queryFn: async () => {
            const response = await Axios.get("https://excuser-three.vercel.app/v1/excuse/");
            console.log(response.data); // Log the response data to the console
            return response.data;
        },
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const handleClickEffect = () => {
        return data?.[0]?.excuse;
    }

    return (
        <div className="Home">
            <h1>This is Home Page</h1>
            <p>The user is {username}</p>
            <p>{data?.[0]?.excuse || "No excuse found"}</p>
            <button onClick={handleClickEffect}>Another Excuse?</button>
        </div>
    );
};
