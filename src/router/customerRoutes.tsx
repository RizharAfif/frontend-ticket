import { getSession } from "@/lib/utils";
import CustomerHome from "@/pages/CustomerHome";
import CustomerSignIn from "@/pages/CustomerSignIn";
import CustomerSignUp from "@/pages/CustomerSignUp";
import { getGenres, getMovies } from "@/services/global/global.service";
import { redirect, RouteObject } from "react-router-dom";

const customerRoutes: RouteObject[] = [
    {
		path: "/sign-up",
		element: <CustomerSignUp />,
	},
	{
		path: "/sign-in",
		element: <CustomerSignIn />,
	},
	{
		path: "/",
		loader: async () => {
			const user = getSession();

			if (!user || user.role !== "customer") {
				throw redirect("/sign-in");
			}

			const movies = await getMovies();
			const genres = await getGenres();

			return {
				movies: movies.data,
				genres: genres.data,
			};
		},
		element: <CustomerHome />,
	},
]

export default customerRoutes;