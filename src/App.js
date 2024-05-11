import React, { Suspense, lazy, useState } from 'react';
import '../src/App.css';
import Header from "./components/Header";
import Body from './components/Body';
import About from './components/About';
import ErrorComp from './components/ErrorComp';
import { createBrowserRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import userContext from './utils/context/userContext';
// providing the store to our react application
import { Provider } from "react-redux"; 
import appStore from './utils/redux/appStore';
import Cart from './components/Cart';
import { Toaster } from 'react-hot-toast';

// making a separate bundle for Grocery component
const Grocery = lazy(()=>{ import("./components/Grocery") })
// the element whose path matches will replace outlet 


const App = () => {
  const [loggedInName, setLoggedInName] = useState("Arjun");

  return (
    <Provider store={appStore}>
    <userContext.Provider value={{userName: loggedInName, setLoggedInName}}>
      <Toaster />
    <div className='w-11/12 mx-auto'>
      <Header />
      <Outlet />
    </div>
    </userContext.Provider>
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      children: [
        {
          path: '/',
          element: <Body />
        },
        {
          // about component containes tutorial of class based components
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        }, 
        {
          // ":" indicates dynamic path, here resId is dynamic
          path: '/restaurant/:resId',
          element: <RestaurantMenu />
        },
        {
          path: '/cart',
          element: <Cart />
        },
        {
          path: '/grocery',
          element: <Suspense fallback={<h1 className='text-white'>Loading.....</h1>}><Grocery /></Suspense>
        }
      ],
      errorElement: <ErrorComp />
  },
  
])

export default App;