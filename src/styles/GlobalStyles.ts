import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    // 적용시킬 css 입력
    :root {
        --vh: 100%;
    }
    
    ${reset}

    * {
       box-sizing: border-box;
    }

    html {
        height: -webkit-fill-available;
    }

    body {
        font-family: 'Noto Sans KR', sans-serif;

        line-height: 1.5;
        font-weight: 400;
        letter-spacing: -1px;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;

        /*ios 모바일 화면 버그*/
        height: 100vh;
        height: var(--vh);
    }

    a {
        text-decoration: none;
        color: inherit;
    }
   
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 1rem;
        vertical-align: baseline;
    }

    h1, h2, h3, h4, h5, h6, p, div,
    dl, dt, dd, ol, ul, li, form, label, table {
        white-space: pre-wrap;
    }
    
    ol, ul {
        list-style: none;
    }

    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;

export default GlobalStyles;
