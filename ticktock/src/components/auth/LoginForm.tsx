"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!validateForm()) return;
    setLoading(true);
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (result?.error) {
        setError("Invalid email or password");
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        type="email"
        label="Email address"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e:any) => setEmail(e.target.value)}
        error={errors.email}
      />

      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          label="Password"
          required
          placeholder="Enter your password"
          value={password}
          onChange={(e:any) => setPassword(e.target.value)}
          error={errors.password}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary-500"
          />
          <span className="ml-2 text-sm text-gray-600">Remember me</span>
        </label>
        <a
          href="#"
          className="text-sm text-primary hover:text-primary-700"
        >
          Forgot password?
        </a>
      </div>

      {error && (
        <div
          className="p-3 rounded-lg bg-red-50 text-red-600 text-sm"
          role="alert"
        >
          {error}
        </div>
      )}

      <Button
        type="submit"
        loading={loading}
        className="w-full"
        size="lg"
      >
        Sign in
      </Button>
    </form>
  );
}
export default LoginForm;
