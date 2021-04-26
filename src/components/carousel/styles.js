import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    background: #333333;
    height: 430px;

    @media screen and (max-width: 800px) {
        background-color: transparent;
        height: 300px;
    }

    @media screen and (max-width: 400px) {
        height: 200px;
    }

`

export const SliderContent = styled.div`
    display: flex!important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 430px;

    img {
        position: absolute;
        width: 53%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 2;
    }

    img + img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 40%;
        overflow: hidden;
        z-index: 1;
        object-fit: cover;
    }

    div {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 1240px;
        width: 100%;
    }

    p {
        position: relative;
        max-width: 500px;
        width: 100%;
        color: #FFF;
        line-height: 3rem;
        font-weight: 700;
        font-size: 1.9rem;
        padding: 0 3rem;
        z-index: 3;
    }

    p + p {
        position: relative;
        max-width: 500px;
        width: 100%;
        color: #FFF;
        line-height: 3rem;
        font-weight: 900;
        font-size: 2.8rem;
        padding: 0 3rem;
    }

    @media screen and (max-width: 1100px) {
        p {
            max-width: 400px;
            font-size: 1.4rem;
        }

        p + p {
            max-width: 400px;
            font-size: 2.3rem;
        }
    }

    @media screen and (max-width: 800px) {
        height: 300px;

        div {
            margin-bottom: 2rem;
        }

        p {
            font-size: 1.2rem;
            text-shadow: 1px 1px 2px black;
            max-width: 400px;
            line-height: 2rem;
            width: 100%;
        }

        p + p {
            font-size: 2rem;
            text-shadow: 1px 1px 2px black;
            max-width: 400px;
            line-height: 2rem;
            width: 100%;
        }

        img:first-child{
            visibility:hidden;
        }

        img + img {
            left: 0; 
            filter: brightness(50%);   
        }
    }

    @media screen and (max-width: 400px) {
        height: 200px;

        p {
            font-size: 1rem;
            max-width: 320px;
        }

        p + p {
            font-size: 1.6rem;
            max-width: 320px;
        }
    }
`