import React, { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import Modal from "../../shared/Modal/Modal";
import filter from "../../filter.jpg";

const CloudRequest = () => {
  const [showModal, setShowModal] = useState(false);
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
                <div className="relative flex w-full flex-wrap items-stretch mb-3">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-[285px] bg-[#F8F8F8] p-[12px] rounded-[5px] px-3 py-3 placeholder-slate-300 text-slate-600 relative  text-sm border-0  outline-none focus:outline-none focus:ring pr-10"
                  />
                  <span className="z-10 text-[20px] h-full leading-snug font-semibold absolute rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                    <FiSearch />
                  </span>
                </div>
                <button className="w-[45px] h-[45px] -mt-[15px]">
                  <img className="w-[45px] h-[45px]" src={filter} alt="" />
                </button>
              </div>
            </div>
            <div className="w-[835px] h-[774px] p-[12px] rounded-[10px] flex items-center justify-center bg-white">
              <div className="text-center">
                <h3 className="text-[18px] leading-[27px] text-[#9E9E9E] mb-[30px]">
                  You don’t have any favorite filter. Please create a filter first.
                </h3>

                <button onClick={() => setShowModal(true)} type="submit" className=" bg-[#47A7FF] text-white px-[40px] py-[12px] rounded-[5px]">
                  Create Favorite Filter
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </React.Fragment>
  );
};

export default CloudRequest;
