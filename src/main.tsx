import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BookmarksContextProvider from './contexts/BookmarksContextProvider';
import JobItemsContextProvider from './contexts/JobItemsContextProvider';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BookmarksContextProvider>
        <JobItemsContextProvider>
          <App />
        </JobItemsContextProvider>
      </BookmarksContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
