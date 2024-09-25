import FormInput from "../components/FormInput";
import Button from "../components/Button";

const ContactUs = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>

        <form className="w-full max-w-sm">
          <FormInput name='Name' type='text' placeholder='Your full name' />
          <FormInput name='Email' type='email' placeholder='name@example.com' />
          <FormInput name='Topic' type='text' placeholder='The topic you want to discuss' />
          <FormInput name='Describe' type='text' placeholder='Express your thoughts' />
          <br />
          <Button text='Send Message' />
        </form>

        <p className="text-gray-300 text-center mt-5">Watch the Video: <a href="#" className="text-blue-500 hover:underline">What is CapitalKV?</a></p>
      </div>
    </div>
  );
};

export default ContactUs;