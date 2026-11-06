import { useState } from "react";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Email is required");
    }
    if (!password) {
      setPasswordError("Password is required");
    }
  };
  return (
    <div className="min-h-screen bg-blue-600 flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-xl p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl text-center mb-8">Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="">
            <label className="mb-2">Email:</label>
            <input
              type="email"
              placeholder="Enter email"
              className="border p-3 w-full mb-6"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>

          <div className="mb-6">
            <label className="mb-2">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="border p-3 w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
          </div>

          <div className="">
            <label className="flex items-center gap-2 mb-6">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              Show Password
            </label>
          </div>
          <br />
          <button type="submit" className="bg-blue-900 text-white p-3 w-full">
            SIGN IN
          </button>
        </form>

        <p className="text-center mt-6">Forgot Username / Password?</p>

        <p className="text-center mt-2">Don't have an account? Sign Up</p>
      </div>
    </div>
  );
};

export default LogIn;
