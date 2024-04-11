import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

import AuthLayout from "@/layouts/AuthLayout";
import AppLayout from "@/layouts/AppLayout";

import IndexPage from "@/pages/Index";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        {/* Public Auth routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" />
        </Route>

        {/* Private routes */}
        <Route element={<AppLayout />}>
          <Route index element={<IndexPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
