import type { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Login } from "./routes/Login/Login";
import { useProfileStore } from "./store/profiles";

const App: FC = () => {

  // Check if there is an already fetched profile to let the user enter the app or not
  const currentProfile = useProfileStore((state) => state.currentProfile);

  return (
    <Layout>
      <Routes>
        <Route 
          path="/" 
          element={
            currentProfile 
              ? <Navigate to="performance" replace /> 
              : <Navigate to="login" replace /> 
          } 
        />
        <Route path="login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="performance" element={<p>Home</p>} />
        </Route>
        <Route path='*' element={<p>404</p>} />
      </Routes>
    </Layout>
  );
};

export default App;
