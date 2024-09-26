const Button = ({ text }) => {
  return (
    <div className="mt-10">
      <button type="submit" className="w-5/6 block mx-auto px-4 py-4 text-xl text-white font-semibold rounded-md border-2 border-blue-400 bg-neutral-600/10 hover:bg-neutral-500/25 duration-200">{text}</button>
    </div>
  );
};

export default Button;