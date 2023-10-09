import React from "react";

const Products = () => {
  return (
    <div>
      <div className=" flex justify-between items-center gap-12 flex-row mx-16 my-36">
        <div className="text-[#0B245B]">
          <h1 className=" mb-12 literata text-5xl font-bold">Products</h1>
          <p className="lato text-lg font-normal">
            BlockPeg Capital's range of single and diversified funds provides
            investors with comprehensive exposure to the digital asset market.
          </p>
        </div>
        <div>
          <div className=" mb-12">
            <h1 className=" mb-6 lato text-[#0B245B] text-[32px] font-bold">
              Venture Equity
            </h1>
            <p className=" text-[#0B245B] lato text-lg font-normal">
              We offer exposure to equity in blockchain companies, leveraging
              our strong reputation and technical expertise to identify and lead
              investments in this emerging ecosystem.
            </p>
          </div>
          <div className=" mb-12">
            <h1 className=" mb-6 lato text-[#0B245B] text-[32px] font-bold">Early-Stage Tokens</h1>
            <p className=" text-[#0B245B] lato text-lg font-normal">
              Access to cutting-edge, efficient, and scalable protocols. Similar
              to venture capital equity, but involving token investments in the
              private stage at a discounted rate compared to the listing price.
            </p>
          </div>
          <div className="">
            <h1 className=" mb-6 lato text-[#0B245B] text-[32px] font-bold">Liquid Tokens</h1>
            <p className=" text-[#0B245B] lato text-lg font-normal">
              We offer exposure to equity in blockchain companies, leveraging
              our strong reputation and technical expertise to identify and lead
              investments in this emerging ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
