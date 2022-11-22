import { Button } from "@components/UI/Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import type { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const UpperNavigation: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  console.log(window.history)

  // Necesito conocer la historia para ir adelante o atrás

  return (
    <div className="hidden w-auto h-auto md:flex justify-start items-center space-x-10">
      {/* Back and forth */}
      <div className="flex justify-start items-center space-x-4">
        <Button
          size="sm"
          variant="tertiary"
          outline={false}
          light={false} 
        >
          <ChevronLeftIcon className="w-4 h-4 text-gray-100" />
        </Button>
        <Button
          size="sm"
          variant="tertiary"
          outline={false}
          light={false} 
        >
          <ChevronRightIcon className="w-4 h-4 text-gray-100 font-semibold" />
        </Button>
      </div>
      {
        pathname.includes("audience") 
          ?
            (
              <div className="flex justify-start items-center space-x-4">
                <Button
                  size="sm"
                  variant="tertiary"
                  outline={false}
                  light={false}
                  className="p-2" 
                >
                  <p className="font-semibold text-gray-100">Followers</p>
                </Button>
                <Button
                  size="sm"
                  variant="tertiary"
                  outline={false}
                  light={false}
                  className="p-2"  
                >
                  <p className="font-semibold text-gray-100">Following</p>
                </Button>
              </div>
            )
          : null

      }
    </div>
  );
};