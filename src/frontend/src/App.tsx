import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Commitment from "./pages/Commitment";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Markets from "./pages/Markets";
import Products from "./pages/Products";

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

const rootRoute = createRootRoute({ component: RootLayout });
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: Products,
});
const marketsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/markets",
  component: Markets,
});
const commitmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/commitment",
  component: Commitment,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  productsRoute,
  marketsRoute,
  commitmentRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
