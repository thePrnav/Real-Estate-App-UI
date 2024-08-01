import HomePage from "./routes/homePage/homePage"
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import ListPage from "./routes/listPage/listPage"
import Layout from "./routes/layout/layout"
import SPage from "./routes/spage/spage"
import ProfilePage from "./routes/profilePage.jsx/profilePage"




function App() {

   const router = createBrowserRouter([
      {
         path: '/',
         element: <Layout />,
         children: [
            {
               path: '/',
               element: <HomePage />
            },
            {
               path: '/list',
               element: <ListPage />
            },
            {
               path: '/:id',
               element: <SPage />
            },
            {
               path: '/profile',
               element: <ProfilePage />
            },
         ]                 
      }
      
   ])
 
  return (
    
      <RouterProvider router={router}/>
  )
}

export default App
