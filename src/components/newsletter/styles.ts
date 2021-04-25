import styled from "styled-components"

export const Container = styled.div`
    height: 146px;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 1.5rem;
    align-items: center;

    @media screen and (max-width: 700px) {
        height: 246px;
    }
`

export const Title = styled.div`
    font-family: Lato;
    font-weight: bold;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    color: #333333;

    @media screen and (max-width: 700px) {
        font-size: 1rem;
    }
`

export const NewsForm = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;

    button {
        width: 140px;
        height: 48px;
        background: #000000;
        border-radius: 5px;
        font-family: Lato;
        font-weight: 700;
        font-size: 0.875rem;
        margin: 0.25rem;
        color: #FFF;
    }

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`

export const Input = styled.div`
    width: 280px;
    height: 48px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 0.25rem;
    
    input {
        font-family: Lato;
        font-weight: 700;
        font-size: 0.75rem;
        padding: 1rem;
        width: 100%;
    }
`