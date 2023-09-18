import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden sm:hidden lg:block xl:block">
        <section className="mx-24 mt-16">
          <div className="flex gap-14">
            <div className=" w-7/12">
              <div className=" p-12 hover:shadow-2xl">
                <Link to="/cryptocurrency">
                  <div>
                    <p className=" text-lg font-bold text-[#0c3c4c] mb-1 head">
                      Writing
                    </p>
                    <h5 className="text-4xl mb-2 heading">
                      {" "}
                      Bitcoin vs. Ethereum: Unmasking the Battle of Blockchain
                      Consensus
                    </h5>
                  </div>
                  <div className="flex justify-between mb-2 body">
                    <p>September 16 2023</p>
                    <p>3 min read</p>
                  </div>
                  <div className="body">
                    In the ever-evolving landscape of cryptocurrencies, two
                    giants stand tall: Bitcoin and Ethereum. Beyond the
                    surface-level rivalry, a deeper clash of blockchain
                    consensus mechanisms shapes their fundamental differences.
                    Strap in as we dissect this clash and shed light on the
                    inner workings of these blockchain behemoths.
                  </div>
                </Link>
              </div>
              <div className=" p-12 hover:shadow-2xl">
                <Link to="/cryptocurrency+trading">
                  <div>
                    <p className=" text-lg font-bold text-[#0c3c4c] mb-1 head">
                      Writing
                    </p>
                    <h5 className="text-4xl mb-2 heading">
                      {" "}
                      CRYPTOCURRENCY TRADING IS BAD FOR AMATEURS
                    </h5>
                  </div>
                  <div className="flex justify-between mb-2 body">
                    <p>September 15 2023</p>
                    <p>4 min read</p>
                  </div>
                  <div className="body">
                    Given the complexities and risks associated with
                    cryptocurrency trading, it’s not a dvisable to venture into
                    it as an amateur. Especially now that there are several
                    avenues to learn, going into cryptocurrency trading without
                    proper knowledge is wrong. However, you can sometimes get
                    lucky and have your investment blow up into massive profits.
                    It is still very likely that you will end up with losses.
                  </div>
                </Link>
              </div>
              <div className=" p-12 hover:shadow-2xl">
                <Link to="/webgtr">
                  <div>
                    <p className=" text-lg font-bold text-[#0c3c4c] mb-1 head">
                      Writing
                    </p>
                    <h5 className="text-4xl mb-2 heading">
                      {" "}
                      What is Token Lockup?
                    </h5>
                  </div>
                  <div className="flex justify-between mb-2 body">
                    <p>September 15 2023</p>
                    <p>2 min read</p>
                  </div>
                  <div className="body">
                    The term “token lockup” refers to a specific duration during
                    which cryptocurrency tokens are restricted from being
                    transacted or traded. Typically, these lockup periods serve
                    as a strategic measure to ensure the enduring stability of a
                    particular asset.
                  </div>
                </Link>
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
                    placeholder="admin@blockpeg.capital"
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
                    <a href="">
                      Bitcoin vs. Ethereum: Unmasking the Battle of Blockchain
                      Consensus
                    </a>
                  </div>
                  <div className=" mb-6 hover:text-lg font-medium hover:text-[#0c3c4c]">
                    <a href="">CRYPTOCURRENCY TRADING IS BAD FOR AMATEURS</a>
                  </div>
                  <div className=" mb-6 hover:text-lg font-medium hover:text-[#0c3c4c]">
                    <a href="">What is Token Lockup?</a>
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
                <Link to="/cryptocurrency">
                  <div>
                    <p className=" text-xl font-bold text-[#0c3c4c] mb-1 head">
                      Writing
                    </p>
                    <h5 className="text-3xl mb-2 heading">
                      {" "}
                      Bitcoin vs. Ethereum: Unmasking the Battle of Blockchain
                      Consensus
                    </h5>
                  </div>
                  <div className="flex justify-between mb-2 body">
                    <p>September 16 2023</p>
                    <p>3 min read</p>
                  </div>
                  <div className="body text-lg">
                    In the ever-evolving landscape of cryptocurrencies, two
                    giants stand tall: Bitcoin and Ethereum. Beyond the
                    surface-level rivalry, a deeper clash of blockchain
                    consensus mechanisms shapes their fundamental differences.
                    Strap in as we dissect this clash and shed light on the
                    inner workings of these blockchain behemoths.
                  </div>
                </Link>
              </div>
              <div className=" p-4 hover:shadow-2xl">
                <Link to="/cryptocurrency+trading">
                  <div>
                    <p className=" text-xl font-bold text-[#0c3c4c] mb-1 head">
                      Writing
                    </p>
                    <h5 className="text-3xl mb-2 heading">
                      {" "}
                      CRYPTOCURRENCY TRADING IS BAD FOR AMATEURS
                    </h5>
                  </div>
                  <div className="flex justify-between mb-2 body">
                    <p>September 15 2023</p>
                    <p>4 min read</p>
                  </div>
                  <div className="body text-lg">
                    Given the complexities and risks associated with
                    cryptocurrency trading, it’s not a dvisable to venture into
                    it as an amateur. Especially now that there are several
                    avenues to learn, going into cryptocurrency trading without
                    proper knowledge is wrong. However, you can sometimes get
                    lucky and have your investment blow up into massive profits.
                    It is still very likely that you will end up with losses.
                  </div>
                </Link>
              </div>
              <div className=" p-4 hover:shadow-2xl">
                <Link to="/webgtr">
                  <div>
                    <p className=" text-xl font-bold text-[#0c3c4c] mb-1 head">
                      Writing
                    </p>
                    <h5 className="text-3xl mb-2 heading">
                      {" "}
                      What is Token Lockup?
                    </h5>
                  </div>
                  <div className="flex justify-between mb-2 body">
                    <p>September 15 2023</p>
                    <p>2 min read</p>
                  </div>
                  <div className="body text-lg">
                    The term “token lockup” refers to a specific duration during
                    which cryptocurrency tokens are restricted from being
                    transacted or traded. Typically, these lockup periods serve
                    as a strategic measure to ensure the enduring stability of a
                    particular asset.
                  </div>
                </Link>
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
