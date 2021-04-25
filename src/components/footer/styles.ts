import styled from "styled-components"

export const Container = styled.footer`
    width:100%;
    height: 214px;
    background-color: #000;

    @media screen and (max-width: 700px) {  
        height: 300px;
    }

    @media screen and (max-width: 550px) {  
        height: 420px;
    }
`

export const Content = styled.footer`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1268px;
    padding: 2rem 1rem;

    @media screen and (max-width: 700px) {  
        display: grid;
        grid-template: "a b" 200px
                       "c c" 1fr
                        / auto 1fr;
    }

    @media screen and (max-width: 550px) {  
        display: flex;
        flex-direction: column;
    }
`

export const InfoContainer = styled.div`
    padding: 0 2rem;

    p {
        color: #FFF;
        font-size: 0.815rem;
        line-height: 1.5rem;
    }

    p:first-child {
        position: relative;
        width: max-content;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.5rem;
        padding-bottom: 1.2rem;
        margin-bottom: 1.2rem;

        &::before {  
            content: '';
            display: block;
            position: absolute;
            width: 40%;
            bottom: 0;
            border-bottom: 5px solid #fff;
        }
    }

    @media screen and (max-width: 700px) {  
        grid-area: a;
    }
`

export const CallToActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: inherit;
    align-items: center;
    justify-content: center;

    button {
        display: flex;
        align-items: center;
        width: 195px;
        height: 38px;
        background: #FFF;
        border-radius: 5px;
        margin-bottom: 1rem;
        padding: 0.4rem 1rem;

        &:hover{
            filter: brightness(0.7);
        }

        p {
            width:200px;
            font-size: 0.815rem;
            font-weight: 600;
        }

        img {
            padding-right: 0.8rem;
        }
    }

    @media screen and (max-width: 700px) {  
        grid-area: b;
    }

    @media screen and (max-width: 550px) {  
        margin-top: 1.5rem;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 700px) {  
        grid-area: c;
    }
`

export const LogoContent = styled.div`
    padding: 0.2rem 0.5rem;

    p {
        font-size: 0.65rem;
        color: #FFF;
    }
`
