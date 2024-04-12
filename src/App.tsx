import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

import AuthLayout from "@/layouts/AuthLayout";
import AppLayout from "@/layouts/AppLayout";

import IndexPage from "@/pages/Index";
import ErrorPage from "@/pages/ErrorPage";
import DriversPage from "@/pages/standings/Drivers";
import ConstructorsPage from "@/pages/standings/Constructors";

// TODO

// appwrite

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        {/* Public Auth routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" />
          <Route path="/sign-up" />
        </Route>

        {/* Private routes */}
        <Route element={<AppLayout />} errorElement={<ErrorPage />}>
          <Route index element={<IndexPage />} />
          <Route path="/standings/drivers" element={<DriversPage />} />
          <Route
            path="/standings/constructors"
            element={<ConstructorsPage />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
