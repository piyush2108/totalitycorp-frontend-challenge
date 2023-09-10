import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Body from './Components/Body/Body'
import ErrorLayout from './Components/Error'
import ProductDisplay from './Components/Body/ProductDisplay'
import store from './Store/store'
import About from './Components/Body/About'
import Offers from './Components/Body/Offers'

function AppLayout(){
  return(
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "aboutus",
        element: <About />
      },
      {
        path: "/offers",
        element: <Offers />
      },
      {
        path: "/products/:id",
        element: <ProductDisplay />
      },
      {
        path: "/checkout",
        element: <h1>Checkout Page</h1>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
