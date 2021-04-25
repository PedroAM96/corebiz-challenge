import { Header } from './components/header';
import { Carousel } from './components/carousel'
import { BestSelling } from './components/bestSelling';
import { Newsletter } from './components/newsletter'
import { Footer } from './components/footer';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <BestSelling />
      <Newsletter />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
