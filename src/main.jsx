import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Routes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
  </StrictMode>,
)
