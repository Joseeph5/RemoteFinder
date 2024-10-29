import { useState } from 'react';
import Background from './Background';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import { useDebounce, useJobItems } from '../lib/hooks';
import { Toaster } from 'react-hot-toast';

function App() {
  const [searchText, setSearchText] = useState<string>('');
  const debouncedSearchText = useDebounce(searchText, 500);
  const { jobList, isLoading } = useJobItems(debouncedSearchText);

  return (
    <>
      <Background />
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Container jobList={jobList} isLoading={isLoading} />
      <Footer />

      <Toaster position='top-right' />
    </>
  );
}

export default App;
