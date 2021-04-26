import { useState } from "react";
import api from "../../services/api";
import * as Yup from "yup";

import {
    Container,
    Title,
    NewsForm,
    InputContainer,
    Feedback
} from "./styles";

export function Newsletter() {

    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');
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

    function handleNewEmail() {
        setFeedback(false);
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
            setFeedback(true);
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
            {!feedback && 
            <>
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
            </>}
            {feedback  && 
            <>
                <Feedback>
                    <p>Seu e-mail foi cadastrado com sucesso!</p>
                    <p>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
                    <button type="button" onClick={handleNewEmail}>Cadastrar novo e-mail</button>
                </Feedback>
            </>}
        </Container>
    )
}