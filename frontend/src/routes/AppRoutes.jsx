import { Navigate, Route, Routes } from "react-router-dom";

// Auth pages
import SigninPage from "../pages/auth/SigninPage";
import SignupPage from "../pages/auth/SignupPage";
// import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
// import ResetPasswordPage from "../pages/auth/ResetPasswordPage";

// App pages 


// Auth check
function isAuthenticated() {
  const token =
    localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken");
  return Boolean(token);
}

// Protected Route 
function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
}

// NotFound
function NotFound() {
  return <div style={{ padding: 24 }}>404 - Page not found</div>;
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/" element={<Navigate to="/signin" replace />} />
      
      {/* Auth routes */}
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/signup" element={<SignupPage />} />
      
      {/*
        Add these when you create the pages:
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      */}

      {/* Protected routes 
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
     */}

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
