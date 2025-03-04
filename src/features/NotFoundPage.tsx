import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="my-20 w-full flex justify-center flex-col items-center">
      <h1 className="text-yellow-400 text-[200px]">404</h1>
      <h3>page non trouvée</h3>
      <p>
        <Link to="/">Go Home</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
