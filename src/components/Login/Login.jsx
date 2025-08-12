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

  const getLogo = () => {
    if (!mounted) return null;
    return theme === "dark" || theme === "dim"
      ? "/images/logo-dark.png"
      : "/images/logo-light.png";
  };

  const getCardBackground = () => {
    if (!mounted) return "backdrop-blur-2xl bg-card";
    return "backdrop-blur-2xl bg-card";
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-primary">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30 bg-card ">
          <div className="absolute inset-0 bg-card  animate-pulse"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full blur-3xl opacity-20 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl">
          {/* Logo with Animation */}
          <div className="flex justify-center mb-8 transform hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-20 animate-pulse"></div>
              <div className="relative bg-white/10 p-4 rounded-2xl shadow-xl border border-white/20">
                {mounted && <img src={getLogo()} alt="BC Swap Logo" className="w-24 h-auto" />}
              </div>
            </div>
          </div>

          {/* Main Card with Glassmorphism Effect */}
          <div className={`relative ${getCardBackground()} border border-white/20 rounded-3xl shadow-2xl p-16 transition-all duration-300 hover:shadow-3xl`}>
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 opacity-20 blur-sm"></div>
            <div className="relative z-10">

              {/* Header with Animation */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Sparkles className="w-8 h-8 text-blue-500 animate-spin" style={{animationDuration: '3s'}} />
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {isLogin ? "Welcome Back" : "Join BC Swap"}
                  </h1>
                  <Sparkles className="w-8 h-8 text-purple-500 animate-spin" style={{animationDuration: '3s', animationDirection: 'reverse'}} />
                </div>
                <p className="text-gray-300 text-lg">
                  {isLogin
                    ? "Sign in to continue your trading journey"
                    : "Start your crypto trading adventure today"
                  }
                </p>
              </div>

              {/* Modern Toggle with Sliding Animation */}
              <div className="relative mb-12 flex justify-center">
                <div className="flex bg-black/20 rounded-full p-1 backdrop-blur-sm w-80">
                  <div className={`absolute top-1 bottom-1 w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg transform transition-transform duration-300 ease-out ${isLogin ? 'translate-x-0' : 'translate-x-full'}`}></div>
                  <button
                    onClick={() => setIsLogin(true)}
                    className={`relative z-10 flex-1 py-3 px-6 rounded-full text-sm font-semibold transition-colors duration-300 ${
                      isLogin
                        ? "text-white"
                        : "text-gray-300 hover:text-blue-400"
                    }`}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setIsLogin(false)}
                    className={`relative z-10 flex-1 py-3 px-6 rounded-full text-sm font-semibold transition-colors duration-300 ${
                      !isLogin
                        ? "text-white"
                        : "text-gray-300 hover:text-purple-400"
                    }`}
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              {/* Form Fields with Modern Styling */}
              <div className="max-w-lg mx-auto space-y-6">
                {/* Name Field - Only for Sign Up */}
                {!isLogin && (
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-focus-within:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative">
                      <User className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-blue-400 transition-colors duration-300" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-5 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-white backdrop-blur-sm text-lg"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                {/* Email Field */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-focus-within:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-blue-400 transition-colors duration-300" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-5 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-white backdrop-blur-sm text-lg"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-focus-within:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-blue-400 transition-colors duration-300" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-14 py-5 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-white backdrop-blur-sm text-lg"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-4 h-5 w-5 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password - Only for Sign Up */}
                {!isLogin && (
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-focus-within:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative">
                      <Lock className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-blue-400 transition-colors duration-300" />
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-5 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 text-white backdrop-blur-sm text-lg"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                {/* Forgot Password Link - Only for Login */}
                {isLogin && (
                  <div className="text-right">
                    <button
                      type="button"
                      className="text-sm text-blue-400 hover:text-blue-500 transition-colors duration-300 font-medium"
                    >
                      Forgot Password?
                    </button>
                  </div>
                )}

                {/* Submit Button with Gradient and Animation */}
                <button
                  onClick={handleSubmit}
                  className="relative w-full group overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-5 px-6 rounded-xl transition-all duration-300 hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02] hover:shadow-2xl text-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative flex items-center justify-center gap-2">
                    {isLogin ? "Sign In" : "Create Account"}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </div>

              {/* Divider with Gradient */}
              <div className="flex items-center my-12 max-w-lg mx-auto">
                <div className="flex-1 h-px bg-white/20"></div>
                <div className="px-4 text-sm text-gray-400 bg-primary rounded-full backdrop-blur-sm">or continue with</div>
                <div className="flex-1 h-px bg-white/20"></div>
              </div>

              {/* Social Login Buttons with Modern Design */}
              <div className="space-y-4 max-w-lg mx-auto">
                <button className="relative w-full group overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-5 px-6 flex items-center justify-center gap-3 hover:bg-white/20 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] text-lg">
                  <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">G</div>
                  <span className="font-medium text-gray-200">Continue with Google</span>
                </button>
              </div>

              {/* Footer Text with Modern Styling */}
              <div className="text-center mt-8">
                <p className="text-sm text-gray-400">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-blue-400 hover:text-blue-500 transition-colors duration-300 font-semibold hover:underline"
                  >
                    {isLogin ? "Sign up now" : "Sign in instead"}
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Terms and Privacy with Modern Design */}
          <div className="text-center mt-6">
            <p className="text-xs text-gray-500">
              By continuing, you agree to our{" "}
              <button className="text-blue-400 hover:text-blue-500 transition-colors duration-300 hover:underline">
                Terms of Service
              </button>{" "}
              and{" "}
              <button className="text-blue-400 hover:text-blue-500 transition-colors duration-300 hover:underline">
                Privacy Policy
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginHero;