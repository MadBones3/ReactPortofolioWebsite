import React from 'react';
import styled from 'styled-components';

import {Layout} from '../styles';

const FaqSection = () => {
    return(
        <FAQ>
            <h2>Any questions?</h2>
            <div className="question">
                <h4>How do i start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, praesentium?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily schedual</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, praesentium?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Payment methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, praesentium?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What products we offer</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, praesentium?</p>
                </div>
                <div className="faq-line"></div>
            </div>
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