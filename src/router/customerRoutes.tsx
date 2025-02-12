import CustomerSignUp from "@/pages/CustomerSignUp";
import { RouteObject } from "react-router-dom";

const customerRoutes: RouteObject[] = [
    {
        path: "/sign-up",
        element: <CustomerSignUp />
    }
]

export default customerRoutes;