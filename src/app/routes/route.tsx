import { Suspense, lazy } from "react";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { ROLE } from "../../constants/role";

const Layout = lazy(() => import("../components/layout/public-layout"));

//public
const LoginPage = lazy(() => import("../pages/LoginPage"));
const SignupPage = lazy(() => import("../pages/SignupPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const CandidateProjectDetailPage = lazy(
  () => import("../pages/CandidateProjectDetailPage"),
);
const ProjectSearchPage = lazy(() => import("../pages/ProjectSearchPage"));
const CandidateSearchPage = lazy(() => import("../pages/CandidateSearchPage"));

//candidate
const CandidateDetailPage = lazy(() => import("../pages/CandidateDetailPage"));
const CandidateProjectList = lazy(
  () => import("../pages/CandidateProjectList"),
);
const CandidateIncomeListPage = lazy(
  () => import("../pages/CandidateIncomeListPage"),
);

//enterprise
const EnterpriseDetailPage = lazy(
  () => import("../pages/EnterpriseDetailPage"),
);
const EnterpriseCreateProjectPage = lazy(
  () => import("../pages/EnterpriseCreateProjectPage"),
);
const EnterpriseProjectListPage = lazy(
  () => import("../pages/EnterpriseProjectListpage"),
);
const EnterpriseProjectDetailPage = lazy(
  () => import("../pages/EnterpriseProjectDetailPage"),
);

//both
import TransactionList from "../pages/TransactionList";

const Forbidden = lazy(() => import("../pages/ForbiddenPage"));
const PrivateRoute = lazy(() => import("./proute"));
const TestPage = lazy(() => import("../pages/TestPage"));
const ErrorPage = lazy(() => import("../pages/404Page"));

const Template = lazy(() => import("../pages/template"));

const PublicLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<></>}>
        <PublicLayout />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<></>}>
            <PrivateRoute inverted={true}>
              <HomePage />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "home",
        element: <Navigate to={"/"} />,
      },
      {
        path: "candidates",
        element: (
          <Suspense fallback={<></>}>
            <CandidateSearchPage />
          </Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <Suspense fallback={<></>}>
            <ProjectSearchPage />
          </Suspense>
        ),
      },
      {
        path: "projects/:projectId",
        element: (
          <Suspense fallback={<></>}>
            <CandidateProjectDetailPage />
          </Suspense>
        ),
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
        path: "fd",
        element: (
          <PrivateRoute inverted={false} requiredRoles={[ROLE.Candidate]}>
            <Outlet />
          </PrivateRoute>
        ),
        children: [
          {
            path: "projects",
            element: (
              <Suspense fallback={<></>}>
                <CandidateProjectList />
              </Suspense>
            ),
          },
          {
            path: "report/earnings",
            element: (
              <Suspense fallback={<></>}>
                <CandidateIncomeListPage />
              </Suspense>
            ),
          },
          {
            path: "report/transactions",
            element: (
              <Suspense fallback={<></>}>
                <TransactionList role={"candidate"} />
              </Suspense>
            ),
          },
          {
            path: "account",
            element: (
              <Suspense fallback={<></>}>
                <CandidateDetailPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "ed",
        element: (
          <PrivateRoute inverted={false} requiredRoles={[ROLE.ENTERPRISE]}>
            <Outlet />
          </PrivateRoute>
        ),
        children: [
          {
            path: "projects",
            element: (
              <Suspense fallback={<></>}>
                <EnterpriseProjectListPage />
              </Suspense>
            ),
          },
          {
            path: "projects/:projectId",
            element: (
              <Suspense fallback={<></>}>
                <EnterpriseProjectDetailPage />
              </Suspense>
            ),
          },
          {
            path: "new-project",
            element: (
              <Suspense fallback={<></>}>
                <EnterpriseCreateProjectPage />
              </Suspense>
            ),
          },
          {
            path: "edit-project/:projectId",
            element: (
              <Suspense fallback={<></>}>
                <EnterpriseCreateProjectPage edit={true} />
              </Suspense>
            ),
          },
          {
            path: "report/transactions",
            element: (
              <Suspense fallback={<></>}>
                <TransactionList role={"enterprise"} />
              </Suspense>
            ),
          },
          {
            path: "account",
            element: (
              <Suspense fallback={<></>}>
                <EnterpriseDetailPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<></>}>
            <ErrorPage />
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
    path: "/register",
    element: (
      <Suspense fallback={<></>}>
        <PrivateRoute inverted={true}>
          <SignupPage />
        </PrivateRoute>
      </Suspense>
    ),
  },
]);
