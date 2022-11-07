import type { FC, ReactNode } from "react";
import { Fragment, useState } from "react";
import DyrkeImagotype from "../../assets/dyrke-imagotype.svg";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3BottomLeftIcon,
  ChartBarSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CogIcon,
  PencilSquareIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Profile } from "../Profile/Profile";
import { useProfileStore } from "src/store/profiles";
import { getIPFSLink } from "../../lib/getIPFSLink";
import { STATIC_ASSETS } from "src/config/constants";
import { RightSidebar } from "./RightSidebar";
import { MobileMenu } from "./MobileMenu";

interface AuthLayoutProps {
  children: ReactNode;
}

const sidebarNavigation = [
  { name: "Performance", href: "/performance", icon: ChartBarSquareIcon, current: true },
  { name: "Audience", href: "/audience", icon: UserGroupIcon, current: false },
  { name: "Content", href: "/content", icon: PencilSquareIcon, current: false },
  { name: "Insights", href: "/insights", icon: SparklesIcon, current: false },
  { name: "Settings", href: "/settings", icon: CogIcon, current: false },
];

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  const { currentProfile } = useProfileStore((state) => state);
  const currentProfileHandle = useProfileStore((state) => state.currentProfileHandle);
  
  // Profile image
  const currentProfileImage = currentProfile?.picture?.__typename === "MediaSet"
  ? currentProfile?.picture?.original?.url
  : `${STATIC_ASSETS}/patterns/2.svg`

  return (
    <>
      <div className='flex h-screen w-screen'>
        {/* Narrow sidebar */}
        <div className='hidden w-auto overflow-y-auto bg-gray-800 backdrop-blur-md md:block border-r border-gray-700'>
          <div className='flex w-full flex-col items-center'>
            <div className='w-full h-16 flex flex-shrink-0 justify-start items-center pl-6 border-b border-gray-700'>
              <img className='h-8 w-auto' src={DyrkeImagotype} alt='dyrke' />
            </div>
            <div className='mt-6 w-full h-full flex-1 space-y-4 px-2'>
              {sidebarNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={clsx(
                    item.current
                      ? "bg-gray-700 text-neutral-100 font-bold"
                      : "text-neutral-100 hover:bg-gray-700 hover:text-neutral-100 hover:font-bold",
                    "group w-64 p-3 rounded-md flex justify-start items-center text-base",
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <item.icon
                    className={clsx(
                      item.current
                        ? "text-primary-500"
                        : "text-primary-600 group-hover:text-primary-500",
                      "h-6 w-6 mr-4",
                    )}
                    aria-hidden='true'
                  />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <RightSidebar rightSidebarOpen={rightSidebarOpen} setRightSidebarOpen={setRightSidebarOpen} />

        <MobileMenu 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen}
          sidebarNavigation={sidebarNavigation} 
        />

        {/* Content area */}
        <div className='flex flex-1 flex-col overflow-hidden'>
          <header className='w-full'>
            <div className='relative z-10 flex h-16 flex-shrink-0 border-b border-gray-700 bg-gray-900 shadow-sm'>
              <button
                type='button'
                className='border-r border-gray-700 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 md:hidden'
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className='sr-only'>Open sidebar</span>
                <Bars3BottomLeftIcon className='h-6 w-6' aria-hidden='true' />
              </button>
              <div className='flex flex-1 justify-end'>
                <div className='flex justify-center items-center space-x-2 md:border-none border-l border-gray-700 px-4'>
                  {/* Profile dropdown */}
                  <button
                    className='flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
                    onClick={() => setRightSidebarOpen(true)}
                  >
                    <span className='sr-only'>Open user menu</span>
                    <img
                      className='h-8 w-8 rounded-full'
                      src={getIPFSLink(currentProfileImage)}
                      alt=''
                    />
                  </button>
                  <p className='hidden md:flex font-semibold text-primary-500'>@{currentProfileHandle}</p>
                </div>
              </div>
            </div>
          </header>

          {/* Main content */}
          <div className='flex flex-1 items-stretch overflow-hidden bg-gray-900'>
            <main className='flex-1 overflow-y-auto'>
              {/* Primary column */}
              <section
                aria-labelledby='primary-heading'
                className='flex h-full min-w-0 flex-1 flex-col lg:order-last'
              >
                {children}
              </section>
            </main>
          </div>
        </div>
      </div>
      <Toaster position='top-center' />
    </>
  );
};
