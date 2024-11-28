import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../pages/MyProfile";
import LetsLearn from "../pages/LetsLearn";
import Lesson from "../pages/Lesson";
import TutorialPage from "../pages/TutorialPage";
import AboutUsPage from "../pages/AboutUsPage";
import UpdateProfile from "../pages/UpdateProfile";
import ResetPassword from "../pages/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/lessons",
        element: <LetsLearn/>,
      },
      {
        path: "/tutorials",
        element: <PrivateRoute><TutorialPage/></PrivateRoute>,
      },
      {
        path: "/about",
        element: <AboutUsPage/>,
      },
      {
        path: "/lessons/lesson/:id",
        element: <PrivateRoute><Lesson/></PrivateRoute>,
        // loader: ({params})=>fetch(`http://localhost:3000/api/lesson/${params.id}`) //for data fetch in local server
        loader: async({params})=>{
           const res = await fetch(`/japanese_vocab.json`)
           const data = await res.json()
           const lessonData =  data.filter(item => item.lesson_no === parseInt(params.id));
           return lessonData
           
        } 
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/registration",
        element: <Register/>,
      },
      {
        path: "/auth/profile",
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
      },
      {
        path: "/auth/updateprofile",
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
      },
      {
        path: "/auth/resetpassword",
        element:<ResetPassword/>,
      },
    ],
  },
]);

export default router;
