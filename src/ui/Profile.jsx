import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const Profile = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-6">Update Your Profile</h1>

        <form className="w-full max-w-sm">
          <FormInput name='Full Name' type='text' placeholder='Your full name' />
          <FormInput name='Email' type='email' placeholder='name@example.com' />
          <FormInput name='Upload Image' type='file' placeholder='Upload your image' />
          <FormInput name='Password' type='password' placeholder='Enter your password' />
          <FormInput name='Confirm password' type='password' placeholder='Re-enter your password' />
          <Link to='forget-password' className="mt-1 mb-5 block text-right text-blue-500 hover:underline">Forget Password?</Link>
          <div className="-mt-4">
            <Button text='Update Profile' />
          </div>
        </form>

      </div>
    </div>
  );
};

export default Profile;