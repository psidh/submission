'use client';
import { useState } from 'react';
import { BsDatabaseFill } from 'react-icons/bs';
import { IoMdHelpCircle } from 'react-icons/io';
import { MdOutlineFeedback } from 'react-icons/md';
export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      {isCollapsed ? (
        <div
          className="flex items-center space-x-6 cursor-pointer hover:bg-gray-200 p-2 rounded-3xl"
          onClick={handleCollapse}
        >
        
        </div>
      ) : (
        <div className="flex flex-col justify-between items-start h-screen bg-white p-4">
          <section className=" flex flex-col justify-center items-center">
            <div>
              <img
                src="/necleo.svg"
                alt="Necleo Image"
                className="mt-4 mb-4 w-[76.11px] "
              />
            </div>

            <hr className="w-[80%] bg-gray-500 my-2 border" />

            <div className="flex  m-4 text-orange-400 ">
              <BsDatabaseFill className="w-6 h-6" />
              <p className="pl-4 pr-8">My Projects</p>
            </div>
            <div className="flex  m-4 text-orange-400 ">
              <img src="/sample.svg" alt="svg" />
              <p className="pl-4 text-gray-400">Sample Projects</p>
            </div>
            <hr className="w-[80%] bg-gray-500 my-2 border" />
            <div className="flex  m-4 text-orange-400 ">
              <img src="/apps.svg" alt="svg" />
              <p className="pl-4 px-20 text-gray-400">Apps</p>
            </div>
            <div className="flex m-4 text-orange-400 ">
              <img src="/play.svg" alt="svg" />
              <p className="px-3 text-gray-400">Intro to Necleo</p>
            </div>
          </section>

          <section className=" flex flex-col justify-between items-center mb-4 ">
            <div className="flex m-4 text-gray-400 ">
              <IoMdHelpCircle className="w-7 h-7" />
              <p className="pl-2 pr-4 text-gray-400">Help & Support</p>
            </div>
            <div className="flex mb-8 mr-4 ml-4 mt-4 text-gray-400 ">
              <MdOutlineFeedback className="w-7 h-7 ml-1" />
              <p className="pl-2 pr-14 text-gray-400">Feedback</p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
