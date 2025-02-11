import { redirect, type RouteObject } from "react-router-dom";
import AdminLoginPage from "../pages/AdminLoginPage";
import AdminOverview from "@/pages/AdminOverview";
import AdminLayout from "@/components/adminLayout";
import { getSession } from "@/lib/utils";
import AdminGenre from "@/pages/AdminGenre";
import { getGenres } from "@/services/genre/genre.service";
import AdminGenreForm from "@/pages/AdminGenre/form";

const adminRoutes: RouteObject[] = [
    {
        path: "/admin/login",
        element: <AdminLoginPage />
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        loader: () => {
            const user = getSession()
            console.log("🚀 ~ user:", user)

            if(!user || user?.role !== "admin") {
                throw redirect("/admin/login")
            }

            return user
        },
        children: [
            {
                index: true,
                element: <AdminOverview />
            },
            {
                path: "/admin/genres",
                loader: async () => {
                    const genres = await getGenres() 

                    return genres.data
                },
                element: <AdminGenre />
            },
            {
                path: "/admin/genres/create",
                element: <AdminGenreForm />
            }
        ]
    }
]

export default adminRoutes;