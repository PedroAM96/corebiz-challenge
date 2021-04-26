import styled from 'styled-components';

export const Container = styled.header`
    position: sticky;
    height: 80px;
    background: #FFF;
    left: 0px;
    top: 0px;
    z-index: 10;

    @media screen and (max-width: 600px) {   
        height: 140px;
    }
`

export const Content = styled.div`
    height: 100%;
    max-width: 1268px;
    margin: 0 auto;
    padding: 0 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > img:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 600px) {   
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 50px auto; 
        margin: 0 auto;
        padding: 1rem;

        > img {
            width: 8rem;
        }
    }
`

export const SearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 718px;
    margin: 0 1rem 0;
    border-bottom: 1px solid #7A7A7A;
    transition: background-color 0.2s;
    transition: border-color 0.2s;

    &:focus-within{
        background-color: #F6F6F6;
        border-color: #585858;
    }

    input {
        color: var(--text-body);
        font-size: 0.815rem;
        background-color: transparent;
        padding: 0.4rem 0;
        width: inherit;
    }

    img:hover {
        cursor: pointer;
        filter: opacity(0.7);
    }

    @media screen and (max-width: 600px) {  
        background-color: #F6F6F6;
        border-radius: 25px;
        margin: 0;
        padding: 0.5rem 1rem;
        border: 1px solid #B1B1B1;

        &:focus-within{
            background-color: #F1F1F1;
            border-color: #585858;
        }
    }
`
export const UserContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 600px) {   
        position: absolute;
        right: 0;
        padding: 0.5rem 2rem;
    }
`

export const UserContent = styled.div`
    display: flex;
    width: max-content;
    margin: 0 1rem 0;
    cursor: pointer;

    img {
        margin: 0 0.5rem 0 0;
    }

    p {
        font-size: 0.815rem;
        color: var(--text-body);
    }

    &:hover{
        filter: brightness(0.7);
    }

    @media screen and (max-width: 600px) {
        margin: 0;

        img {
            width: 2.5rem;
            padding: 0.5rem;
            background-color: #F1F1F1;
            border-radius: 2rem;           
            object-fit: scale-down;
        }

        p {
            display: none;
        } 
    }
`
export const CartContent = styled.div`
    display: flex;
    width: max-content;
    margin: 0 1rem 0 1rem;
    cursor: pointer;

    img {
        margin: 0 0.5rem 0 0;
    }

    div {
        display: flex;
        flex-direction: column;
        font-size: 0.53rem;
        font-weight: 700;
        color: #FFF;

        text-align: center;
        vertical-align: middle;
        align-self: center;
        justify-content: center;

        background-color: var(--red);
        border-radius: 50%;
        width: 0.9rem;
        height: 0.9rem;
    }

    &:hover{
        filter: brightness(0.7);
    }

    @media screen and (max-width: 600px) {  
        margin: 0 1rem 0 1rem;

        img {
            width: 2.5rem;
            margin: 0;
            padding: 0.5rem;
            background-color: #F1F1F1;
            border-radius: 2rem;           
            object-fit: scale-down;
        }

        div {
            position: absolute;
            width: 1.6rem;
            height: 1.6rem;
            transform: translate(2rem, -1rem);
            font-size: 1rem;
        } 
    }
`
