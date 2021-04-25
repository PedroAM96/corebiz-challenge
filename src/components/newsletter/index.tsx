import {
    Container,
    Title,
    NewsForm,
    Input
} from "../newsletter/styles";

export function Newsletter() {
    return (
        <Container>
            <Title>Participe de nossas news com promoções e novidades!</Title>
            <NewsForm>
                <Input>
                    <input type="text" placeholder="Digite seu nome"/>
                </Input>
                <Input>
                    <input type="text" placeholder="Digite seu nome"/>
                </Input>
                <button type="button">
                    Eu quero!
                </button>
            </NewsForm>
        </Container>
    )
}