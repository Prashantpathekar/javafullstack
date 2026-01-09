import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [isLogin, setIsLogin] = useState(false); // 🔁 TOGGLE
  const [username, setUsername] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // ✅ REGISTER
  const register = async () => {
    if (!username || !email || !phone || !password) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);

      await axios.post("http://localhost:8080/start/register", {
        username,
        email,
        phone,
        password,
      });

      localStorage.setItem("email", email);
      localStorage.setItem("phone", phone);

      navigate("/verify-email", { state: { email } });
    } catch (err) {
      alert(err.response?.data || "Register failed");
    } finally {
      setLoading(false);
    }
  };

  // ✅ LOGIN
  const login = async () => {
    if (!emailOrPhone || !password) {
      alert("Email/Phone & password required");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:8080/api/auth/login", {
        identifier: emailOrPhone,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/Navbar");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          {isLogin ? "Login" : "Register"}
        </h2>

        {/* REGISTER FORM */}
        {!isLogin && (
          <>
            <input
              type="text"
              placeholder="Username"
              className="w-full mb-4 px-4 py-3 rounded-xl border"
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 px-4 py-3 rounded-xl border"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              placeholder="Phone"
              className="w-full mb-4 px-4 py-3 rounded-xl border"
              onChange={(e) => setPhone(e.target.value)}
            />
          </>
        )}

        {/* LOGIN INPUT */}
        {isLogin && (
          <input
            type="text"
            placeholder="Email or Phone"
            className="w-full mb-4 px-4 py-3 rounded-xl border"
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
        )}

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-3 rounded-xl border"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* BUTTON */}
        <button
          onClick={isLogin ? login : register}
          disabled={loading}
          className="w-full py-3 rounded-xl text-white text-lg font-semibold
                     bg-gradient-to-r from-indigo-500 to-purple-500"
        >
          {loading
            ? "Please wait..."
            : isLogin
            ? "Login"
            : "Register"}
        </button>

        {/* TOGGLE LINK */}
        <p className="text-center mt-6 text-gray-600">
          {isLogin ? "New user?" : "Already registered?"}{" "}
          <span
            className="text-indigo-600 font-semibold cursor-pointer hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>

      </div>
    </div>
  );
}

export default Register;
