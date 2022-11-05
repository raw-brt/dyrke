// DELETE WHEN FINISHED
import type { FC } from "react";
import { Fragment, useState } from "react"
import DyrkeImagotype from "../../assets/dyrke-imagotype.svg";
import { Dialog, Menu, Transition } from "@headlessui/react"
import {
  Bars3BottomLeftIcon,
  ChartBarSquareIcon,
  CogIcon,
  PencilSquareIcon,
  PlusIcon,
  SparklesIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"

const sidebarNavigation = [
  { name: "Performance", href: "#", icon: ChartBarSquareIcon, current: false },
  { name: "Audience", href: "#", icon: UserGroupIcon, current: false },
  { name: "Content", href: "#", icon: PencilSquareIcon, current: true },
  { name: "Insights", href: "#", icon: SparklesIcon, current: false },
  { name: "Settings", href: "#", icon: CogIcon, current: false },
]
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export const AuthenticatedLayout: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  return (
    
    <>
      <div className="flex h-screen w-screen">
        {/* Narrow sidebar */}
        <div className="hidden w-auto overflow-y-auto bg-neutral-800 backdrop-blur-md md:block">
          <div className="flex w-full flex-col items-center py-6">
            <div className="w-full flex flex-shrink-0 justify-start items-center pl-6">
              <img
                className="h-8 w-auto"
                src={DyrkeImagotype}
                alt="dyrke"
              />
            </div>
            <div className="mt-6 w-full h-full flex-1 space-y-4 px-2">
              {sidebarNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? "bg-neutral-700 text-neutral-100 font-bold" : "text-neutral-100 hover:bg-neutral-700 hover:text-neutral-100 hover:font-bold",
                    "group w-64 p-3 rounded-md flex justify-start items-center text-base"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <item.icon
                    className={classNames(
                      item.current ? "text-primary-500" : "text-primary-600 group-hover:text-primary-500",
                      "h-6 w-6 mr-4"
                    )}
                    aria-hidden="true"
                  />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog as="div" className="relative z-20 md:hidden" onClose={setMobileMenuOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-neutral-800 backdrop-blur-md pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-1 right-0 -mr-14 p-1">
                      <button
                        type="button"
                        className="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-100"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <XMarkIcon className="h-6 w-6 text-neutral-100" aria-hidden="true" />
                        <span className="sr-only">Close sidebar</span>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="w-full flex flex-shrink-0 items-center pl-6">
                    <img
                      className="h-8 w-auto"
                      src={DyrkeImagotype}
                      alt="dyrke"
                    />
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto px-2">
                    <nav className="flex h-full flex-col">
                      <div className="space-y-4">
                        {sidebarNavigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-neutral-700 text-neutral-100 font-bold"
                                : "text-neutral-100 hover:bg-neutral-600 hover:text-neutral-100 hover:font-bold",
                              "group py-2 px-3 rounded-md flex items-center text-base"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            <item.icon
                              className={classNames(
                                item.current ? "text-primary-500" : "text-primary-600 group-hover:text-primary-500",
                                "mr-3 h-6 w-6"
                              )}
                              aria-hidden="true"
                            />
                            <span>{item.name}</span>
                          </a>
                        ))}
                      </div>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Content area */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <header className="w-full">
            <div className="relative z-10 flex h-16 flex-shrink-0 border-b border-neutral-700 bg-neutral-900 shadow-sm">
              <button
                type="button"
                className="border-r border-neutral-700 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 md:hidden"
                onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              <div className="flex flex-1 justify-end px-4 sm:px-6">
                <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                  {/* Profile dropdown */}
                  <button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                  <p className="hidden md:flex font-semibold text-primary-500">@rbart.lens</p>
                </div>
              </div>
            </div>
          </header>

          {/* Main content */}
          <div className="flex flex-1 items-stretch overflow-hidden bg-neutral-900">
            <main className="flex-1 overflow-y-auto">
              {/* Primary column */}
              <section aria-labelledby="primary-heading" className="flex h-full min-w-0 flex-1 flex-col lg:order-last">
                <h1 id="primary-heading" className="sr-only">
                  Photos
                </h1>
                {/* Your content */}
              </section>
            </main>

            {/* Secondary column (hidden on smaller screens) */}
            <aside className="hidden w-96 overflow-y-auto border-l border-gray-200 bg-neutral-800 lg:block">
              {/* Your content */}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};