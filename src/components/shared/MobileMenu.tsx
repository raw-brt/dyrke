import { Dialog, Transition } from "@headlessui/react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import type { Dispatch, FC, ReactElement } from "react";
import { Fragment } from "react";
import DyrkeImagotype from "../../assets/dyrke-imagotype.svg";

interface NavigationElement {
  name: string;
  href: string;
  icon: (
    props: React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    },
  ) => JSX.Element;
  current: boolean;
}

interface Props {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<boolean>;
  sidebarNavigation: NavigationElement[];
}

export const MobileMenu: FC<Props> = ({ mobileMenuOpen, setMobileMenuOpen, sidebarNavigation }) => {
  return (
    <Transition.Root show={mobileMenuOpen} as={Fragment}>
      <Dialog as='div' className='relative z-20 md:hidden' onClose={setMobileMenuOpen}>
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-600 bg-opacity-75' />
        </Transition.Child>

        <div className='fixed inset-0 z-40 flex'>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <Dialog.Panel className='relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 backdrop-blur-md pb-4'>
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
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <ChevronLeftIcon className='h-6 w-6 text-neutral-100' aria-hidden='true' />
                    <span className='sr-only'>Close sidebar</span>
                  </button>
                </div>
              </Transition.Child>
              <div className='w-full h-16 flex flex-shrink-0 items-center pl-6 border-b border-gray-700'>
                <img className='h-8 w-auto' src={DyrkeImagotype} alt='dyrke' />
              </div>
              <div className='mt-5 h-0 flex-1 overflow-y-auto px-2'>
                <nav className='flex h-full flex-col'>
                  <div className='space-y-4'>
                    {sidebarNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={clsx(
                          item.current
                            ? "bg-gray-700 text-neutral-100 font-bold"
                            : "text-neutral-100 hover:bg-gray-600 hover:text-neutral-100 hover:font-bold",
                          "group py-2 px-3 rounded-md flex items-center text-base",
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <item.icon
                          className={clsx(
                            item.current
                              ? "text-primary-500"
                              : "text-primary-600 group-hover:text-primary-500",
                            "mr-3 h-6 w-6",
                          )}
                          aria-hidden='true'
                        />
                        <span>{item.name}</span>
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </Dialog.Panel>
          </Transition.Child>
          <div className='w-14 flex-shrink-0' aria-hidden='true'>
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
