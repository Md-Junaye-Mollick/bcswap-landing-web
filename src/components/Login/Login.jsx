import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Sparkles } from "lucide-react";

const LoginHero = () => {
  const { theme } = useTheme();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Login" : "Sign Up", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden p-4">
      {/* Main Content */}
      <div className="w-full max-w-2xl mt-14">
        {/* Main Card */}
        <div className="bg-card border border-custom-border rounded-2xl shadow-xl p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-6 h-6 text-accent animate-spin" style={{animationDuration: '3s'}} />
              <h1 className="text-2xl font-bold text-dispute-color">
                {isLogin ? "Welcome Back" : "Join BC Cash"}
              </h1>
              <Sparkles className="w-6 h-6 text-accent animate-spin" style={{animationDuration: '3s', animationDirection: 'reverse'}} />
            </div>
            <p className="text-dispute-color text-sm">
              {isLogin
                ? "Sign in to continue your trading journey"
                : "Start your crypto trading adventure today"
              }
            </p>
          </div>

          {/* Toggle */}
          <div className="relative mb-6">
            <div className="flex bg-sub-card rounded-full p-1 border border-custom-border">
              <div className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-accent rounded-full shadow-lg transform transition-transform duration-300 ease-out ${isLogin ? 'translate-x-0' : 'translate-x-full'}`}></div>
              <button
                onClick={() => setIsLogin(true)}
                className={`relative z-10 flex-1 py-2.5 px-3 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  isLogin ? "text-white" : "text-dispute-color hover:text-accent"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`relative z-10 flex-1 py-2.5 px-3 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  !isLogin ? "text-white" : "text-dispute-color hover:text-accent"
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Name Field - Only for Sign Up */}
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-3 top-4 h-4 w-4 text-dispute-color" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-3 bg-sub-card border border-custom-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 placeholder-text-dispute-color text-dispute-color"
                  required={!isLogin}
                />
              </div>
            )}

            {/* Email Field */}
            <div className="relative">
              <Mail className="absolute left-3 top-4 h-4 w-4 text-dispute-color" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-10 pr-3 py-3 bg-sub-card border border-custom-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 placeholder-text-dispute-color text-dispute-color"
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <Lock className="absolute left-3 top-4 h-4 w-4 text-dispute-color" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-10 pr-12 py-3 bg-sub-card border border-custom-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 placeholder-text-dispute-color text-dispute-color"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-4 h-4 w-4 text-dispute-color hover:text-accent transition-colors duration-300"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            {/* Confirm Password - Only for Sign Up */}
            {!isLogin && (
              <div className="relative">
                <Lock className="absolute left-3 top-4 h-4 w-4 text-dispute-color" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-3 bg-sub-card border border-custom-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 placeholder-text-dispute-color text-dispute-color"
                  required={!isLogin}
                />
              </div>
            )}

            {/* Forgot Password - Only for Login */}
            {isLogin && (
              <div className="text-right">
                <button className="text-sm text-accent hover:opacity-80 transition-opacity duration-300 font-medium">
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-accent text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:opacity-90 transform hover:scale-[1.02] shadow-glow hover:shadow-glow-hover"
            >
              <div className="flex items-center justify-center gap-2">
                {isLogin ? "Sign In" : "Create Account"}
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-custom-border"></div>
            <div className="px-3 text-xs text-dispute-color">or continue with</div>
            <div className="flex-1 h-px bg-custom-border"></div>
          </div>

          {/* Social Login */}
          <button className="w-full bg-sub-card border border-custom-border rounded-lg py-3 px-4 flex items-center justify-center gap-3 hover:bg-pre-bg transition-all duration-300">
            <div className="w-5 h-5 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold">G</div>
            <span className="font-medium text-dispute-color">Continue with Google</span>
          </button>

          {/* Footer */}
          <div className="text-center mt-4">
            <p className="text-xs text-dispute-color">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-accent hover:opacity-80 transition-opacity duration-300 font-semibold"
              >
                {isLogin ? "Sign up now" : "Sign in instead"}
              </button>
            </p>
          </div>
        </div>

        {/* Terms */}
        <div className="text-center mt-4">
          <p className="text-xs text-dispute-color">
            By continuing, you agree to our{" "}
            <button className="text-accent hover:opacity-80 transition-opacity duration-300">Terms of Service</button>
            {" "}and{" "}
            <button className="text-accent hover:opacity-80 transition-opacity duration-300">Privacy Policy</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginHero;