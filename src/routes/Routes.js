import { createBrowserRouter } from "react-router-dom";
import Main from "../layoutes/Main";
import Errorpage from "../pages/Errorpage/Errorpage";
import Homepage from "../pages/Homepage/Homepage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Homepage />,
                loader: ()=> fetch('https://estatery-backend.vercel.app/properties')
            },
            {
                path: '*',
                element: <Errorpage/>
            }
        ]
        
    }
])