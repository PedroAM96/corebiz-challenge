import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    background: #FFF;
    height: 500px;

    @media screen and (max-width: 600px) {
        height: 400px;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1268px;
    width: 100%;
    margin: 1.5rem auto;
    padding: 0 1.5rem;

    @media screen and (max-width: 400px) {
        gap: 1rem;
        padding: 0 0.5rem;
    }
`

export const Title = styled.div`
    position: relative;
    width: 100%;
    font-weight: 900;
    font-size: 1.25rem;
    line-height: 1.5rem;
    padding-bottom: 0.6rem;
    margin-bottom: 1.5rem;

    &::before {  
        content: '';
        display: block;
        position: absolute;
        width: 6%;
        bottom: 0;
        border-bottom: 5px solid #C0C0C0;
    }
`

export const ProductSection = styled.section`
    display: flex;
    flex-direction: row;
`

export const CardContainer = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    width: 100%;
    height: 360px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: minmax(360px, 1fr) 360px;
    overflow: hidden;
    gap: 2rem;

    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 860px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 400px) {
        height: 295px;
        grid-template-rows: minmax(280px, 1fr) 280px;
        gap: auto;
    }
`


export const Card = styled.div`
    position: relative;
    max-width: 216px;
    background-color: #FFF;
    outline: 1px solid #FFF;
    margin: 0.1rem;
    transition: backfround-color 2s;

    &:hover {
        background-color: #E6E8EA;
        outline: 0.1rem dashed #E6E8EA;

        button {
            visibility: visible;
        }
    }

    @media screen and (max-width: 600px) {
        max-width: 120px;

        > img {
            width: 120px;
        }

        img + img {
            width: 50px;
        }
    }
`
export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0.7rem;

    button {
        visibility: hidden;
        width: 126px;
        height: 32px;
        background: #000;
        color: #FFF;
        font-size: 0.75rem;
        font-weight: 700;
        border-radius: 5px;
        margin-top: 0.5rem;

        &:hover{
            background-color: #333333;
        }
    }

    @media screen and (max-width: 600px) {
        button {
            width: 90px;
        }
    }
    @media screen and (max-width: 400px) {
        button {
            width: 90px;
            visibility: visible;
        }
    }
`
export const CardTitle = styled.p`
    font-weight: 600;
    font-size: 0.75rem;
    color: #7A7A7A;
`
export const CardRate = styled.div`
    @media screen and (max-width: 600px) {
        img {
            max-width: 13px!important;
        }
    }

    @media screen and (max-width: 320px) {
        img {
            max-width: 13px!important;
        }
    }
    
`
export const CardOldPrice = styled.p`
    height: 14px;
    font-weight: 400;
    font-size: 0.75rem;
    text-decoration: line-through;
    color: #7A7A7A;
`
export const CardPrice = styled.p`
    font-weight: 700;
    font-size: 1.125rem;
    color: #000000;

`
export const CardInstallments = styled.p`
    height: 14px;
    font-weight: 400;
    font-size: 0.7rem;
    color: #7A7A7A;

    @media screen and (max-width: 400px) {
        white-space: nowrap;
    }
`
export const Off = styled.img`
    position: absolute;
    top: 0;
    right: 0;

    @media screen and (max-width: 400px) {
        width: 12px;
    }
`

export const Dots = styled.div`
    visibility: hidden;
    position: absolute;
    top: 97%;
    right: 35%;

    p {
            width: 0.5rem;
            height: 0.5rem;
            margin: 0 0.5rem;
            border-radius: 0.5rem;
            background-color: var(--red);
            cursor: pointer;
        }

    div {
        display: flex;
        flex-direction: row;
        width: max-content;
        background-color: transparent;

        div {
            width: 0.5rem;
            height: 0.5rem;
            margin: 0 0.5rem;
            border-radius: 0.5rem;
            background-color: #BDBDBD;
            cursor: pointer;
        }
    }

    @media screen and (max-width: 400px) {
        visibility: visible;
    }
`

export const LeftArrow = styled.img`
    width: 12px;
    margin-right: 1.5rem;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
        background-color: #F7F7F7;
    }

    @media screen and (max-width: 400px) {
        display: none;
    }
`

export const RightArrow = styled.img`
    width: 12px;
    margin-left: 1.5rem;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
        background-color: #F7F7F7;
    }

    @media screen and (max-width: 400px) {
        display: none;
    }
`