import { Header } from './components/header';
import { Carousel } from './components/carousel'
import { BestSelling } from './components/bestSelling';
import { Newsletter } from './components/newsletter'
import { Footer } from './components/footer';

import { GlobalStyle } from './styles/global';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const counter = Number(localStorage.getItem('@Corebiz:Items'));
    if (counter) { return counter; } return 0;
  });

  function handleAddCart() {
    setCartItems(cartItems + 1);
    localStorage.setItem('@Corebiz:Items', cartItems + 1);
  }

  return (
    <>
      <Header cartItems={cartItems} />
      <Carousel />
      <BestSelling addCart={handleAddCart} />
      <Newsletter />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
