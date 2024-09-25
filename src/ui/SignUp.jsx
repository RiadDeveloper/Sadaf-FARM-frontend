import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const SignUp = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-6">Hey There👋</h1>
        <p className="text-gray-200 text-xl mb-8">Collaborate, empower as a key to victory.</p>

        <form className="w-full max-w-sm">
          <FormInput name='Email' type='email' placeholder='name@example.com' />
          <FormInput name='Password' type='password' placeholder='At least 8 characters' />
          <FormInput name='Confirmation code' type='number' placeholder='Enter confirmation code' />
          {/* <Link to='forget-password' className="mt-1 mb-5 block text-right text-blue-500 hover:underline">Forget Password?</Link> */}
          <Button text='Sign Up' />
          <p className="text-center text-gray-300">Already have an account? <Link className="text-blue-500 hover:underline">Log in</Link></p>
        </form>

        <p className="text-gray-300 text-center mt-5">Watch the Video: <a href="#" className="text-blue-500 hover:underline">What is CapitalKV?</a></p>
      </div>
    </div>
  );
};

export default SignUp;