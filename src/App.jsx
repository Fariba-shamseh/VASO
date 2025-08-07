import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Product from "./pages/Product.jsx";
import Account from "./pages/Account.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Blog from "./pages/Blog.jsx";
import Post from "./pages/Post.jsx";
import Contact from "./pages/Contact.jsx";
import GetPro from "./pages/GetPro.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Shop from "./pages/Shop.jsx";
import Search from "./pages/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate replace to="home" />, // تصحیح: home با h کوچک
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "pages", // اضافه کردن route مفقود
        element: <Blog />, // یا هر component که برای pages میخواید
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "post",
        element: <Post />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "getPro",
        element: <GetPro />,
      },
      {
        path: "*", // PageNotFound رو داخل AppLayout قرار دادم
        element: <PageNotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
