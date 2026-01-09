import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!identifier || !password) {
      alert("Email / Phone and password required");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:8080/auth/login", // ✅ FIXED
        {
          identifier,
          password,
        }
      );

      // ✅ FIXED (JWT is plain string)
      localStorage.setItem("token", res.data);

      // ✅ safer route
navigate("/");

    } catch (err) {
      alert(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="text"
            placeholder="Email or Phone"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="text-right text-sm">
            <span
              onClick={() => navigate("/forgot-password")}
              className="text-indigo-600 cursor-pointer hover:underline"
            >
              Forgot Password?
            </span>
          </div>

          <button
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
}
export default Login;