import React, { useEffect, useRef, useState } from "react";
import {
  createBrowserRouter,
  redirect,
  Outlet,
  useLocation,
  useNavigation,
} from "react-router-dom";

import LandingPage from "../pages/landing/LandingPage";
import SigninPage from "../pages/auth/SigninPage";
import SignupPage from "../pages/auth/SignupPage";

import AppLoader from "../components/shared/AppLoader";
import ContactForm from "../components/landingpage/ContactUI/ContactForm";

/**
 * Phase 2: replace / extend requireAuth() to verify token with backend (e.g. GET /me)
 */
function getToken() {
  return (
    localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken")
  );
}

export async function requireAuth() {
  const token = getToken();
  if (!token) throw redirect("/signin");
  return null;
}

function RootLayout() {
  const navigation = useNavigation();
  const location = useLocation();

  const isNavigating = navigation.state !== "idle";

  const [booting, setBooting] = useState(true);

  const [minVisible, setMinVisible] = useState(false);
  const minTimerRef = useRef(null);

  const MIN_MS = 1500; 

  useEffect(() => {
    const t = setTimeout(() => setBooting(false), MIN_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    setMinVisible(true);

    if (minTimerRef.current) clearTimeout(minTimerRef.current);
    minTimerRef.current = setTimeout(() => {
      setMinVisible(false);
      minTimerRef.current = null;
    }, MIN_MS);

    return () => {
      if (minTimerRef.current) clearTimeout(minTimerRef.current);
    };
  }, [location.pathname]);

  const shouldShowLoader = booting || isNavigating || minVisible;

  return (
    <>
      {shouldShowLoader && <AppLoader />}
      <Outlet />
    </>
  );
}

function NotFound() {
  return <div style={{ padding: 24 }}>404 - Page not found</div>;
}

// Router

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/contactform", element: <ContactForm /> },
      { path: "/signin", element: <SigninPage /> },
      { path: "/signup", element: <SignupPage /> },

      // Protected route:
      // {
      //   path: "/dashboard",
      //   loader: requireAuth,
      //   element: <DashboardPage />,
      // },
    ],
  },
]);

export default router;