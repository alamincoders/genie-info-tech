import React, { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import Modal from "../../shared/Modal/Modal";
import { Link } from "react-router-dom";
import { Option, Select } from "@material-tailwind/react";
import FilterItem from "../FilterItem/FilterItem";

const FilterManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <div className="bg-[#F4F4F4] w-full h-screen pt-[30px]">
        <div className="w-[1240px] mx-auto">
          <section className="w-full p-[12px] bg-white mb-[30px] rounded-[10px] flex items-center justify-between">
            <div className="flex items-center justify-center">
              <h2 className="text-[24px] inline-block leading-[36px] font-[600]">Filter Management</h2>{" "}
              <button className="w-[30px] text-[22px] ml-[12px] bg-[#f8f8f8] rounded-[50%] h-[30px]">
                <AiOutlineReload />
              </button>
            </div>
            <div>
              <Link to="/cloud">
                <button className="py-[7px] px-[15px] ring-1 rounded">Back</button>
              </Link>
            </div>
          </section>

          <section className="flex">
            <div className="w-[375px]  h-[523px] mr-[30px] p-[20px] rounded-[10px] bg-white">
              <div className="flex items-center justify-between mb-[24px]">
                <div class="relative flex w-full flex-wrap items-stretch">
                  <input
                    type="text"
                    placeholder="Search..."
                    class="w-full bg-[#F8F8F8] p-[12px] rounded-[5px] px-3 py-3 placeholder-slate-300 text-slate-600 relative  text-sm border-0  outline-none focus:outline-none focus:ring pr-10"
                  />
                  <span class="z-10 text-[20px] h-full leading-snug font-semibold absolute rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                    <FiSearch />
                  </span>
                </div>
              </div>
              <div>
                <FilterItem />
              </div>
            </div>
            <div className="w-[835px] h-[523px] p-[20px] rounded-[10px] bg-white">
              <div>
                <h2 className="text-[18px] leading-[27px] font-semibold mb-[24px] ">Create Favorite Filter</h2>
              </div>
              <form action="#" onSubmit={handleSubmit}>
                <div className="mb-[20px]">
                  <label className="text-[14px] block leading-[21px] mb-[5px] font-semibold">Give a Title</label>
                  <input
                    type="text"
                    placeholder="Write Title"
                    class="w-full bg-[#F8F8F8] p-[12px] rounded-[5px] px-3 py-3 placeholder-slate-300 text-slate-600 relative  text-sm border-0  outline-none focus:outline-none focus:ring pr-10"
                  />
                </div>

                <div className="mb-[20px]">
                  <label className="text-[14px] block leading-[21px] mb-[5px] font-semibold">Request Type</label>
                  <Select className=" outline-none  border-0 mb-[16px] bg-[#F8F8F8] p-[12px] rounded-[5px]" label="Select Request Type">
                    <Option className="my-[12px] bg-[#f8f8f8]">Sinemates Pro 2.0</Option>
                    <Option className="my-[12px] bg-[#f8f8f8]">Filter 5</Option>
                    <Option className="my-[12px] bg-[#f8f8f8]">Multi Express</Option>
                    <Option className="my-[12px] bg-[#f8f8f8]">Best One</Option>
                    <Option className="my-[12px] bg-[#f8f8f8]">Multi Express</Option>
                    <Option className="my-[12px] bg-[#f8f8f8]">Best One</Option>
                  </Select>
                </div>

                <div className="mb-[20px]">
                  <label className="text-[14px] block leading-[21px] mb-[5px] font-semibold">Transportation Type</label>
                  <Select className=" outline-none  border-0 mb-[16px] bg-[#F8F8F8] p-[12px] rounded-[5px]" label="Select Transportation Type">
                    <Option className="my-[12px] bg-[#f8f8f8]">Furniture 2 Moving</Option>
                    <Option className="my-[12px] bg-[#f8f8f8]">Furniture 2 Moving</Option>
                    <Option className="my-[12px] bg-[#f8f8f8]">Furniture 2 Moving</Option>
                    <Option className="my-[12px] bg-[#f8f8f8]">Furniture 2 Moving</Option>
                    <Option className="my-[12px] bg-[#f8f8f8]">Furniture 2 Moving</Option>
                    <Option className="my-[12px] bg-[#f8f8f8]">Furniture 2 Moving</Option>
                  </Select>
                </div>

                <div className="mb-[40px]">
                  <label className="text-[14px] block leading-[21px] mb-[5px] font-semibold">Select City</label>
                  <Select className=" outline-none  border-0 mb-[16px] bg-[#F8F8F8] p-[12px] rounded-[5px]" label="Select City">
                    <Option className="my-[12px] bg-[#f8f8f8]">New York</Option>
                    <Option className="my-[12px] bg-[#f8f8f8]">Dhaka</Option>
                    <Option className="my-[12px] bg-[#f8f8f8]">Delhi</Option>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <button type="submit" className=" bg-[#FF4E53] text-white px-[40px] py-[12px] rounded-[5px]">
                    Cancel
                  </button>
                  <button type="submit" className=" bg-[#47A7FF] text-white px-[40px] py-[12px] rounded-[5px]">
                    Add Filter
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </React.Fragment>
  );
};

export default FilterManagement;
