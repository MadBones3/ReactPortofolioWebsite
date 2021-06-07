import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #1b1b1b;
        font-family: 'Inter', sans-serif;
        /* font-family: 'Lobster', cursive; */
    }
    button {
        cursor: pointer;
        font-weight: bold;
        font-size: 1.1rem;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: #fff;
        font-family: 'Inter', sans-serif;
        transition: all 0.5s ease;
        &:hover {
            background-color: #23d997;
            color: #fff;
        }
    }
    h2 {
            font-weight: lighter;
            font-size: 4rem;
        }
        h3 {
            color: #fff;
        }
        h4 {
            font-weight: bold;
            font-size: 2rem;
        }
        span {
            font-weight: bold;
            color: #23d997;
        }
        a {
            font-size: 1.1rem;
        }
        p {
            color: #ccc;
            padding: 3rem 0rem;
            font-size: 1.4rem;
            line-height: 150%;
        }
`;

export default GlobalStyle;
