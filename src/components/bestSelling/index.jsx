import PropTypes from 'prop-types';

import iconRArrow from '../../assets/icon-right-arrow.svg'
import iconLArrow from '../../assets/icon-left-arrow.svg'
import iconStar from '../../assets/icon-star.svg'
import iconStarOut from '../../assets/icon-star-outline.svg'
import flagOFF from '../../assets/flag-off.svg'

import { 
    Container,
    Content,
    Title,
    ProductSection,
    CardContainer,
    LeftArrow,
    RightArrow,
    Card,
    Infos,
    CardTitle,
    CardRate,
    CardOldPrice,
    CardPrice,
    CardInstallments,
    Off,
    Dots
} from "./styles";

import { useEffect, useState } from 'react';
import api from '../../services/api';

function valueInBRL(value) {
    if(value && value != 0) {
        var formatDecimals = value/100;
        var valueBRL = formatDecimals.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        console.log(valueBRL);
    } else {
        var valueBRL = null;
    }
    return valueBRL;
};

export function BestSelling({ addCart }) {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      api.get('products').then(response => {
        console.log(response.data);
        setItems(
          response.data.map(item => {
            return {
              ...item,
              quantity: item.installments.map(installment => installment.quantity),
              priceBRL: valueInBRL(item.price),
              listPriceBRL: valueInBRL(item.listPrice),
              installmentPriceBRL: valueInBRL(item.installments.map(installment => installment.value)),
              rateHtml: createStarsRating(item.stars),
            };
          }),
        );
      });
    }, []);

    function handleRightArrow() {
        const first = items.shift();
        items.push(first);
        setItems([...items]);
    }
    
    function handleLeftArrow() {
        const last = items.pop();
        items.unshift(last);
        setItems([...items]);
    }

    function createStarsRating(starCount) {
        const star = <img src={iconStar} alt="Estrela preenchida"/>;
        const starOut = <img src={iconStarOut} alt="Estrela vazia"/>;
        const starHtml = [];

        for (let i = 0; i < 5; i++) {
            if(i < starCount)
                starHtml.push(star);
            else
                starHtml.push(starOut);
        }

        return starHtml;
    }

    return (
        <Container>
            <Content>
                <Title>Mais Vendidos</Title>
                <ProductSection>
                    <LeftArrow 
                        src={iconLArrow}
                        alt="Seta para esquerda"
                        onClick={handleLeftArrow}
                    />
                    <CardContainer>
                        {
                            items.map(item => (
                                <Card>
                                    <img src={item.imageUrl} alt={item.productName}/>
                                    {item.listPriceBRL !== null && (
                                        <Off src={flagOFF} alt="OFF"/>
                                    )}
                                    <Infos>
                                        <CardTitle>{item.productName}</CardTitle>
                                        <CardRate>{item.rateHtml}</CardRate>
                                        <CardOldPrice>{item.listPriceBRL}</CardOldPrice>
                                        <CardPrice>{item.priceBRL}</CardPrice>
                                        {item.installmentPriceBRL !== null && (
                                            <CardInstallments>ou em {item.quantity}x de {item.installmentPriceBRL}</CardInstallments>
                                        )}
                                        <button
                                            type="button"
                                            onClick={addCart}
                                        >
                                            COMPRAR
                                        </button>
                                    </Infos>
                                </Card>
                            ))
                        }
                        <Dots>
                            <div>
                            <a></a>
                            <div></div>
                            <div></div>
                            <div></div>
                            </div>
                        </Dots>
                    </CardContainer>
                    <RightArrow
                       src={iconRArrow}
                       alt="Seta para direita"
                       onClick={handleRightArrow}
                    />
                </ProductSection>

            </Content>
        </Container>
    )
}

BestSelling.propTypes = {
    addCart: PropTypes.func.isRequired,
};

export default BestSelling;