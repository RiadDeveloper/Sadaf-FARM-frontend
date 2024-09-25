const FormInput = ({ name, type, placeholder }) => {
  return (
    <div>
      <div className="mt-4">
        <label className="block text-gray-200 font-semibold mb-2">{name}</label>
        <input type={type} className="w-full p-3 rounded-lg outline-none border-2 bg-neutral-800 border-gray-500 focus:border-blue-500 duration-300" id="email" placeholder={placeholder} />
      </div>
    </div>
  );
};

export default FormInput;