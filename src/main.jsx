import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import Add from './Add.jsx'
import Browse from './Browse.jsx'
import Error from './Error.jsx'
import FilterCategory from './FilterCategory.jsx'
import BookDetails from './BookDetails.jsx'


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />
      },
      {
        path: "/browse",
        element: <Browse />
      },
      {
        path: "/add",
        element: <Add />
      },
      {
        path: "/:id",
        element: <BookDetails />
      },
      {
        path: "/books/:id",
        element: <FilterCategory />
      }
    
    ],
    errorElement: <Error />
  },
  
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={appRouter} />
  </StrictMode>,
)
