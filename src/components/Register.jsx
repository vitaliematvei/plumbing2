import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";

const Register = ({ isOpen }) => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };
  if (!isOpen) return null;
  return (
    <div className="fixed bg-dark-gray absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] border rounded-md border-gray">
      <h1 className="text-4xl font-bold text-center text-white mt-4">
        Register
      </h1>
      <form action="/" className="p-6 text-center">
        <div className="my-4">
          <input
            type="text"
            className="w-50 h-6 text-black text-md pl-2 border-2 border-orange"
            placeholder="Username"
          />
        </div>
        <div className="my-4">
          <input
            type="password"
            className="w-50 h-6 text-black text-md pl-2 border-2 border-orange"
            placeholder="Password"
          />
        </div>

        <div className="my-4">
          <input
            type="password"
            className="w-50 h-6 text-black text-md pl-2 border-2 border-orange"
            placeholder="Confirm Password"
          />
        </div>
        <button
          type="submit"
          className="bg-sky-500 items-center w-40 mt-2 rounded-full bg-white text-white font-bold text-2xl p-2 pb-"
        >
          Register
        </button>
      </form>
      <div className="items-center gap-2 mb-9 px-5 text-xl text-center">
        <p className="text-white mb-3">Already Create an Account?</p>
        <Link
          onClick={handleLoginClick}
          to=""
          className="text-orange font-bold hover:underline text-2xl"
        >
          Login
        </Link>
        <Login isOpen={showLogin} onClose={handleLoginClick} />
      </div>
    </div>
  );
};

export default Register;
