import imgCarousel01 from '../../assets/img-carousel-01.png'
import maskCarousel from '../../assets/mask-carousel.png'

import { 
    Container,
    TextContainer,
    IndexContainer
} from "./styles";

export function Carousel() {
    return (
        <>
            <Container>
                <img src={maskCarousel}></img>
                <TextContainer>
                    <p>Olá, oque você está buscando?</p>
                    <p>Criar ou migrar seu e-commerce?</p>
                </TextContainer>
                <IndexContainer>
                    <div></div>
                    <div></div>
                    <div></div>
                </IndexContainer>
            </Container>
        </>
    )
}