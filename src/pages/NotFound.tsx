import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-heading italic text-foreground tracking-tight">404</h1>
      <p className="mt-4 text-foreground/60 font-body font-light text-sm md:text-base max-w-sm">
        This page doesn't exist. Let's get you back on track.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-8 bg-foreground text-background rounded-full px-6 py-3 text-sm font-medium font-body hover:bg-foreground/90 transition-colors"
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
