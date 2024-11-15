import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BookmarksContextProvider from './contexts/BookmarksContextProvider';
import JobItemsContextProvider from './contexts/JobItemsContextProvider';
import ActiveIdContextProvider from './contexts/ActiveIdContextProvider';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BookmarksContextProvider>
        <JobItemsContextProvider>
          <ActiveIdContextProvider>
            <App />
          </ActiveIdContextProvider>
        </JobItemsContextProvider>
      </BookmarksContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
