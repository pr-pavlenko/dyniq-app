import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithDemoUser, TEST_USER } from "@/lib/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(TEST_USER.email);
  const [password, setPassword] = useState(TEST_USER.password);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const user = loginWithDemoUser(email, password);

    if (user) {
      navigate("/dashboard", { replace: true });
      return;
    }

    setError("Invalid email or password");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #07111f 0%, #0b1020 50%, #111827 100%)",
        padding: "24px",
        color: "#0f172a",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: "100%",
          maxWidth: "440px",
          background: "#ffffff",
          borderRadius: "24px",
          padding: "34px",
          boxShadow: "0 24px 80px rgba(0,0,0,0.35)",
        }}
      >
        <div style={{ marginBottom: "24px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "16px",
              background: "#2563eb",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "20px",
              marginBottom: "16px",
            }}
          >
            D
          </div>
          <h1 style={{ margin: 0, fontSize: "30px", lineHeight: 1.1, fontWeight: 800 }}>
            Dyniq App
          </h1>
          <p style={{ color: "#64748b", marginTop: "10px", marginBottom: 0, lineHeight: 1.5 }}>
            AI monitoring dashboard for cleaning devices.
          </p>
        </div>

        <label style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          style={{
            boxSizing: "border-box",
            width: "100%",
            padding: "13px 14px",
            marginBottom: "18px",
            borderRadius: "12px",
            border: "1px solid #cbd5e1",
            outline: "none",
            fontSize: "15px",
          }}
        />

        <label style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          style={{
            boxSizing: "border-box",
            width: "100%",
            padding: "13px 14px",
            marginBottom: "18px",
            borderRadius: "12px",
            border: "1px solid #cbd5e1",
            outline: "none",
            fontSize: "15px",
          }}
        />

        {error && (
          <p
            style={{
              color: "#dc2626",
              background: "#fef2f2",
              border: "1px solid #fecaca",
              padding: "10px 12px",
              borderRadius: "12px",
              marginTop: 0,
            }}
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px 16px",
            borderRadius: "12px",
            border: "none",
            background: "#2563eb",
            color: "#fff",
            fontWeight: 800,
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          Sign in
        </button>

        <p style={{ fontSize: "13px", color: "#64748b", marginTop: "18px", marginBottom: 0 }}>
          Demo: {TEST_USER.email} / {TEST_USER.password}
        </p>
      </form>
    </div>
  );
}
