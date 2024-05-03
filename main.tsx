import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import  tenniss from './data/tenniss';

const routes = [
  {
    path: "/",
  element: <App />,
  }
];
tenniss.forEach((tennis) => {
  routes.push({ 
      path: tennis.name,
      element: <div> {tennis.name}</div>

    });

});

const router = createBrowserRouter(routes);
  


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider  router={router}/ >
    
  </React.StrictMode>,
)
