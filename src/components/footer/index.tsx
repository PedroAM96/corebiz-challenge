import iconMail from '../../assets/icon-mail.svg'
import iconHeadset from '../../assets/icon-headset.svg'
import logoCorebiz from '../../assets/logo-corebiz-small.svg'
import logoVtex from '../../assets/logo-vtex.svg'


import { 
    Container,
    Content,
    InfoContainer,
    CallToActionContainer,
    LogoContainer,
    LogoContent
} from "../footer/styles";

export function Footer() {
    return (
        <Container>
            <Content>
                <InfoContainer>
                    <p>Localização</p>
                    <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
                    <p>Alphavile SP</p>
                    <p>brasil@corebiz.ag</p>
                    <p>+55 11 3090 1039</p>
                </InfoContainer>
                <CallToActionContainer>
                    <button type="button">
                        <img src={iconMail} alt="Ícone de e-mail"/>
                        <p>ENTRE EM CONTATO</p>
                    </button>
                    <button type="button">
                        <img src={iconHeadset} alt="Ícone de headset"/>
                        <p>FALE COM O NOSSO CONSULTOR ONLINE</p>
                    </button>
                </CallToActionContainer>
                <LogoContainer>
                    <LogoContent>
                        <p>Created by</p>
                        <img src={logoCorebiz} alt="Logo Corebiz"/>
                    </LogoContent>
                    <LogoContent>
                        <p>Powered by</p>
                        <img src={logoVtex} alt="Logo Vtex"/>
                    </LogoContent>
                </LogoContainer>
            </Content>
        </Container>
    )
}