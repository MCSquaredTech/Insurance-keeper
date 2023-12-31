import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// Import Global Style Sheets 
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './CascadingStyleSheets/SiteStyle.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


