import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function EmailVerify() {
  const [otp, setOtp] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  const verifyEmail = async () => {

    if (!state?.email) {
      alert("Email missing. Please register again.");
      navigate("/");
      return;
    }

    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    try {
      await axios.post(
        "http://localhost:8080/start/verify-email-otp",
        null,
        {
          params: {
            email: state.email,
            otp,
          },
        }
      );

      navigate("/verify-phone");

    } catch (err) {
      console.error("EMAIL VERIFY ERROR:", err);
      alert(err.response?.data || "Invalid Email OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-4">
          Email Verification
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Enter the OTP sent to your email
        </p>

        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          maxLength={6}
          className="w-full mb-6 px-4 py-3 rounded-xl border text-center tracking-widest text-lg
                     focus:outline-none focus:ring-2 focus:ring-indigo-400"
          onChange={(e) => setOtp(e.target.value)}
        />

        <button
          onClick={verifyEmail}
          className="w-full py-3 rounded-xl text-white text-lg font-semibold
                     bg-gradient-to-r from-indigo-500 to-purple-500
                     hover:opacity-90 transition"
        >
          Verify Email
        </button>

      </div>
    </div>
  );
}

export default EmailVerify;
