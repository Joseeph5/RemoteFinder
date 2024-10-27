import { useEffect, useState } from 'react';
import Background from './Background';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';

function App() {
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [jobList, setjobList] = useState([]);

  useEffect(() => {
    if (!searchText) return;

    setIsLoading(true);

    const fetchedData = async () => {
      const response = await fetch(
        `https://remotive.com/api/remote-jobs?limit=10&search=${searchText}`
      );

      const data = await response.json();

      setjobList(data);

      setIsLoading(false);
    };

    fetchedData();
  }, [searchText]);

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
