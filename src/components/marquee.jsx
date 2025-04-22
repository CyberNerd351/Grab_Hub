import React from 'react';
import './Marquee.css'; // Import the new CSS file for styling

const Marquee = () => {
    return (
        <div className="marquee-container">
            <marquee behavior="scroll" direction="left" className="marquee-text">
                <span className="highlight-text">Thank you for visiting Grab Hub!</span> The Home of the Best Meals. <span className="highlight-text">Order Now and Taste the Excellence!</span> Fast, Fresh, and Always Delicious!
            </marquee>
        </div>
    );
};

export default Marquee;
