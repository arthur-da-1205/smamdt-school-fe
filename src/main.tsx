import { AppProvider } from '@provider/app.provider';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './styles/global.less';

const Main: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<Main />);
