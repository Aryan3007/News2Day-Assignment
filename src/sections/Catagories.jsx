import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const Catagories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold uppercase my-2 mx-3">Catagories</h1>
        <button
          onClick={openModal}
          className="btn bg-blue-500 text-white border-0 hover:bg-blue-700"
        >
          <CiCirclePlus className="text-2xl" /> <span>Create New Category</span>
        </button>

        {isModalOpen && (
          <>
            <dialog
              open={isModalOpen}
              id="my_modal_1"
              className="modal h-screen w-screen"
            >
              <div className="modal-box bg-white shadow-xl">
                <section className="bg-white">
                  <div className="container flex items-center justify-center py-2 px-6 mx-auto">
                    <div className="w-full max-w-md">
                      <div className="relative flex items-center ">
                        <input
                          type="text"
                          className="block w-full py-3 text-gray-700 bg-white border rounded-lg p-4  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                          placeholder="Catagory Title"
                        />
                      </div>
                      <form className="w-full max-w-md">
                        <div className="relative flex items-center mt-6">
                          <textarea
                            name="description"
                            placeholder="Description..."
                            id=""
                            cols="30"
                            rows="10"
                            className="bg-white w-full border rounded-lg h-44 resize-none overflow-scroll text-black p-4  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                          ></textarea>
                        </div>
                      </form>
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

                    <button className="px-3 py-1 bg-blue-500 rounded-lg shadow-lg">
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </dialog>
          </>
        )}
      </div>
      <hr className="bg-black my-4" />
      <section className="bg-white ">
        <div className="container px-6  mx-auto">
          <div className="grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-72"
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline "
                >
                  Catagory Name
                </a>
                <p className="my-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Commodi harum voluptates at
                </p>
                <span className="text-sm text-gray-500 ">
                  Created On : 20 October 2019
                </span>
                <button className="bg-black rounded-md my-2 w-fit text-white px-4 py-2">
                  Delete Category
                </button>
              </div>
            </div>
            <div className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-72"
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline "
                >
                  Catagory Name
                </a>
                <p className="my-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Commodi harum voluptates at
                </p>
                <span className="text-sm text-gray-500 ">
                  Created On : 20 October 2019
                </span>
                <button className="bg-black rounded-md my-2 w-fit text-white px-4 py-2">
                  Delete Category
                </button>
              </div>
            </div>
            <div className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-72"
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline "
                >
                  Catagory Name
                </a>
                <p className="my-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Commodi harum voluptates at
                </p>
                <span className="text-sm text-gray-500 ">
                  Created On : 20 October 2019
                </span>
                <button className="bg-black rounded-md my-2 w-fit text-white px-4 py-2">
                  Delete Category
                </button>
              </div>
            </div>
            <div className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-72"
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline "
                >
                  Catagory Name
                </a>
                <p className="my-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Commodi harum voluptates at
                </p>
                <span className="text-sm text-gray-500 ">
                  Created On : 20 October 2019
                </span>
                <button className="bg-black rounded-md my-2 w-fit text-white px-4 py-2">
                  Delete Category
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catagories;
