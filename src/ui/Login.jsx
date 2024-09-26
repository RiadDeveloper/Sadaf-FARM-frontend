import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-6">Welcome Back👋</h1>
        <p className="text-gray-200 text-xl mb-8">Collaborate, empower as a key to victory.</p>

        <form className="w-full max-w-sm">
          <FormInput name='Email' type='email' placeholder='name@example.com' />
          <FormInput name='Password' type='password' placeholder='At least 8 characters' />
          <Link to='/forget-password' className="mt-1 mb-5 block text-right text-blue-500 hover:underline">Forget Password?</Link>
          <div className="-mt-4">
            <Button text='Log In' />
          </div>
          <p className="text-center mt-4 text-gray-300">Don't you have an account? <Link to='/sign-up' className="text-blue-500 hover:underline">Sign Up</Link></p>
        </form>

        <p className="text-gray-300 text-center mt-5">Watch the Video: <a href="#" className="text-blue-500 hover:underline">What is CapitalKV?</a></p>
      </div>
    </div>
  );
};

export default Login;