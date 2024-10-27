import { useEffect, useState } from 'react';
import Background from './Background';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import { useJobItem } from '../lib/hooks';

function App() {
  const [searchText, setSearchText] = useState<string>('');

  const { jobList, isLoading } = useJobItem(searchText);
  return (
    <>
      <Background />
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Container jobList={jobList} isLoading={isLoading} />
      <Footer />
    </>
  );
}

export default App;
