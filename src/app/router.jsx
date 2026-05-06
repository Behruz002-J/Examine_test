import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts/MainLayout";
import { Home } from "../pages/Home/Home"; 
import { Company } from "../pages/Home/Company";
import { NotFound } from "../pages/Home/NotFound";
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
                path:"*",
                element:<NotFound />
            }
        ]
    }
])