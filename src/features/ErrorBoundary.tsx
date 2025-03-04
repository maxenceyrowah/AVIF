import { useRouteError } from "react-router-dom";

interface RouterError {
  message?: string;
}

const ErrorBoundary = () => {
  const error = useRouteError() as RouterError;

  return (
    <div className="text-center text-[15px]">
      <h1>Error Boundary</h1>
      <small>{error?.message}</small>
    </div>
  );
};

export default ErrorBoundary;
