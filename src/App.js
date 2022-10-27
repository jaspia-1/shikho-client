import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import AllCourse from './Components/AllCourse/AllCourse';
import CatagoryCourse from './Components/Shared/CatagoryCourse/CatagoryCourse';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/allcourses',
          element: <AllCourse></AllCourse>
        },
        {
          path: '/catagorycourses/:id',
          element: <CatagoryCourse ></CatagoryCourse>,
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/courses/${params.id}`);
          }
        },

      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
