import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Success from "./Pages/Success";
import { useSelector } from "react-redux";


const router =createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'/product/:id',
    element: <Product />
  },
  {
    path:"/products/:category",
    element: <ProductList />
  },
  {
    path:"/register",
    element: <Register />
  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/cart",
    element:<Cart />
  },
  {
    path:"/success",
    element: <Success />
  }
])

function App() {
  const user = useSelector(state => state.user.currentUser)
  return (
    <div className="App">
          <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
