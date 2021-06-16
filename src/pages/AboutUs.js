import React from 'react';
//import components
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
import ScrollTop from '../components/ScrollTop';
//animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../Animation'

const AboutUs = () => {
    return(
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <AboutSection/>
        <ServiceSection/>
        <FaqSection/>
        <ScrollTop />
    </motion.div>
    )
}

export default AboutUs;