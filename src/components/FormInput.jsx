const FormInput = ({name, type}) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-500 font-bold mb-2">{name}</label>
        <input type={type} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="email" placeholder="example@example.com" />
      </div>

    </div>
  );
};

export default FormInput;