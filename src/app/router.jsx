import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts/MainLayout";
import { Home } from "../pages/Home/Home"; 
import { Company } from "../pages/Home/Company";
import { Service } from "../pages/Home/Service";
import { Teamtemp } from "../pages/Home/Teamtemp";
import Career from "../pages/Home/Career/Career";
export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children: [
            {
          index:true,
          element:<Home />
            },
            {
                path:"/company",
                element:<Company />
            },
            {
                path:"/service",
                element:<Service />
            },
            {
                path:"/teamtemp",
                element:<Teamtemp />
            },
            {
                path:"/Career",
                element:<Career />
            }
        ]
    }
])