import logoCorebiz from '../../assets/logo-corebiz.svg'
import iconSearch from '../../assets/icon-magnifying-glass.svg'
import iconUser from '../../assets/icon-user.svg'
import iconCart from '../../assets/icon-shopping-cart.svg'

import {
    Container,
    UserContainer,
    SearchContainer,
    Content,
    UserContent,
    CartContent,
} from './styles'

export function Header({ cartItems }) {
    return (
        <Container>
            <Content>
                <img src={logoCorebiz} title="Página inicial da Corebiz" alt="Logo Corebiz" />
                <SearchContainer>
                    <input type="text" placeholder="O que está procurando?"></input>
                    <img src={iconSearch} alt="Ícone de lupa" />
                </SearchContainer>
                <UserContainer>
                    <UserContent>
                        <img src={iconUser} alt="Ícone de usuário" />
                        <p>Minha Conta</p>
                    </UserContent>
                    <CartContent>
                        <img src={iconCart} title="Meu carrinho" alt="Ícone de carrinho de compras" />
                        <div>{cartItems}</div>
                    </CartContent>
                </UserContainer>
            </Content>
        </Container>
    )
}