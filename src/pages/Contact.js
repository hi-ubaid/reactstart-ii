import React from 'react';
import './Contact.css'; // Import the CSS file

export const Contact = () => {
    return (
        <div className="Contact">
            <h1>Contact</h1>
            <p>If you have any questions, feel free to reach out to us using the form below:</p>
            <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}
