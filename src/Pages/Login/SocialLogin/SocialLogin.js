import React from "react";
import google from "../../../images/social/google.png";
import github from "../../../images/social/github.png";
import facebook from "../../../images/social/facebook.png";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const navigate=useNavigate();
if(user || githubUser){
navigate('/home')
}

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


<p className='text-danger fs-5'>{ error?.message ||githubError?.message ? error?.message ||githubError?.message: ''}</p>
<p className='text-info fs-3'>{ loading || githubLoading ? 'Please wait ................' : ''}</p>
      <div>
        <button onClick={()=>signInWithGoogle()} className="btn btn-info w-50  d-block mx-auto">
          <img src={google} alt="" />
          <span className="px-4 fs-5">Google Sign In</span>
        </button>
        <button onClick={()=>signInWithGithub()}className="btn  btn-secondary w-50 my-4 d-block mx-auto">
          <img src={github} alt="" />
          <span className="px-4 fs-5">Github Sign In</span>
        </button>
        <button className="btn btn-warning w-50  d-block mx-auto">
          <img style={{ width: "30px" }} src={facebook} alt="" />
          <span className="px-4 fs-5">Facebook Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
