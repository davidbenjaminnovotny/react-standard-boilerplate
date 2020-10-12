import React from 'react';

import Hero from './hero'
import Services from './services'
import Slider from './slider'
import Testimonials from './testimonials'


function Homepage() {
    return (
        <div className="homepage">
        <Hero/>
        <Slider/>
        <Services/>
        <Testimonials/>
        </div>
    );
}

export default Homepage;
