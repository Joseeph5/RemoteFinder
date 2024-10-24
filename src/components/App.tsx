import Background from './Background';
import Container from './Container';
import Footer from './Footer';
import Header, { HeaderTop } from './Header';
import Logo from './Logo';

function App() {
  return (
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
        </HeaderTop>
      </Header>
      <Container />
      <Footer />
    </>
  );
}

export default App;
