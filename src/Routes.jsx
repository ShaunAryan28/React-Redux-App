//import React, { Children } from 'react'
import App from './App'
import Cart from './components/Cart'
import Products from './components/Products'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import { useRoutes } from 'react-router-dom'
const Routes = () => {
    const RouterConfig =[
        {
            path: "/",
            element: <App/>,
            children: [
                {
                    path: '', element: <Products/>
                },
                {
                    path: 'cart-items', element: <Cart/>
                },
                {
                    path: 'contactus', element: <ContactUs/>
                }
            ]

    }]
    const router = useRoutes(RouterConfig)
    return router

}

export default Routes