import { getSession } from "@/lib/utils";
import CustomerBrowseGenre from "@/pages/CustomerBrowseGenre";
import CustomerHome from "@/pages/CustomerHome";
import CustomerMovieDetail from "@/pages/CustomerMovieDetail";
import CustomerOrderDetails from "@/pages/CustomerOrderDetails";
import CustomerOrders from "@/pages/CustomerOrders";
import CustomerPagesTopupSuccess from "@/pages/CustomerPagesTopupSuccess";
import CustomerSettings from "@/pages/CustomerSettings";
import CustomerSignIn from "@/pages/CustomerSignIn";
import CustomerSignUp from "@/pages/CustomerSignUp";
import CustomerTransaction from "@/pages/CustomerTransaction";
import CustomerTransactionSuccess from "@/pages/CustomerTransactionSuccess";
import CustomerWallet from "@/pages/CustomerWallet";
import CustomerWalletTopup from "@/pages/CustomerWalletTopup";
import {
  getDetailMovie,
  getGenres,
  getMovies,
} from "@/services/global/global.service";
import { getTheaters } from "@/services/theater/theater.service";
import {
  getOrderDetail,
  getOrders,
} from "@/services/transaction/transaction.service";
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
  {
    path: "/browse/:genreId",
    loader: async ({ params }) => {
      const user = getSession();

      if (!user || user.role !== "customer") {
        throw redirect("/sign-in");
      }

      if (!params.genreId) {
        throw redirect("/");
      }

      const genres = await getGenres();
      const theaters = await getTheaters("customer");

      console.log({
        genres,
        theaters,
      });

      return {
        genres: genres.data,
        theaters: theaters.data,
      };
    },
    element: <CustomerBrowseGenre />,
  },
  {
    path: "/movie/:movieId",
    loader: async ({ params }) => {
      const user = getSession();

      if (!user || user.role !== "customer") {
        throw redirect("/sign-in");
      }

      if (!params.movieId) {
        throw redirect("/");
      }

      const movieDetail = await getDetailMovie(params.movieId);

      return {
        detail: movieDetail.data.movie,
      };
    },
    element: <CustomerMovieDetail />,
  },
  {
    path: "/transaction-ticket",
    loader: async () => {
      const user = getSession();

      if (!user || user.role !== "customer") {
        throw redirect("/sign-in");
      }

      return true;
    },
    element: <CustomerTransaction />,
  },
  {
    path: "/transaction-ticket/success",
    loader: async () => {
      const user = getSession();

      if (!user || user.role !== "customer") {
        throw redirect("/sign-in");
      }

      return true;
    },
    element: <CustomerTransactionSuccess />,
  },
  {
    path: "/wallets",
    loader: async () => {
      const user = getSession();

      if (!user || user.role !== "customer") {
        throw redirect("/sign-in");
      }

      return true;
    },
    element: <CustomerWallet />,
  },
  {
    path: "/wallets/topup",
    loader: async () => {
      const user = getSession();

      if (!user || user.role !== "customer") {
        throw redirect("/sign-in");
      }

      return true;
    },
    element: <CustomerWalletTopup />,
  },
  {
    path: "/wallets/topup/success",
    loader: async () => {
      const user = getSession();

      if (!user || user.role !== "customer") {
        throw redirect("/sign-in");
      }

      return true;
    },
    element: <CustomerPagesTopupSuccess />,
  },
  {
    path: "/orders",
    loader: async () => {
      const user = getSession();

      if (!user || user.role !== "customer") {
        throw redirect("/sign-in");
      }

      const transaction = await getOrders();

      return transaction.data;
    },
    element: <CustomerOrders />,
  },
  {
    path: "/orders/:orderId",
    loader: async ({ params }) => {
      const user = getSession();

      if (!user || user.role !== "customer") {
        throw redirect("/sign-in");
      }

      if (!params.orderId) {
        throw redirect("/orders");
      }

      const transaction = await getOrderDetail(params.orderId);

      return transaction.data;
    },
    element: <CustomerOrderDetails />,
  },
  {
    path: "/settings",
    loader: async () => {
      const user = getSession();

      if (!user || user.role !== "customer") {
        throw redirect("/sign-in");
      }

      return true;
    },
    element: <CustomerSettings />,
  },
];

export default customerRoutes;
