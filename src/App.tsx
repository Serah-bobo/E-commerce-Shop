import React from 'react'
import {  Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import Layout from './Components/Layout';
import Products from './Pages/Products';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductDetails from './Pages/ProductDetails';
const App = () => {
  const router=createBrowserRouter(createRoutesFromElements(
<Route path='/' element={<Layout/>}>
<Route index element={<Home/>}/>
<Route path='products' element={<Products/>}/>
<Route path='cart' element={<Cart/>}/>
<Route path='products/:id' element={<ProductDetails/>}/>
</Route>
  ))
  return (
    <RouterProvider router={router}/>
  )
}

export default App