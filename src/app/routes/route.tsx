import { Suspense, lazy } from "react";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { ROLE } from "../../constants/role";

const Layout = lazy(() => import("../components/layout/public-layout"));
const Layout2 = lazy(() => import("../components/layout/admin-layout"));

const HomePage = lazy(() => import("../pages/HomePage"));

const UserManagePage = lazy(() => import("../pages/UserManagePage"));
const ProjectManagePage = lazy(() => import("../pages/ProjectManagePage"));
const VerifyUserPage = lazy(() => import("../pages/VerifyUserPage"));

const Forbidden = lazy(() => import("../pages/ForbiddenPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const PrivateRoute = lazy(() => import("./proute"));
const TestPage = lazy(() => import("../pages/TestPage"));
const ErrorPage = lazy(() => import("../pages/404Page"));

const Template = lazy(() => import("../pages/template"));

const UserLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

const AdminLayout = () => {
  return (
    <Layout2>
      <Outlet />
    </Layout2>
  );
};

export const router = createBrowserRouter([
  {
    path: "*",
    element: <UserLayout />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<></>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "home",
        element: <Navigate to={"/"} />,
      },
      {
        path: "forbidden",
        element: (
          <Suspense fallback={<></>}>
            <Forbidden />
          </Suspense>
        ),
      },
      {
        path: "test",
        element: (
          <Suspense fallback={<></>}>
            <TestPage />
          </Suspense>
        ),
      },
      {
        path: "template",
        element: (
          <Suspense fallback={<></>}>
            <PrivateRoute inverted={false} requiredRoles={[ROLE.ADMIN]}>
              <Template />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<></>}>
            <PrivateRoute inverted={false}>
              <ErrorPage />
            </PrivateRoute>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PrivateRoute inverted={true}>
        <LoginPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute inverted={false} requiredRoles={[ROLE.ADMIN]}>
        <AdminLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Navigate to={"user-manage"} />,
      },
      {
        path: "user-manage",
        element: (
          <Suspense fallback={<></>}>
            <UserManagePage />
          </Suspense>
        ),
      },
      {
        path: "project-manage",
        element: (
          <Suspense fallback={<></>}>
            <ProjectManagePage />
          </Suspense>
        ),
      },
      {
        path: "verify-user",
        element: (
          <Suspense fallback={<></>}>
            <VerifyUserPage />
          </Suspense>
        ),
      },
      {
        path: "test",
        element: (
          <Suspense fallback={<></>}>
            <TestPage />
          </Suspense>
        ),
      },
    ],
  },
]);
