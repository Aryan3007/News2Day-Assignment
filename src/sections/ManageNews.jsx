/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { LuArrowBigRightDash } from "react-icons/lu";

const ManageNews = () => {
  const [newHeading, setNewHeading] = useState("");
  const [newDescription, setnewDescription] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModelOpen, setviewModelOpen] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [selectedNews, setSelectedNews] = useState(null);
  const [viewedNews, setViewedNews] = useState(null);

  const openModal = (news) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  };
  const openViewModal = (news) => {
    setViewedNews(news);
    setviewModelOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }; 
  
  const closeViewModal = () => {
    setviewModelOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
    }
  };

  const newsList = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1711508491465-1f242f42c826?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "heading 1",
      date: "jan 6, 2022",
      status: "Published",
      category: "Category three",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, reiciendis eius accusamus numquam voluptas illum quis perspiciatis neque odit tenetur at explicabo dolorum consequatur modi sunt! Laborum ad a nihil.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1711508491465-1f242f42c826?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "heading 34",
      date: "june 6, 2022",
      status: "Published",
      category: "Category one",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, reiciendis eius accusamus numquam voluptas illum quis perspiciatis neque odit tenetur at explicabo dolorum consequatur modi sunt! Laborum ad a nihil.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1711508491465-1f242f42c826?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "heading 1234",
      date: "july 6, 2022",
      status: "Draft",
      category: "Category Four",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, reiciendis eius accusamus numquam voluptas illum quis perspiciatis neque odit tenetur at explicabo dolorum consequatur modi sunt! Laborum ad a nihil.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1711508491465-1f242f42c826?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "heading 134",
      date: "April 6, 2022",
      status: "Published",
      category: "Category six",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, reiciendis eius accusamus numquam voluptas illum quis perspiciatis neque odit tenetur at explicabo dolorum consequatur modi sunt! Laborum ad a nihil.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1711508491465-1f242f42c826?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "heading 344",
      date: "Dec 6, 2022",
      status: "Draft",
      category: "Category three",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, reiciendis eius accusamus numquam voluptas illum quis perspiciatis neque odit tenetur at explicabo dolorum consequatur modi sunt! Laborum ad a nihil.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1711508491465-1f242f42c826?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "heading",
      date: "April 6, 2022",
      status: "Published",
      category: "Category five",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, reiciendis eius accusamus numquam voluptas illum quis perspiciatis neque odit tenetur at explicabo dolorum consequatur modi sunt! Laborum ad a nihil.",
    },
  ];

  return (
    <div className="">
      <dialog
        open={viewModelOpen}
        id="my_modal_4"
        className="modal h-screen w-screen"
      >
        {viewedNews && (
          <>
            <div className="modal-box w-96 h-[700px] bg-white text-black">
              <form method="dialog">
           
                <button onClick={closeViewModal} className="btn btn-sm btn-circle btn-ghost absolute bg-zinc-800 hover:bg-zinc-700 text-white right-2 top-2">
                  ✕
                </button>
              </form>
              <div className="">
                <img
                  src="https://images.unsplash.com/photo-1538947151057-dfe933d688d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-72 rounded-lg bg-red-400 w-full"
                  alt=""
                />
                <h1 className="my-3 font-semibold text-2xl">
                  {viewedNews.heading}
                </h1>
                <p className=" capitalize text-sm text-gray-500 whitespace-nowrap">
                  {viewedNews.date}
                </p>
                <p className="my-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Labore illo, qui nisi deleniti quos magnam consectetur nam
                  impedit id fugit eveniet corporis beatae minus eum
                  necessitatibus? Laudantium, illum vero? Aliquid!
                </p>

                <div className="flex flex-col w-full left-0 absolute bottom-0">
                  <div className="py-3 flex gap-1 justify-evenly shadow-xl rounded-md">
                    <div className="group relative px-4 cursor-pointer">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          height={32}
                          width={32}
                        >
                          <path
                            stroke="currentColor"
                            d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                          />
                        </svg>
                      </div>
                      <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                        Home
                      </span>
                    </div>
                    <div className="group relative px-4 cursor-pointer">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          height={24}
                          width={24}
                        >
                          <path
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                          />
                        </svg>
                      </div>
                      <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                        Messages
                      </span>
                    </div>
                    <div className="group relative px-4 cursor-pointer">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          height={24}
                          width={24}
                        >
                          <path
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                          />
                        </svg>
                      </div>
                      <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                        User
                      </span>
                    </div>
                    <div className="group relative px-4 cursor-pointer">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          height={24}
                          width={24}
                        >
                          <g>
                            <path
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                            />
                            <path
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1683_1163">
                              <rect fill="white" height={24} width={24} />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                        Settings
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </dialog>
      <dialog
        open={isModalOpen}
        id="my_modal_1"
        className="modal h-screen w-screen"
      >
        {selectedNews && ( // Add conditional rendering here
          <>
            <div className="modal-box bg-white shadow-xl">
              <section className="bg-white">
                <div className="container flex items-center justify-center py-2 px-6 mx-auto">
                  <div className="w-full max-w-md">
                    <div className="relative flex items-center ">
                      <input
                        onChange={(e) => {
                          setNewHeading(e.target.value);
                        }}
                        type="text"
                        className="block w-full py-3 text-gray-700 bg-white border rounded-lg p-4  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        value={selectedNews.heading}
                      />
                    </div>
                    <form className="w-full max-w-md">
                      <div className="relative flex items-center mt-8">
                        <select
                          name="Select Catagory"
                          id="SelectCatagory"
                          className="mt-1.5 border w-full   focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 rounded-lg px-4 border-gray-300 text-gray-700 bg-white h-12 sm:text-sm"
                        >
                          <option value="">{selectedNews.category}</option>
                          <option>Catagory One</option>
                          <option>Catagory two</option>
                          <option>Catagory three</option>
                          <option>Catagory four</option>
                          <option>Catagory five</option>
                          <option>Catagory six</option>
                        </select>
                      </div>

                      <label
                        htmlFor="dropzone-file"
                        className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer"
                      >
                        <h2 className="text-gray-400">
                          {selectedFileName || "Upload News Image"}
                        </h2>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </label>
                      <div className="relative flex items-center mt-6">
                        <textarea
                          onChange={(e) => {
                            setnewDescription(e.target.value);
                          }}
                          value={selectedNews.description}
                          name="description"
                          placeholder="Description..."
                          id=""
                          cols="30"
                          rows="10"
                          className="bg-white w-full border rounded-lg h-44 resize-none overflow-scroll text-black p-4  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        ></textarea>
                      </div>
                    </form>
                    <div className="flex justify-center my-6">
                      <button
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                        className="px-4 bg-zinc-800 hover:bg-zinc-700 py-2 mx-auto rounded-lg text-white w-fit"
                      >
                        Mobile screen Preview
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <div className="modal-action">
                <div className="gap-3 flex text-white" method="dialog">
                  <button
                    className="px-3 py-1 bg-red-400 rounded-lg shadow-lg"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button className="px-3 py-1 bg-yellow-500 rounded-lg shadow-lg">
                    Save Draft
                  </button>{" "}
                  <button className="px-3 py-1 bg-blue-500 rounded-lg shadow-lg">
                    Change Now
                  </button>
                </div>
              </div>
            </div>
            {setSelectedNews && (
              <dialog open={viewModelOpen} id="my_modal_3" className="modal">
                <div className="modal-box w-96 h-[700px] bg-white text-black">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute bg-zinc-800 hover:bg-zinc-700 text-white right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <div className="">
                    <img
                      src="https://images.unsplash.com/photo-1538947151057-dfe933d688d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="h-72 rounded-lg bg-red-400 w-full"
                      alt=""
                    />
                    <h1 className="my-3 font-semibold text-2xl">
                      {selectedNews.heading}
                    </h1>
                    <p className=" capitalize text-sm text-gray-500 whitespace-nowrap">
                      {selectedNews.date}
                    </p>
                    <p className="my-4">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Labore illo, qui nisi deleniti quos magnam consectetur nam
                      impedit id fugit eveniet corporis beatae minus eum
                      necessitatibus? Laudantium, illum vero? Aliquid!
                    </p>

                    <div className="flex flex-col w-full left-0 absolute bottom-0">
                      <div className="py-3 flex gap-1 justify-evenly shadow-xl rounded-md">
                        <div className="group relative px-4 cursor-pointer">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              height={32}
                              width={32}
                            >
                              <path
                                stroke="currentColor"
                                d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                              />
                            </svg>
                          </div>
                          <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                            Home
                          </span>
                        </div>
                        <div className="group relative px-4 cursor-pointer">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              height={24}
                              width={24}
                            >
                              <path
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                              />
                            </svg>
                          </div>
                          <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                            Messages
                          </span>
                        </div>
                        <div className="group relative px-4 cursor-pointer">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              height={24}
                              width={24}
                            >
                              <path
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                              />
                            </svg>
                          </div>
                          <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                            User
                          </span>
                        </div>
                        <div className="group relative px-4 cursor-pointer">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              height={24}
                              width={24}
                            >
                              <g>
                                <path
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                />
                                <path
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1683_1163">
                                  <rect fill="white" height={24} width={24} />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                            Settings
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </dialog>
            )}
          </>
        )}
      </dialog>

      <h1 className="text-3xl font-bold uppercase my-2 mx-3">Manage News</h1>

      <hr className="bg-black my-4" />
      <section className="container px-4 mx-auto">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 ">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500:text-gray-400">
                        <div className="flex items-center gap-x-3">
                          <button className="flex items-center gap-x-2">
                            <span>News Title</span>
                          </button>
                        </div>
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500:text-gray-400">
                        Date
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500:text-gray-400">
                        Status
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500:text-gray-400">
                        Category
                      </th>

                      <th className="relative py-3.5 px-4">
                        <span className="font-light">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {newsList.map((news, index) => (
                      <tr key={index}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex capitalize items-center gap-x-3">
                            <LuArrowBigRightDash />
                            <span>{news.heading}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 capitalize text-sm text-gray-500 whitespace-nowrap">
                          {news.date}
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div
                            className={`inline-flex capitalize items-center px-3 py-1 rounded-full gap-x-2 ${
                              news.status === "Published"
                                ? "text-emerald-500 bg-emerald-100/60"
                                : "text-yellow-700 bg-yellow-200/60"
                            }`}
                          >
                            <svg
                              width={12}
                              height={12}
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 3L4.5 8.5L2 6"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <h2 className="text-sm capitalize font-normal">
                              {news.status}
                            </h2>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {news.category}
                        </td>
                        <td className="px-4 py-4 justify-center items-center flex text-sm whitespace-nowrap">
                          <div className="inline-flex  rounded-lg border border-gray-100 bg-gray-100 p-1">
                            <button
                              onClick={() => openModal(news)}
                              className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                              </svg>
                              Edit
                            </button>

                            <button
                              onClick={() => openViewModal(news)}
                              className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              View
                            </button>

                            <button className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm text-red-500 shadow-sm focus:relative">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <a
            href="#"
            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            <span>previous</span>
          </a>
          <div className="items-center hidden md:flex gap-x-3">
            <a
              href="#"
              className="px-2 py-1 text-sm text-blue-500 rounded-md   bg-blue-100/60"
            >
              1
            </a>
            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md ">
              2
            </a>
            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md ">
              3
            </a>
            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md ">
              ...
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md  "
            >
              12
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md  "
            >
              13
            </a>
            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md ">
              14
            </a>
          </div>
          <a
            href="#"
            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100  "
          >
            <span>Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ManageNews;
