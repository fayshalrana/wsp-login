import { useState } from "react";
import { Input } from "@/components/input";
import { MainButton } from "@/components/mainButton";
import Checkbox from "@/components/checkbox";
import { fontTitle1, fontBodyNormal, fontCaptionBold, fontBodyLinkNormal, fontButtonLarge } from '@/styles/typography';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { email, password, rememberMe });
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="w-full max-w-[360px]">
        {/* Welcome Message */}
        <div className="text-center">
          <h2 className={`${fontTitle1} text-gray-900`}>Welcome Back</h2>
          <p className={`${fontBodyNormal} text-gray-600 mt-2`}>
            Manage, streamline, and thrive effortlessly.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="w-full mt-4">
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className={`${fontCaptionBold} mb-2 block px-4 text-black-60`}>
              Email
            </label>
            <div className="relative w-full">
              <div className="relative flex items-center">
                <input
                  id="email"
                  type="email"
                  className="peer block w-full appearance-none placeholder:text-gray-400 border border-black-10 bg-white px-3.5 p-2.5 focus:outline-none h-[48px] rounded-6 text-black-100 placeholder-transparent focus:border-black-10"
                  placeholder='Enter email address'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className={`${fontCaptionBold} mb-2 block px-4 text-black-60`}>
              Password
            </label>
            <div className="relative w-full">
              <div className="relative flex items-center">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                   className="peer block w-full appearance-none placeholder:text-gray-400 border border-black-10 bg-white px-3.5 p-2.5 focus:outline-none h-[48px] rounded-6 text-black-100 placeholder-transparent focus:border-black-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <img
                    alt={showPassword ? "Hide password" : "Show password"}
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    src={showPassword ? "/eyeoff.svg" : "/eye.svg"}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Remember Me & Login with Code */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setRememberMe(!rememberMe)}>
              <Checkbox checked={rememberMe} size="small" />
              <span className={`${fontBodyLinkNormal} text-black-100 select-none`}>
                Remember me
              </span>
            </div>
            <button type="button" className={`${fontButtonLarge} text-black-100 underline select-none`}>
              Login with Code
            </button>
          </div>

          {/* Submit Button */}
          <MainButton
            type="submit"
            className="inline-flex items-center justify-center rounded-6 transition-colors hover:outline-black-10 hover:outline hover:outline-4 disabled:bg-black-5 disabled:text-black-40 disabled:outline-none px-8 h-[48px] text-[14px] md:text-[16px] lg:text-[16px] leading-[24px] tracking-[-0.01em] font-bold bg-black-100 text-white-100 w-full"
            disabled={!email || !password}
            variant="primary"
          >
            Sign In
          </MainButton>
        </form>
      </div>
    </div>
  );
}
