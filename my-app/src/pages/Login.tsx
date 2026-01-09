import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail as MailIcon,
  Lock as LockIcon,
  BookOpen as BookOpenIcon,
} from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Login submitted:", { email, password });

    // TEMP redirect (we’ll make this role-based later)
    navigate("/student");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section */}
        <div className="hidden md:flex flex-col items-center justify-center space-y-6">
          <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
            <BookOpenIcon size={64} className="text-white" strokeWidth={1.5} />
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-800">SyncAcademia</h2>
            <p className="text-gray-600">
              Smart Academic Coordination Platform
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">
              Sign in to continue to your dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <MailIcon
                  size={20}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@example.com"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <LockIcon
                  size={20}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <span className="text-blue-600 font-medium cursor-pointer">
                Sign up
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
