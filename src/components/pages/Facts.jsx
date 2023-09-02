import React from "react";
import Ttransaction from "../assets/icon-9.png";
import Mtransaction from "../assets/icon-10.png";
import Tottransaction from "../assets/icon-2.png";

const Facts = () => {
  return (
    <div className="container-xxl bg-light py-5 my-5">
      <div className="container flex justify-around bg-[#F2F8FE] p-24 mx-auto w-full">
        <div>
          <div className="flex flex-col gap-2 items-center justify-center text-center">
            <img class="" src={Ttransaction} alt="" />
            <h1 className=" text-6xl font-medium">123456</h1>
            <p class="text-xl text-[#16D5FF] font-normal">Today Transactions</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 items-center justify-center text-center">
            <img class="" src={Mtransaction} alt="" />
            <h1 className=" text-6xl font-medium">123456</h1>
            <p class="text-xl text-[#16D5FF] font-normal">
              Monthly Transactions
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 items-center justify-center text-center">
            <img class="" src={Tottransaction} alt="" />
            <h1 className=" text-6xl font-medium">123456</h1>
            <p class="text-xl text-[#16D5FF] font-normal">Total Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
