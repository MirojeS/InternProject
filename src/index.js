import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client'; 

const queryClient = new QueryClient();

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
