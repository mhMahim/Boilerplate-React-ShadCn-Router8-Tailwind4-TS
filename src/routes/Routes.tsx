import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/pages/Error/ErrorPage";
import NotFoundError from "@/pages/Error/NotFoundError";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/dummy",
        element: <div>Dummy</div>,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: "/register",
      //   element: <RegisterPage />,
      // },
      // {
      //   path: "/login",
      //   element: <LoginPage />,
      // },
      // {
      //   path: "/forgot-password",
      //   element: <ForgotPasswordPage />,
      // },
      // {
      //   path: "/verify-register-otp",
      //   element: <VerifyRegisterOtpPage />,
      // },
      // {
      //   path: "/verify-reset-pass-otp",
      //   element: <VerifyResetPassOtpPage />,
      // },
      // {
      //   path: "/reset-password",
      //   element: <ResetPasswordPage />,
      // },
    ],
  },
  {
    path: "*",
    element: <NotFoundError />,
  },
]);
