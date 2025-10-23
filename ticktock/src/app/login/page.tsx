import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Sign in to your account
            </p>
          </div>
          <LoginForm />
        </div>
      </div>

      {/* Right Side - Blue Panel */}
      <div className="hidden md:flex flex-1 bg-primary items-center justify-center px-12">
        <div className="text-white text-center">
          <h1 className="text-6xl font-bold mb-4">ticktock</h1>
          <p className="text-xl mb-4 opacity-90">
            Track your time, boost your productivity
          </p>
          <p className="text-base opacity-80">
            Modern timesheet management for teams and individuals
          </p>
        </div>
      </div>
    </div>
  );
}
