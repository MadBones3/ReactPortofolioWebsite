import React from 'react';
//import components
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
//animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../Animation'

const AboutUs = () => {
    return(
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <AboutSection/>
        <ServiceSection/>
        <FaqSection/>
    </motion.div>
    )
}

export default AboutUs;