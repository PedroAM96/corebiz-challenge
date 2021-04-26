import imgCarousel01 from '../../assets/img-carousel-01.png'
import maskCarousel from '../../assets/mask-carousel.png'

//Fundo foto criado por snowing - br.freepik.com
import imgCarousel02 from '../../assets/img-carousel-02.jpg'

//Cartão de visita foto criado por ijeab - br.freepik.com
import imgCarousel03 from '../../assets/img-carousel-03.jpg'

//Cartão de visita foto criado por ijeab - br.freepik.com
import imgCarousel04 from '../../assets/img-carousel-04.jpg'

import Slider from 'infinite-react-carousel';

import { 
    Container,
    SliderContent
} from "./styles";

export function Carousel() {
    const settings =  {
        adaptiveHeight: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 8000,
        dots: true,
        shift: 40
      };

    return (
        <Container>
            <Slider id="Carousel" { ...settings }>
                <SliderContent>
                    <img src={maskCarousel} alt="Máscara" />
                    <img src={imgCarousel01} alt="Homem segurando cartão" />
                    <div>
                        <p>Olá, oque você está buscando?</p>
                        <p>Criar ou migrar seu e-commerce?</p>
                    </div>
                </SliderContent>
                <SliderContent>
                    <img src={maskCarousel} alt="Máscara" />
                    <img src={imgCarousel02} alt="Carinho de compras"/>
                    <div>
                        <p>O que é um site de E-commerce?</p>
                        <p>Loja online ou comércio eletrônico?</p>
                    </div>
                </SliderContent>
                <SliderContent>
                    <img src={maskCarousel} alt="Máscara" />
                    <img src={imgCarousel03} alt="Carinho de compras"/>
                    <div>
                        <p>Como funciona a venda em e-commerce?</p>
                        <p>Compra e venda realizada online?</p>
                    </div>
                </SliderContent>
                <SliderContent>
                    <img src={maskCarousel} alt="Máscara" />
                    <img src={imgCarousel04} alt="Homem segurando cartão"/>
                    <div>
                        <p>O que é preciso para montar um e-commerce?</p>
                        <p>Qual meu produto e público?</p>
                    </div>
                </SliderContent>
            </Slider>
        </Container>
    )
}