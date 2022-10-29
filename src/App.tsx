import type { FC } from "react";
import UnauthenticatedApp from "./UnauthenticatedApp";

const App: FC = () => {
  return (
    <main className="w-screen h-screen">
      <UnauthenticatedApp />
    </main>
  );
}

export default App;
