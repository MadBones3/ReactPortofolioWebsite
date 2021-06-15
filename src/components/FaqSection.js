import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import {AnimateSharedLayout} from "framer-motion";
import {scrollReveal} from '../Animation';
import {useScroll} from './useScroll';

import {Layout} from '../styles';

const FaqSection = () => {
    const [element, controls] = useScroll();
    return(
        <FAQ variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <h2>Any questions?</h2>
            <AnimateSharedLayout>
                <Toggle title="How do I start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, praesentium?</p>
                    </div>
                </Toggle>
                <Toggle title="Daily schedual">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, praesentium?</p>
                    </div>
                </Toggle>
                <Toggle title="Payment methods">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, praesentium?</p>
                    </div>
                </Toggle>
                <Toggle title="What products we offer">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, praesentium?</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </FAQ>
    )
}

// renaming layout to FAQ so can edit it specifically for this page
const FAQ = styled(Layout)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question P{
        cursor: pointer;
        padding: 3rem 0rem;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;
export default FaqSection;