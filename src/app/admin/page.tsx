"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GoldButton } from "@/components/ui/GoldButton";
import { Lock, User } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("admin_token", data.token);
        router.push("/admin/dashboard");
      } else {
        setError("Invalid credentials");
      }
    } catch {
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 border-2 border-gold flex items-center justify-center mx-auto mb-4">
              <span className="text-gold font-display font-bold text-3xl">G</span>
            </div>
            <h1 className="font-display text-3xl text-gold mb-2">Admin Panel</h1>
            <p className="font-ui text-gold/60 text-sm uppercase tracking-wider">Golden Rain Productions</p>
          </div>

          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-ui text-gold uppercase tracking-wider text-sm mb-2">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={20} />
                  <input
                    type="text"
                    required
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    className="w-full bg-black/50 border border-gold/20 rounded-sm py-4 pl-12 pr-4 text-cream focus:border-gold transition-colors"
                    placeholder="Enter username"
                  />
                </div>
              </div>

              <div>
                <label className="block font-ui text-gold uppercase tracking-wider text-sm mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={20} />
                  <input
                    type="password"
                    required
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    className="w-full bg-black/50 border border-gold/20 rounded-sm py-4 pl-12 pr-4 text-cream focus:border-gold transition-colors"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <GoldButton type="submit" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </GoldButton>
            </form>
          </div>

          <p className="text-center text-gold/40 text-sm mt-6 font-ui">
            Protected access only
          </p>
        </div>
      </div>
    </main>
  );
}
