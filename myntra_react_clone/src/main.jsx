import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bag from './routes/Bag.jsx';
import Home from './routes/Home.jsx';
import myntraStore from './store/index.js';
import { Provider } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from './components/headerComponents/Profile.jsx';
import Wishlist from './components/headerComponents/Wishlist.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
      { path: "/profile", element: <Profile /> },
      { path: "/wishlist", element: <Wishlist /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
