import LoginHeader from "../components/loginpage/LoginHeader";
import MainLoginContent from "../components/loginpage/MainLoginContent";
import ImgSideComponent from "../components/loginpage/ImgSideComponent";

function Login() {
  return (
    <>
      <LoginHeader />
      <div className="login-box md:h-[stretch] md:w-1/2 w-full px-4 rounded duration-300 transition-all">
        <MainLoginContent />
      </div>

      <ImgSideComponent />
    </>
  );
}

export default Login;
