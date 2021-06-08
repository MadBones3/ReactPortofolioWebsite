import React from 'react';
import home1 from '../img/home1.png';
//Styled
import styled from 'styled-components';
import {Layout, Description, Hide, Image} from '../styles';
//framer motion
import {motion} from 'framer-motion';
import {titleAnim, fade, photoAnim} from "../Animation";
import Wave from "./Wave";

const AboutSection = () => {

    return(
        <Layout>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>come true</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for more information and ideas you have. We have professionals with amazing skills!</motion.p>
                <motion.button variants={fade}>Contact us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="man with camera" />
            </Image>
            <Wave/>
        </Layout>
    )
}

//Styled Component found in global styles.js


export default AboutSection;