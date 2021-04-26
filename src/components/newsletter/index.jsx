import { useState } from "react";
import api from "../../services/api";
import * as Yup from "yup";

import {
    Container,
    Title,
    NewsForm,
    InputContainer
} from "./styles";

export function Newsletter() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');

    function newsPost(data) {
        return api.post('newsletter', data);
    }

    function clearInput() {
        setName('');
        setEmail('');
        setErrorName('');
        setErrorEmail('');
    }

    async function handleNewsletter(event) {
        event.preventDefault();

        const data = {
            name,
            email
        };

        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('Preencha com seu nome completo'),
                email: Yup.string()
                    .email('Preencha com um e-mail válido')
                    .required('Preencha com seu e-mail')
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            newsPost(data);
            alert(`Cadastro no email ${email} realizado com sucesso!`);
            clearInput();

        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = {};
        
                err.inner.forEach(error => {
                    errors[error.path] = error.message;
                });
        
                setErrorName(errors.name);
                setErrorEmail(errors.email);
            }
        }
    }

    return (
        <Container>
            <Title>Participe de nossas news com promoções e novidades!</Title>
            <NewsForm onSubmit={handleNewsletter}>
                <InputContainer withError={errorName}>
                    <input
                        type="text"
                        placeholder="Digite seu nome"
                        value={name}
                        onChange={
                            event => {
                                setName(event.target.value);
                                setErrorName('');
                            }
                        }
                    />
                    {errorName && <p>{errorName}</p>}
                </InputContainer>
                <InputContainer withError={errorEmail}>
                    <input
                        type="text"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={
                            event => {
                                setEmail(event.target.value);
                                setErrorEmail('');
                            }
                        }
                    />
                    {errorEmail && <p>{errorEmail}</p>}
                </InputContainer>
                <button type="submit">
                    Eu quero!
                </button>
            </NewsForm>
        </Container>
    )
}