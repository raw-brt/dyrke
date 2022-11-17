import { useState } from "react";
import type { FC } from "react";
import { WalletConnector } from "./Components/WalletConnector";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/24/solid";
import { Card } from "src/components/UI/Card";
import { CHAIN_ID, LENS_HANDLE_CLAIM } from "src/config/constants";
import { useNetwork } from "wagmi";
import { ExclamationCircleIcon, IdentificationIcon } from "@heroicons/react/24/outline";
import { SwitchNetwork } from "src/components/Shared/SwitchNetwork";
import { Button } from "src/components/UI/Button";
import LensIcon from "../../assets/lens-icon.svg";

export const Login: FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [hasLensProfile, setHasLensProfile] = useState(true);

  const { chain } = useNetwork();

  return (
    <section className='w-auto h-auto flex flex-col justify-start items-center p-10'>
      <Card className='bg-gray-800 border-none rounded-xl max-w-md'>
        <div className='space-y-1'>
          {isConnected && hasLensProfile ? (
            <>
              {/* Header */}

              <div className='w-full h-auto flex justify-start items-center border-b border-gray-700 p-5'>
                {chain?.id === CHAIN_ID ? (
                  <LockOpenIcon className='w-6 mr-2 text-primary-500' />
                ) : (
                  <ExclamationCircleIcon className='w-6 mr-2 text-primary-500' />
                )}
                <h1 className='text-2xl font-bold text-gray-100'>
                  {chain && chain?.id !== CHAIN_ID ? "Wrong network" : "Login to dyrke"}
                </h1>
              </div>

              {/* Body */}

              <div className='text-sm text-gray-100 p-5'>
                <p className='mb-5 text-base text-neutral-100'>
                  {chain?.id === CHAIN_ID
                    ? "Sign this message to prove that your account is holding your Lens profile."
                    : "Please, connect your wallet to the Polygon network to use dyrke."}
                </p>
                <WalletConnector
                  setIsConnected={setIsConnected}
                  setHasLensProfile={setHasLensProfile}
                />
              </div>
            </>
          ) : isConnected && !hasLensProfile ? (
            <>
              {/* Header */}

              <div className='w-full h-auto flex justify-start items-center border-b border-gray-700 p-5'>
                {chain?.id === CHAIN_ID ? (
                  <IdentificationIcon className='w-6 mr-2 text-primary-500' />
                ) : (
                  <ExclamationCircleIcon className='w-6 mr-2 text-primary-500' />
                )}
                <h1 className='text-2xl font-bold text-gray-100'>
                  {chain?.id === CHAIN_ID ? "Claim Lens profile" : "Wrong network"}
                </h1>
              </div>

              {/* Body */}

              <div className='text-sm text-gray-100 p-5'>
                <p className='mb-5 text-base text-neutral-100'>
                  {chain?.id === CHAIN_ID
                    ? "You need a Lens profile to use dyrke. Click below to claim yours."
                    : "Please, connect your wallet to the Polygon network to use dyrke."}
                </p>
                {/* Prompt to claim handle */}
                {chain?.id === CHAIN_ID ? (
                  <Button
                    className='flex item-center'
                    size='lg'
                    icon={
                      <img
                        src={LensIcon}
                        className='mr-1 w-5 h-5 text-gray-900'
                        alt='Lens Isotype'
                      />
                    }
                  >
                    <div>Claim Lens profile</div>
                  </Button>
                ) : (
                  <SwitchNetwork />
                )}
              </div>
            </>
          ) : (
            <>
              {/* Header */}

              <div className='w-full h-auto flex justify-start items-center border-b border-gray-700 p-5'>
                <LockClosedIcon className='w-6 mr-2 text-primary-500' />
                <h1 className='text-2xl font-bold text-gray-100'>Login to dyrke</h1>
              </div>

              {/* Body */}

              <div className='text-sm text-gray-100 p-5'>
                <p className='mb-5 text-base text-neutral-100'>
                  Connect with one of our available wallet providers or create a new one.
                </p>
                <WalletConnector
                  setIsConnected={setIsConnected}
                  setHasLensProfile={setHasLensProfile}
                />
              </div>
            </>
          )}
        </div>
      </Card>
      <p className='text-base mt-10 text-neutral-100'>
        Don&apos;t have a Lens profile?{" "}
        <a
          href={LENS_HANDLE_CLAIM}
          target='__blank'
          rel='noopener noreferrer'
          className='text-primary-500'
        >
          Click here to claim yours.
        </a>
      </p>
    </section>
  );
};
