import { useState } from "react";
const [loadingState, setLoadingState] = useState(false);

const LoadingSpinner = ({ isLoading }) => {
  setLoadingState(isLoading);
  return (
    <span className={`loading ${!loadingState ? '' : 'hidden'} loading-spinner loading-lg`}></span>
  );
};

export default LoadingSpinner;