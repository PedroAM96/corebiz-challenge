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

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }

        /* @media (max-width: 600px) {
            font-size: 83.75%;
        }

        @media (max-width: 320px) {
            font-size: 77.5%;
        } */
    }

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

    .carousel-item {
        overflow: hidden;
    }

    .carousel-dots {
        position: absolute;
        transform: translateY(-60px);
        z-index: 9;
    }

    .carousel-dots li.carousel-dots-active button::before {
        color: var(--red);
        opacity: 1;
    }

    .carousel-dots {
        li {
            button::before {
                color: #BDBDBD;
                opacity: 1;
            }
        }
    }

    @media screen and (max-width: 800px) {
        .carousel-dots {
        li {
            button::before {
                color: white;
                opacity: 1;
            }
        }
    }
    }
` 