import React from "react";
import { Select, Option } from "@material-tailwind/react";

export default function Modal({ setShowModal }) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <div className="relative w-[687px] h-[580px] my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-[18px] leading-[27px] font-semibold text-center">Select Filter</h3>
              <button
                className="w-[25px] h-[25px] rounded-[50%] ml-auto border-0  bg-[#9E9E9E] text-white text-[22px] leading-[27px]  outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span>×</span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-[30px] flex-auto">
              <form action="#">
                <div className="flex w-full flex-col gap-4">
                  <Select className=" outline-none  border-0 mb-[16px] bg-[#F8F8F8] p-[12px] rounded-[5px]" label="Select Version">
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                  <div className="text-center text-[16px] text-[#9E9E9E]">OR</div>
                  <Select className=" outline-none border-0 mb-[16px] bg-[#F8F8F8] p-[12px] rounded-[5px]" label="Select Type">
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                  <Select className=" outline-none border-0 mb-[16px] bg-[#F8F8F8] p-[12px] rounded-[5px]" label="Select Transportation Type">
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                  <Select className=" outline-none border-0 mb-[16px] bg-[#F8F8F8] p-[12px] rounded-[5px]" label="Select City">
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                </div>

                <div className="flex w-full items-end gap-4 mt-[20px]">
                  <Select className=" outline-none border-0 mb-[16px] bg-[#F8F8F8] p-[12px] rounded-[5px]" size="md" label="Start Date">
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                  <Select className=" outline-none border-0 mb-[16px] bg-[#F8F8F8] p-[12px] rounded-[5px]" size="md" label="End Date">
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                </div>
                <div className="flex w-full items-end gap-4 mt-[20px]">
                  <Select className=" outline-none border-0 mb-[16px] bg-[#F8F8F8] p-[12px] rounded-[5px]" size="md" label="Start Time">
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                  <Select className=" outline-none border-0 mb-[16px] bg-[#F8F8F8] p-[12px] rounded-[5px]" size="md" label="End Time">
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                </div>
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="bg-[#9E9E9E] text-white active:bg[#9E9E9E] px-[60px] py-[12px] text-[18px] rounded-[5px]"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
