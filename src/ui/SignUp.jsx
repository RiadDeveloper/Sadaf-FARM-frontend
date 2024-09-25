import FormInput from "../components/FormInput";

const SignUp = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-8">Welcome Back 👋</h1>
        <p className="text-gray-400 mb-10">Collaborate, empower as a key to victory.</p>
        <form className="w-full max-w-sm">
          <FormInput name='Email' type='email' placeholder='name@example.com' />
          <FormInput name='Password' type='password' placeholder='At least 8 characters' />
  
          <div className="mb-6">
            <button type="submit" className="w-full px-4 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">Confirm</button>
          </div>
          <div className="text-center text-gray-400">
            <p>Don't you have an account?</p>
            <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
          </div>
        </form>
        <div className="mt-6 text-center text-gray-400">
          <p>Watch the Video: <a href="#" className="text-blue-500 hover:underline">What is CapitalKV?</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;