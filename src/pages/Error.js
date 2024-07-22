import React from 'react';
import { useParams } from 'react-router-dom';
import './Error.css'; // Import the CSS file

export const Error = () => {
    let { page } = useParams();

    return (
        <div className="Error">
            <h1>Error 404: {page} page is Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    );
};
