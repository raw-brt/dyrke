import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Login } from "./routes/Login/Login";


const App: FC = () => {

  // Handle unauth/auth app 

  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
