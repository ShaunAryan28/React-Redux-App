//import React, { Children } from 'react'
import App from './App'
import Cart from './components/Cart'
import Products from './components/Products'
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
                }
            ]

    }]
    const router = useRoutes(RouterConfig)
    return router

}

export default Routes