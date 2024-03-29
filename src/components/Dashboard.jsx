import { useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import Overview from "../sections/Overview";
import Catagories from "../sections/Catagories";
import News from "../sections/News";
import ManageNews from "../sections/ManageNews";
import PerformanceOverview from "../sections/PerformanceOverview";
import { MdOutlineDashboard } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdOutlineManageAccounts } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";



const Dashboard = () => {
  const [activeButton, setActiveButton] = useState("Dashboard");

  return (
    <>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[20%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            <h1 className="text-3xl font-bold text-center  text-sky-500 underline">
              News2Day
            </h1>
          </div>
          <div className="mt-8 text-center">
            <img
              src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              Aryan Tyagi
            </h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
          </div>
          <div className="space-y-2 mt-8">
            <button
              className={`relative px-4 w-full py-3 flex items-center space-x-4 rounded-xl ${
                activeButton === "Dashboard"
                  ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                  : "text-black bg-transparent"
              }`}
              onClick={() => setActiveButton("Dashboard")}
            >
              <MdOutlineDashboard />
              <span className="-mr-1 font-medium">Dashboard</span>
            </button>
            <button
              className={`relative px-4  w-full py-3 flex items-center space-x-4 rounded-xl ${
                activeButton === "Catagories"
                  ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                  : "text-black bg-transparent"
              }`}
              onClick={() => setActiveButton("Catagories")}
            >
              <MdMenuOpen/>
              <span className="-mr-1 font-medium">Catagories</span>
            </button>
            <button
              className={`relative px-4 py-3  w-full flex items-center space-x-4 rounded-xl ${
                activeButton === "News"
                  ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                  : "text-black bg-transparent"
              }`}
              onClick={() => setActiveButton("News")}
            >
              <FaRegNewspaper/>
              <span className="-mr-1 font-medium">News</span>
            </button>
            <button
              className={`relative px-4 py-3 w-full flex items-center space-x-4 rounded-xl ${
                activeButton === "Manage News"
                  ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                  : "text-black bg-transparent"
              }`}
              onClick={() => setActiveButton("Manage News")}
            >
              <MdOutlineManageAccounts/>
              <span className="-mr-1 font-medium">Manage News</span>
            </button>
            <button
              className={`relative px-4 py-3 w-full flex items-center space-x-4 rounded-xl ${
                activeButton === "Performance Overview"
                  ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                  : "text-black bg-transparent"
              }`}
              onClick={() => setActiveButton("Performance Overview")}
            >
              <GrDocumentPerformance/>
              <span className="-mr-1 font-medium">Performance Overview</span>
            </button>
          </div>
        </div>
        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <IoIosLogOut className="text-2xl" />
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </aside>

      <section className="p-4 bg-white ml-80">
        {activeButton === "Dashboard" && <Overview />}
        {activeButton === "Catagories" && <Catagories />}
        {activeButton === "News" && <News />}
        {activeButton === "Manage News" && <ManageNews />}
        {activeButton === "Performance Overview" && <PerformanceOverview />}
      </section>
    </>
  );
};

export default Dashboard;
