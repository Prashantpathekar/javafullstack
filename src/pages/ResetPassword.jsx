import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const email = localStorage.getItem("resetEmail");

  const resetPassword = async () => {
    await axios.post("http://localhost:8080/api/auth/reset-password", null, {
      params: { email, otp, password },
    });

    localStorage.removeItem("resetEmail");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-4">
          Reset Password 🔑
        </h2>

        <input
          placeholder="OTP"
          className="w-full px-4 py-3 border rounded-xl mb-3"
          onChange={(e) => setOtp(e.target.value)}
        />

        <input
          type="password"
          placeholder="New Password"
          className="w-full px-4 py-3 border rounded-xl mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={resetPassword}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl"
        >
          Reset Password
        </button>

      </div>
    </div>
  );
}
