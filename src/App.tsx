import type { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Custom404 } from "./routes/404";
import { Audience } from "./routes/Audience";
import { Login } from "./routes/Login";
import { Performance } from "./routes/Performance";
import { useProfileStore } from "./store/profiles";

const App: FC = () => {
  // Check if there is an already fetched profile to let the user enter the app or not
  const currentProfile = useProfileStore((state) => state.currentProfile);

  return (
    <Layout>
      <Routes>
        <Route
          path='/'
          element={
            currentProfile ? <Navigate to='performance' replace /> : <Navigate to='login' replace />
          }
        />
        <Route path='login' element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path='performance' element={<Performance />} />
          <Route path='audience' element={<Audience />} />
        </Route>
        <Route path='*' element={<Custom404 />} />
      </Routes>
    </Layout>
  );
};

export default App;
