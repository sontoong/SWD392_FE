import { Suspense, lazy } from "react";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { ROLE } from "../../constants/role";

const Layout = lazy(() => import("../components/layout/public-layout"));

//public
const LoginPage = lazy(() => import("../pages/LoginPage"));
const SignupPage = lazy(() => import("../pages/SignupPage"));
const HomePage = lazy(() => import("../pages/public/HomePage"));
const CandidateProjectDetailPage = lazy(
  () => import("../pages/public/CandidateProjectDetailPage"),
);
const ProjectSearchPage = lazy(
  () => import("../pages/public/ProjectSearchPage"),
);
const CandidateSearchPage = lazy(
  () => import("../pages/public/CandidateSearchPage"),
);

//candidate
const CandidateDetailPage = lazy(
  () => import("../pages/candidate/CandidateDetailPage"),
);
const CandidateProjectList = lazy(
  () => import("../pages/candidate/CandidateProjectList"),
);
const CandidateIncomeListPage = lazy(
  () => import("../pages/candidate/CandidateIncomeListPage"),
);

//enterprise
const EnterpriseDetailPage = lazy(
  () => import("../pages/enterprise/EnterpriseDetailPage"),
);
const EnterpriseCreateProjectPage = lazy(
  () => import("../pages/enterprise/EnterpriseCreateProjectPage"),
);
const EnterpriseProjectListPage = lazy(
  () => import("../pages/enterprise/EnterpriseProjectListpage"),
);
const EnterpriseProjectDetailPage = lazy(
  () => import("../pages/enterprise/EnterpriseProjectDetailPage"),
);

//both
import TransactionList from "../pages/TransactionList";

const Forbidden = lazy(() => import("../pages/ForbiddenPage"));
const PrivateRoute = lazy(() => import("./proute"));
const TestPage = lazy(() => import("../pages/TestPage"));
const ErrorPage = lazy(() => import("../pages/public/404Page"));

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
        path: "candidates/:candidateId",
        element: (
          <Suspense fallback={<></>}>
            <CandidateDetailPage type="outer" />
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
            <PrivateRoute inverted={false} requiredRoles={[ROLE.Candidate]}>
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
                <CandidateDetailPage type="inner" />
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
