import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const sendOtp = async () => {
    await axios.post("http://localhost:8080/api/auth/forgot-password", null, {
      params: { email },
    });

    localStorage.setItem("resetEmail", email);
    navigate("/reset-password");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-4">
          Forgot Password 🔐
        </h2>

        <input
          type="email"
          placeholder="Enter registered email"
          className="w-full px-4 py-3 border rounded-xl mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={sendOtp}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl"
        >
          Send OTP
        </button>

      </div>
    </div>
  );
}
