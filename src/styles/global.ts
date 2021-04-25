import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #FFFFFF;
        --text-body: #7A7A7A;
        --text-inner-input: #585858;

        --red: #F8475F;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    } */

    body {
        -webkit-font-smooth: antialiased;    
    }

    body, input, text-area, button {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
    }

    input, text-area, button {
        border: 0;
        outline: 0;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
` 