import type { FC } from "react";
import { Button } from "./components/UI/Button";
import { Card } from "./components/UI/Card";
import lensIsotype from "./assets/lens.png";

const UnauthenticatedApp: FC = () => {
  return (
    <section className="w-screen h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <Card className="flex flex-col justify-start items-center">
          <div className="my-8 mx-4">
            <h1>Login with lens</h1>
          </div>
          <div className="my-8 mx-4">
            <Button
              icon={<img className="mr-0.5 w-4 h-4" height={16} width={16} src={lensIsotype} alt="Lens Isotype" />}
            >
              Login
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default UnauthenticatedApp;