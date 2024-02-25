import { Suspense, lazy } from "react";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { ROLE } from "../../constants/role";

const Layout = lazy(() => import("../components/layout/public-layout"));
const Layout2 = lazy(() => import("../components/layout/admin-layout"));

//public
const HomePage = lazy(() => import("../pages/HomePage"));

//admin
const UserManagePage = lazy(() => import("../pages/UserManagePage"));
const ProjectManagePage = lazy(() => import("../pages/ProjectManagePage"));
const VerifyUserPage = lazy(() => import("../pages/VerifyUserPage"));
const ProjectDetail = lazy(() => import("../pages/ProjectDetailAdminPage"));

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
    path: "/",
    element: (
      <Suspense fallback={<></>}>
        <UserLayout />
      </Suspense>
    ),
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
      <Suspense fallback={<></>}>
        <PrivateRoute inverted={true}>
          <LoginPage />
        </PrivateRoute>
      </Suspense>
    ),
  },
  {
    path: "/admin",
    element: (
      <Suspense fallback={<></>}>
        <PrivateRoute inverted={false} requiredRoles={[ROLE.ADMIN]}>
          <AdminLayout />
        </PrivateRoute>
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: <Navigate to={"user"} />,
      },
      {
        path: "user",
        element: (
          <Suspense fallback={<></>}>
            <UserManagePage />
          </Suspense>
        ),
      },
      {
        path: "project",
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
        path: "project/:projectId",
        element: (
          <Suspense fallback={<></>}>
            <ProjectDetail />
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
]);
