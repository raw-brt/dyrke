import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthenticatedLayout } from "./components/shared/AuthenticatedLayout";
import { Login } from "./routes/Login/Login";


const App: FC = () => {

  // Handle unauth/auth app 

  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/performance" element={<AuthenticatedLayout />} />
        </Route>
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </Layout>
  );
}

export default App;
