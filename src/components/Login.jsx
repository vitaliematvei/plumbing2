import { Link } from "react-router-dom";

function Login({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="fixed bg-dark-gray absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] border rounded-md border-gray">
      <h1 className="text-4xl font-bold text-center text-white mt-4">Login</h1>
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

        <div className="mb-4">
          <div className="flex gap-2 items-center text-xl text-white my-8">
            <input type="checkbox" name="" id="" />
            <label htmlFor="Remember me" className="">
              Remember me
            </label>
          </div>
          <Link
            to=""
            className="text-orange font-bold hover:underline text-2xl"
          >
            Forgot Password?
          </Link>
        </div>
        <button
          type="submit"
          className="bg-sky-500 items-center w-40 mt-6 mb-2 rounded-full bg-white text-white font-bold text-2xl p-2 pb-"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
