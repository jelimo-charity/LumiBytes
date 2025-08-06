import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f1f2f6] via-white to-[#aeb8fe]/30">
      <div className="text-center bg-white/80 backdrop-blur-md rounded-3xl p-12 border-2 border-[#758bfd]/20 shadow-xl">
        <div className="text-8xl mb-6">🧭</div>
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#27187e] to-[#758bfd] bg-clip-text text-transparent">404</h1>
        <p className="text-2xl text-[#758bfd] mb-8">Oops! This digital path doesn't exist</p>
        <p className="text-lg text-[#27187e] mb-8">Let's navigate back to our digital citizenship hub</p>
        <a href="/" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#27187e] to-[#758bfd] text-white rounded-2xl font-semibold text-lg shadow-xl hover:scale-105 transition-all duration-300">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
