import type { Dispatch, FC } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { getIPFSLink } from "../../lib/getIPFSLink";
import { useProfileStore } from "src/store/profiles";
import { STATIC_ASSETS } from "src/config/constants";
import { useRightSidebarState } from "src/store/rightSidebar";
import { ProfileSidebar } from "@components/Profile/ProfileSidebar";

interface Props {
  rightSidebarOpen: boolean;
  setRightSidebarOpen: Dispatch<boolean>;
}

export const RightSidebar: FC<Props> = ({ rightSidebarOpen, setRightSidebarOpen }) => {
  // Store
  const sidebarContents = useRightSidebarState((state) => state);
  const { currentProfile } = useProfileStore((state) => state);
  const currentProfileHandle = useProfileStore((state) => state.currentProfileHandle);

  // Profile image
  const currentProfileImage =
    currentProfile?.picture?.__typename === "MediaSet"
      ? currentProfile?.picture?.original?.url
      : `${STATIC_ASSETS}/patterns/2.svg`;

  return (
    <Transition.Root show={rightSidebarOpen} as={Fragment}>
      <Dialog as='div' className='relative z-20' onClose={setRightSidebarOpen}>
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed top-0 right-0 bg-gray-600 bg-opacity-75' />
        </Transition.Child>

        <div className='fixed top-0 right-0 z-40 h-screen flex justify-end'>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='translate-x-full'
            enterTo='-translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='-translate-x-0'
            leaveTo='translate-x-full'
          >
            <Dialog.Panel className='relative flex w-full max-w-md flex-1 flex-col bg-gray-800 backdrop-blur-md pb-4'>
              <Transition.Child
                as={Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='absolute top-1 right-0 p-1'>
                  <button
                    type='button'
                    className='flex h-12 w-12 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-100'
                    onClick={() => setRightSidebarOpen(false)}
                  >
                    <ChevronRightIcon className='h-6 w-6 text-neutral-100' aria-hidden='true' />
                    <span className='sr-only'>Close sidebar</span>
                  </button>
                </div>
              </Transition.Child>
              <div className='h-16 flex flex-shrink-0 items-center border-b border-gray-700'>
                <div className='flex justify-start items-center space-x-2 ml-5'>
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
                  <p className='md:flex font-semibold text-primary-500'>@{currentProfileHandle}</p>
                </div>
              </div>
              {sidebarContents.whatToShow === "ownProfile" && (
                <div className='h-full flex-1 px-5'>
                  <ProfileSidebar />
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
