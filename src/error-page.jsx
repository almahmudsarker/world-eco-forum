import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col justify-center items-center content-center h-screen w-screen text-center"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred in World Economic Forum.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button>
        <a href="/">Go to Home</a>
      </button>
    </div>
  );
}
