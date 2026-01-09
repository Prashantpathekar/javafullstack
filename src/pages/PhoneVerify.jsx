import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PhoneVerify() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const phone = localStorage.getItem("phone");

  const verifyPhone = async () => {
    if (!phone) {
      alert("Phone missing. Please register again.");
      navigate("/");
      return;
    }

    if (!otp) {
      setError("Please enter OTP");
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        "http://localhost:8080/start/verify-phone-otp",
        null,
        { params: { phone, otp } }
      );

      // ✅ CLEANUP
      localStorage.removeItem("phone");
      localStorage.removeItem("email");

      // ✅ PROPER REDIRECT (THIS IS THE KEY)
      navigate("/login", { replace: true });

    } catch (err) {
      setError(err.response?.data || "Invalid Phone OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-2">
          Phone Verification
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Enter the OTP sent to your phone
        </p>

        {error && (
          <div className="mb-4 text-sm text-red-600 text-center">
            {error}
          </div>
        )}

        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          maxLength={6}
          className="w-full mb-6 px-4 py-3 rounded-xl border text-center tracking-widest text-lg
                     focus:outline-none focus:ring-2 focus:ring-indigo-400"
          onChange={(e) => setOtp(e.target.value)}
        />

        <button
          onClick={verifyPhone}
          disabled={loading}
          className={`w-full py-3 rounded-xl text-white text-lg font-semibold
            bg-indigo-600 hover:opacity-90 transition
            ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
        >
          {loading ? "Verifying..." : "Verify Phone"}
        </button>

      </div>
    </div>
  );
}

export default PhoneVerify;

