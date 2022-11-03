import { useState } from "react";
import type { FC } from "react";
import { WalletConnector } from "./Components/WalletConnector";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { Card } from "src/components/UI/Card";

export const Login: FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [hasLensProfile, setHasLensProfile] = useState(false);

  return (
    <section className='w-auto h-auto flex flex-col justify-start items-center p-10'>
      <Card 
        className='bg-neutral-800 border-none rounded-xl'
        >
        <div className='space-y-1'>
          {/* Header */}
          <div className='w-full h-auto flex justify-start items-center border-b border-neutral-700 p-5'>
            <LockClosedIcon className='w-6 mr-2 text-primary-500' />
            <h1 className='text-2xl font-bold text-gray-100'>Login to dyrke</h1>
          </div>
          {/* Body */}
          <div className='text-sm text-gray-100 p-5'>
            <p className="mb-5 text-base text-neutral-100">Connect with one of our available wallet providers or create a new one.</p>
            <WalletConnector setIsConnected={setIsConnected} setHasLensProfile={setHasLensProfile} />
          </div>
        </div>
      </Card>
    </section>
  );
};
