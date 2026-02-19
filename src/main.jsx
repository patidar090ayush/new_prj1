import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
// import RecipeContext from './contex/RecipeContext.jsx'
// import RecipeProvider from "./context/RecipeContext";
import RecipeProvider from "./context/RecipeContext.jsx";



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RecipeProvider>
     <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </RecipeProvider>
  </StrictMode>,
);
