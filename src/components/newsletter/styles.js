import styled from "styled-components"

export const Container = styled.div`
    height: 146px;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 1.5rem;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 760px) {
        height: 286px;
        padding-top: 3rem;
    }
`

export const Title = styled.div`
    font-family: Lato;
    font-weight: bold;
    font-size: 1.4rem;
    display: flex;
    height: 1.4rem;
    align-items: center;
    color: #333333;

    @media screen and (max-width: 760px) {
        padding-bottom: 1rem;
    }
`

export const NewsForm = styled.form`
    display: flex;
    align-items: center;
    margin-top: 1rem;

    button {
        width: 140px;
        height: 48px;
        background-color: #000000;
        border-radius: 5px;
        font-family: Lato;
        font-weight: 700;
        font-size: 0.875rem;
        margin: 0.25rem;
        color: #FFF;

        &:hover{
            background-color: #333333;
        }
    }

    @media screen and (max-width: 760px) {
        flex-direction: column;
        button {
            width: 280px;
        }
    }
`

export const InputContainer = styled.div`
    width: 280px;
    height: 48px;
    border-radius: 5px;
    margin: 0 0.25rem;
    
    input {
        font-family: Lato;
        font-weight: 700;
        font-size: 0.75rem;
        padding: 1rem;
        width: 100%;
        border-radius: 5px;
        border: 1px solid ${props => (props.withError ? '#D7182A' : '#FFF')};

        &:focus {
            border: 1px solid #BDBDBD;
        }
    }

    p {
        color: var(--red);
        font-size: 0.75rem;
        font-weight: 400;
        margin-top: 0.25rem;
    }

    @media screen and (max-width: 760px) {
        margin-bottom: 1.8rem;
    }
`

export const Feedback = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;

    p {
        font-weight: 700;
        font-size: 0.825rem;
    }

    p + p {
        font-weight: 400;
        font-size: 0.7rem;
        padding-bottom: 1rem;
    }

    button {
        width: 320px;
        height: 48px;
        background-color: #000000;
        border-radius: 5px;
        font-family: Lato;
        font-weight: 700;
        font-size: 0.825rem;
        margin: 0.25rem;
        color: #FFF;

        &:hover{
            background-color: #333333;
        }
    }

    @media screen and (max-width: 400px) {
        p {
            text-align: center;
        }
        button {
            width: 240px;
        }
    }
`