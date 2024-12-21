"use client";
import { useRouter } from "next/navigation";
import { useState, FormEvent, ChangeEvent } from "react";

const LoginBox = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        router.push("/home");
      } else {
        setError("An error occurred. Please try again later.");
      }
    } catch {
      setError("An unexpected error occurred.");
    }
  };

  return (
    <>
      <div className="login-box absolute top-1/2 left-1/2 w-[400px] p-10 m-5 transform -translate-x-1/2 -translate-y-[55%] bg-black/90 shadow-lg shadow-black/60 rounded-lg box-border">
        <p>Welcome back!</p>

        <form onSubmit={handleLogin}>
          <div className="user-box">
            <input
              required
              type="text"
              value={username}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
            />
            <label>
              Username{" "}
              <span className="text-sm">(Enter &apos;Hello&apos;)</span>
            </label>
          </div>
          <div className="user-box">
            <input
              required
              type="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <label>
              Password{" "}
              <span className="text-sm">(Enter &apos;World&apos;)</span>
            </label>
          </div>
          <button type="submit">
            <span />
            <span />
            <span />
            <span />
            Login
          </button>
        </form>

        {error && (
          <p className="text-center mt-4 font-medium text-red-500">
            {error}
          </p>
        )}
      </div>
    </>
  );
};

export default LoginBox;
