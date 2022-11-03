import type { FC } from "react";
import { Button } from "./components/UI/Button";
import { Card } from "./components/UI/Card";
import lensIsotype from "./assets/lens.png";
import { Login } from "./routes/Login/Login";

const UnauthenticatedApp: FC = () => {
  return (
    <section className="w-screen h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <Login />
      </div>
    </section>
  );
};

export default UnauthenticatedApp;