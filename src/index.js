import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Nav from './components/Nav';
import Shop from './pages/Shop';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Nav />
    <App />
    <Shop />
  </StrictMode>
);
