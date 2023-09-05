import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Blog = () => {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden sm:hidden lg:block xl:block">
        <section className="mx-24 mt-16">
          <div className="flex gap-14">
            <div className=" w-7/12">
              <div className=" p-12 hover:shadow-2xl">
                <div>
                  <p className=" text-lg font-bold text-[#0c3c4c] mb-1 head">
                    Writing
                  </p>
                  <h5 className="text-4xl mb-2 heading">
                    {" "}
                    Lorem ipsum dolor sit amet
                  </h5>
                </div>
                <div className="flex justify-between mb-2 body">
                  <p>August 24 2023</p>
                  <p>9 min read</p>
                </div>
                <div className="body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
              <div className=" p-12 hover:shadow-2xl">
                <div>
                  <p className=" text-lg font-bold text-[#0c3c4c] mb-1 head">
                    Writing
                  </p>
                  <h5 className="text-4xl mb-2 heading">
                    {" "}
                    Lorem ipsum dolor sit amet
                  </h5>
                </div>
                <div className="flex justify-between mb-2 body">
                  <p>August 24 2023</p>
                  <p>9 min read</p>
                </div>
                <div className="body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
              <div className=" p-12 hover:shadow-2xl">
                <div>
                  <p className=" text-lg font-bold text-[#0c3c4c] mb-1 head">
                    Writing
                  </p>
                  <h5 className="text-4xl mb-2 heading">
                    {" "}
                    Lorem ipsum dolor sit amet
                  </h5>
                </div>
                <div className="flex justify-between mb-2 body">
                  <p>August 24 2023</p>
                  <p>9 min read</p>
                </div>
                <div className="body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
            <div className="  w-5/12">
              <div className="bg-slate-200 px-8 py-10 mb-4">
                <div className="mb-2">
                  <h5 className="text-xl font-bold text-[#0c3c4c] head mb-3">
                    Sign up for our newsletter
                  </h5>
                  <p className="body">
                    Subscribe to get the best insights in crypto delivered
                    directly to your inbox.
                  </p>
                </div>
                <div className="relative">
                  <input
                    className=" bg-[#f2f8fe] body w-full p-2 placeholder-neutral-400 focus:outline-none"
                    type="text"
                    placeholder="jemeelsanni@gmail.com"
                  />
                  <button className="absolute top-0 end-0 py-2 px-4 fill-[#0c3c4c] ">
                    <IoIosArrowForward size={24} />
                  </button>
                </div>
              </div>
              <div className="bg-slate-200 px-8 py-10">
                <div className="mb-2">
                  <div className="border-b-2 border-black">
                    <h5 className="text-2xl heading my-1">Writing</h5>
                  </div>
                </div>
                <div className="mt-2 body">
                  <div className=" mb-6 hover:text-lg font-medium hover:text-[#0c3c4c]">
                    <a href="">Lorem ipsum dolor sit amet.</a>
                  </div>
                  <div className=" mb-6 hover:text-lg font-medium hover:text-[#0c3c4c]">
                    <a href="">Lorem ipsum dolor sit amet.</a>
                  </div>
                  <div className=" mb-6 hover:text-lg font-medium hover:text-[#0c3c4c]">
                    <a href="">Lorem ipsum dolor sit amet.</a>
                  </div>
                  <div className=" mb-6 hover:text-lg font-medium hover:text-[#0c3c4c]">
                    <a href="">Lorem ipsum dolor sit amet.</a>
                  </div>
                  <div className=" mb-6 hover:text-lg font-medium hover:text-[#0c3c4c]">
                    <a href="">Lorem ipsum dolor sit amet.</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Mobile */}
      <div className=" sm:block lg:hidden xl:hidden ">
        <section className="mx-4 mt-8">
          <div className="flex flex-col-reverse gap-14">
            <div className=" w-full">
              <div className=" p-4 hover:shadow-2xl">
                <div>
                  <p className=" text-xl font-bold text-[#0c3c4c] mb-1 head">
                    Writing
                  </p>
                  <h5 className="text-3xl mb-2 heading">
                    {" "}
                    Lorem ipsum dolor sit amet
                  </h5>
                </div>
                <div className="flex justify-between mb-2 body">
                  <p>August 24 2023</p>
                  <p>9 min read</p>
                </div>
                <div className="body text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
              <div className=" p-4 hover:shadow-2xl">
                <div>
                  <p className=" text-xl font-bold text-[#0c3c4c] mb-1 head">
                    Writing
                  </p>
                  <h5 className="text-3xl mb-2 heading">
                    {" "}
                    Lorem ipsum dolor sit amet
                  </h5>
                </div>
                <div className="flex justify-between mb-2 body">
                  <p>August 24 2023</p>
                  <p>9 min read</p>
                </div>
                <div className="body text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
              <div className=" p-4 hover:shadow-2xl">
                <div>
                  <p className=" text-xl font-bold text-[#0c3c4c] mb-1 head">
                    Writing
                  </p>
                  <h5 className="text-3xl mb-2 heading">
                    {" "}
                    Lorem ipsum dolor sit amet
                  </h5>
                </div>
                <div className="flex justify-between mb-2 body">
                  <p>August 24 2023</p>
                  <p>9 min read</p>
                </div>
                <div className="body text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
            {/* <div className="  w-full">
              <div className="bg-slate-200 px-8 py-4">
                <div className="">
                  <h5 className="text-xl font-bold text-[#0c3c4c] head mb-3">
                    Sign up for our newsletter
                  </h5>
                  <p className="body">
                    Subscribe to get the best insights in crypto delivered
                    directly to your inbox.
                  </p>
                </div>
                <div className="relative">
                  <input
                    className=" bg-[#f2f8fe] body  w-full p-2 placeholder-neutral-400 focus:outline-none"
                    type="text"
                    placeholder="jemeelsanni@gmail.com"
                  />
                  <button className="absolute top-0 end-0 py-2 px-4 fill-[#0c3c4c] ">
                    <IoIosArrowForward size={24} />
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
