import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const ForgetPassword = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-6">Forgot Password</h1>

        <form className="w-full max-w-sm">
          <FormInput name='Email' type='email' placeholder='Enter your email' />
          <Button text='Send Verification Code' />
          <p className="text-center mt-6 text-gray-300">Remember your password? <Link to='login' className="text-blue-500 hover:underline">Log in</Link></p>
          <p className="text-center mt-1 text-gray-300">Don't you have an account? <Link to='sign-up' className="text-blue-500 hover:underline">Sign Up</Link></p>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;