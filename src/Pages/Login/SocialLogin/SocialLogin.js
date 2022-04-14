import React from "react";
import google from "../../../images/social/google.png";
import github from "../../../images/social/github.png";
import facebook from "../../../images/social/facebook.png";
const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex my-3 align-items-center justify-content-center">
        <div style={{ height: "1px" }} className="bg-primary w-50">
          {" "}
        </div>
        <p className="mt-2 px-2 border border-primary rounded-circle fs-5 text-danger ">
          or
        </p>
        <div style={{ height: "1px" }} className="bg-primary w-50">
          {" "}
        </div>
      </div>

      <div>
        <button className="btn btn-info w-50  d-block mx-auto">
          <img src={google} alt="" />
          <span className="px-4 fs-5">Google Sign In</span>
        </button>
        <button className="btn btn-info w-50 my-4 d-block mx-auto">
          <img src={github} alt="" />
          <span className="px-4 fs-5">Github Sign In</span>
        </button>
        <button className="btn btn-info w-50  d-block mx-auto">
          <img style={{ width: "30px" }} src={facebook} alt="" />
          <span className="px-4 fs-5">Facebook Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
