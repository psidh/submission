'use client';
import Main from '@/components/Main';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';
export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <>
      <section >
        {isCollapsed ? (
          <>
            <div
              className="flex items-center fixed space-x-6 cursor-pointer hover:bg-gray-200 p-2 rounded-3xl
            md:top-1 md:left-3"
              onClick={handleCollapse}
            >
              <img
                src="/collapse.svg"
                alt="svg"
                className="transform rotate-180"
              />
            </div>
            <Main />
          </>
        ) : (
          <div className="flex sm:flex-row flex-col">
            <Sidebar />
            <div
              className="flex m-4 items-start space-x-3 fixed
              
              lg:bottom-1 lg:left-3 z-10
               cursor-pointer hover:bg-gray-200 p-2 rounded-3xl"
              onClick={handleCollapse}
            >
              <img src="/collapse.svg" alt="svg" />
              <p className="text-md font-semibold pr-12 lg:visible invisible">
                Collapse
              </p>
            </div>
            <Main />
          </div>
        )}
      </section>
    </>
  );
}
