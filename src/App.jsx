import { Header } from './components/header';
import { Carousel } from './components/carousel'
import { BestSelling } from './components/bestSelling';
import { Newsletter } from './components/newsletter'
import { Footer } from './components/footer';

import { GlobalStyle } from './styles/global';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const counter = Number(localStorage.getItem('corebiz__cart_items_counter'));
    if (counter) { return counter; } return 0;
  });

  function handleAddItem() {
    setCartItems(cartItems + 1);

    localStorage.setItem('corebiz__cart_items_counter', cartItems + 1);
  }

  return (
    <>
      <Header cartItems={cartItems} />
      <Carousel />
      <BestSelling addItemToCart={handleAddItem} />
      <Newsletter />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
