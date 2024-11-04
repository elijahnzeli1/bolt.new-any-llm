import { RemixBrowser } from '@remix-run/react';
import { createRoot } from 'react-dom/client';
import { startTransition, StrictMode } from 'react';

const container = document.getElementById('root');
if (!container) throw new Error('Root element not found');

const root = createRoot(container);

startTransition(() => {
  root.render(
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
