import React from "react";
import { BsFillFilterSquareFill } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";

const CloudRequest = () => {
  return (
    <React.Fragment>
      <div className="bg-[#F4F4F4] w-full h-screen pt-[30px]">
        <div className="w-[1240px] mx-auto">
          <section className="w-full p-[12px] bg-white mb-[30px] rounded-[10px] flex items-center justify-start">
            <h2 className="text-[24px] inline-block leading-[36px] font-[600]">Cloud Request </h2>{" "}
            <button className="w-[30px] text-[22px] ml-[12px] bg-[#f8f8f8] rounded-[50%] h-[30px]">
              <AiOutlineReload />
            </button>
          </section>

          <section className="flex">
            <div className="w-[375px]  h-[774px] mr-[30px] p-[20px] rounded-[10px] bg-white">
              <div className="flex items-center justify-between">
                <input className="w-[285px] bg-[#F8F8F8] p-[12px] rounded-[5px]" type="text" placeholder="Search..." />
                <button className="w-[30px] text-[28px] h-[30px]">
                  <BsFillFilterSquareFill />
                </button>
              </div>
            </div>
            <div className="w-[835px] h-[774px] p-[12px] rounded-[10px] flex items-center justify-center bg-white">
              <div className="text-center">
                <h3 className="text-[18px] leading-[27px] text-[#9E9E9E] mb-[30px]">
                  You don’t have any favorite filter. Pleaes create a filter first.
                </h3>
                <button type="submit" className=" bg-[#47A7FF] text-white px-[40px] py-[12px] rounded-[5px]">
                  Create Favorite Filter
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CloudRequest;
