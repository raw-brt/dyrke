import { Button } from "@components/UI/Button";
import type { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Location = "Audience" | "Publications";
type WhatToShow = "Followers" | "Mine" | "Following";

export const UpperNavigation: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const location: Location = pathname.includes("audience") ? "Audience" : "Publications"
  const whatToShow: WhatToShow = pathname.includes("followers") ? "Followers" : pathname.includes("mine") ? "Mine" : "Following"

  const handleClick = (buttonNumber: number): void => {
    if (buttonNumber === 1 && location === "Audience") navigate("/audience/followers");
    if (buttonNumber === 2 && location === "Audience") navigate("/audience/following");
    if (buttonNumber === 1 && location === "Publications") navigate("/publications/mine");
    if (buttonNumber === 2 && location === "Publications") navigate("/publications/followers");
  };

  return (
    <div className='w-auto h-auto flex justify-start items-center space-x-10'>
      <div className='flex justify-start items-center space-x-4'>
        <Button 
          size='sm' 
          variant='tertiary' 
          outline={false} 
          light={false} 
          className={whatToShow === "Followers" || whatToShow === "Mine" ? "bg-gray-800 px-4 py-2" : "bg-transparent px-4 py-2"}
          onClick={() => handleClick(1)}
        >
          <p className='font-semibold text-gray-100'>{ location === "Audience" ? "Followers" : "Mine" }</p>
        </Button>
        <Button 
          size='sm' 
          variant='tertiary' 
          outline={false} 
          light={false} 
          className={whatToShow === "Following" ? "bg-gray-800 px-4 py-2" : "bg-transparent px-4 py-2"}
          onClick={() => handleClick(2)}
        >
          <p className='font-semibold text-gray-100'>{ location === "Audience" ? "Following" : "Following" }</p>
        </Button>
      </div>
    </div>
  );
};
