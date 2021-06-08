import React from 'react';
import home1 from '../img/home1.png';
//Styled
import styled from 'styled-components';
import {Layout, Description, Hide, Image} from '../styles';
//framer motion
import {motion} from 'framer-motion';

const AboutSection = () => {

    return(
        <Layout>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 >your <span>dreams</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 >come true</motion.h2>
                    </Hide>
                </motion.div>
                <p>Contact us for more information and ideas you have. We have professionals with amazing skills!</p>
                <button>Contact us</button>
            </Description>
            <Image>
                <img src={home1} alt="man with camera" />
            </Image>
        </Layout>
    )
}

//Styled Component


export default AboutSection;