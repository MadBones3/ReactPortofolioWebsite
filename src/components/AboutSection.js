import React from 'react';
import home1 from '../img/home1.png';
//Styled
import styled from 'styled-components';
import {Layout, Description, Hide, Image} from '../styles';

const AboutSection = () => {
    return(
        <Layout>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span></h2>
                    </Hide>
                    <Hide>
                        <h2>come true</h2>
                    </Hide>
                </div>
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