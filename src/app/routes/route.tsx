import { Suspense, lazy } from "react";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { ROLE } from "../../constants/role";

const Layout = lazy(() => import("../components/layout/mainLayout"));
const Layout2 = lazy(() => import("../components/layout/adminLayout"));

const HomePage = lazy(() => import("../pages/home"));

const UserManagePage = lazy(() => import("../pages/userManage"));
const ProjectManagePage = lazy(() => import("../pages/projectManage"));
const VerifyUserPage = lazy(() => import("../pages/verifyUser"));

const Forbidden = lazy(() => import("../pages/forbidden"));
const LoginPage = lazy(() => import("../pages/loginPage"));
const PrivateRoute = lazy(() => import("./privateRoute"));
const TestPage = lazy(() => import("../pages/testPage"));
const ErrorPage = lazy(() => import("../pages/404"));

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
