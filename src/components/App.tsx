import Background from './Background';
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
    </>
  );
}

export default App;
