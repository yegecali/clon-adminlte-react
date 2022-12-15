import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };
    a, p, span, div, li, *{
        font-family: 'Hind', sans-serif;
    }
    h1, h2, h3, h4, h5, h6{
        font-family: 'Montserrat', sans-serif;
    }
    body{
        color: ${({ theme }) => theme.text};
        background-color: ${({ theme }) => theme.body};
    }
`;
export default GlobalStyles;
