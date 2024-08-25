import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Parent } from './Parent';

const app = document.getElementById('app');
const root = createRoot(app);

root.render(
  <StrictMode>
    <Parent />
  </StrictMode>
);
