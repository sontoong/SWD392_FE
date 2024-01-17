import { Route, Routes, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Forbidden from "../pages/forbidden/forbidden";
import { ROLE } from "../../constants/role";

const LoginPage = lazy(() => import("../pages/auth/loginPage"));
const PrivateRoute = lazy(() => import("./privateRoute"));
const TestPage = lazy(() => import("../pages/testsPage/testPage"));
const ErrorPage = lazy(() => import("../pages/404"));
const Layout = lazy(() => import("../components/layout/mainLayout"));
const Template = lazy(() => import("../pages/file/template"));

export const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <Layout>
        <Routes>
          <Route
            path="/forbidden"
            element={
              <Suspense fallback={<></>}>
                <PrivateRoute inverted={false}>
                  <Forbidden />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="/tests"
            element={
              <Suspense fallback={<></>}>
                <PrivateRoute inverted={false} requiredRoles={[ROLE.ADMIN]}>
                  <TestPage />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="/template"
            element={
              <Suspense fallback={<></>}>
                <PrivateRoute inverted={false}>
                  <Template />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<></>}>
                <PrivateRoute inverted={false}>
                  <ErrorPage />
                </PrivateRoute>
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <PrivateRoute inverted={true}>
        <LoginPage />
      </PrivateRoute>
    ),
  },
]);
