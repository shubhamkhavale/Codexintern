import { useEffect } from "react";

function LoginModal({ onClose }) {
  
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex z-50">
      {/* Dark overlay */}
      <div
        className="flex-grow bg-black bg-opacity-40"
        onClick={onClose}
      ></div>

      {/* Right sidebar panel */}
      <div className="w-full max-w-md bg-white shadow-2xl p-8 animate-slideInRight overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back 👋</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-xl"
          >
            &times;
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex justify-between text-sm mt-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-orange-500" />
              Remember me
            </label>
            <button className="text-orange-500 hover:underline">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-600">
          Don’t have an account?{" "}
          <button className="text-orange-500 hover:underline">Sign Up</button>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
