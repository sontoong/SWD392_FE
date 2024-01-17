import { Suspense, lazy } from "react";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
import { ROLE } from "../../constants/role";

const Layout = lazy(() => import("../components/layout/mainLayout"));
const Forbidden = lazy(() => import("../pages/forbidden/forbidden"));
const LoginPage = lazy(() => import("../pages/auth/loginPage"));
const PrivateRoute = lazy(() => import("./privateRoute"));
const TestPage = lazy(() => import("../pages/testsPage/TestPage1"));
const ErrorPage = lazy(() => import("../pages/404"));
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
                {/* <PrivateRoute inverted={false}> */}
                <Forbidden />
                {/* </PrivateRoute> */}
              </Suspense>
            }
          />
          <Route
            path="/test"
            element={
              <Suspense fallback={<></>}>
                <TestPage />
              </Suspense>
            }
          />
          <Route
            path="/template"
            element={
              <Suspense fallback={<></>}>
                <PrivateRoute inverted={false} requiredRoles={[ROLE.ADMIN]}>
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
