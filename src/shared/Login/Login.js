import React from "react";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <div className="bg-[#F4F4F4] w-full h-screen flex items-center justify-center">
        <div className="w-[759px] h-[431px] bg-white rounded py-[60px] px-[120px]">
          <h2 className="text-center text-[28px] font-[600]">Sign In</h2>
          <p className="text-[18px] leading-[27px] text-center mt-[12px] text-[#454545]">Please sign in to continue</p>
          <form onSubmit={handleSubmit} action="#" className="mt-[40px]">
            <input className="w-full mb-[16px] bg-[#F8F8F8] p-[12px] rounded-[5px]" type="email" placeholder="Email" />
            <input className="w-full mb-[30px] bg-[#F8F8F8] p-[12px] rounded-[5px]" type="password" placeholder="Password" />
            <div className="text-center">
              <button type="submit" className=" bg-[#47A7FF] text-white px-[72px] py-[12px] rounded-[5px]">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
