

import { HomeIcon } from "@heroicons/react/24/outline";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "src/components/UI/Button";
import { NOT_FOUND_GIF } from "src/config/constants";

export const Custom404: FC = () => {
  return (
    <main className="flex-col justify-center items-center">
      <img src={NOT_FOUND_GIF} alt="Confused Travolta" className="h-60" />
      <div className="py-10 text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-100">Oops, nothing to see here</h1>
        <div className="mb-4 text-gray-100">You&apos;ve landed in a page that doesn&apos;t exist.</div>
        <Link to="/" replace>
          <Button className="flex mx-auto item-center" size="lg" icon={<HomeIcon className="w-4 h-4" />}>
            <div>Go back home</div>
          </Button>
        </Link>
      </div>
    </main>
  );
}
