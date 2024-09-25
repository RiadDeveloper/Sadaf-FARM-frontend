import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate =  useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-900   
 text-white">
      <h1 className="text-5xl   
 font-bold mb-4">Error 404</h1>
      <p className="text-lg mb-6">Page not found.</p>
      <button onClick={() => { navigate(-1) }} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;