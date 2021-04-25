import styled from "styled-components";

export const Container = styled.div`
    background: red;
    height: 430px;
`

export const TextContainer = styled.div`
    position: absolute;
    top: 14rem;
    left: 5rem;
    max-width: 460px;

    p {
        color: #FFF;
        line-height: 3rem;
    }

    p:first-child {
        font-weight: 700;
        font-size: 1.88rem;
        color: #FFF;
    }

    p:last-child {
        font-weight: 900;
        font-size: 2.8rem;
    }
`

export const IndexContainer = styled.div`
    position: absolute;
    display: flex;
    top: 50%;
    right: 50%;

    div {
        width: 0.6rem;
        height: 0.6rem;
        margin: 0.5rem;
        background-color: red;
        border-radius: 2rem; 
    }
`