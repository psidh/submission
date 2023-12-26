'use client';
import Main from '@/components/Main';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <section className="flex">
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
          </div>
        )}
        <div className="flex flex-col w-full">
          <div>
            <Navbar />
          </div>
          <a
            href="/"
            className="px-4 py-1 bg-orange-400 hover:bg-orange-600 text-white rounded-lg w-full sm:w-[12%]"
          >
            HOME
          </a>
          <h1 className="m-4 text-4xl">Philkhana Sidharth</h1>
          <h2 className="m-4 text-xl">Sophomore</h2>
          <h3 className="m-4 text-lg">Next.js Developer</h3>
        </div>
      </section>
    </>
  );
}
