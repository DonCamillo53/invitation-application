"use client";

import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import styles from "./LoginForm.module.css";
import Link from "next/link";
import { useState } from "react";

export default function RegisterForm() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (res.error) {
        setError("invalid credentials");
      } else {
        router.replace("/dashboard");
      }
    } catch (error) {
      setError("An unexpected error occurred.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
    setError("");
  };

  return (
    <div className="container_center">
      <div className="form_headline">
        <h2>Login</h2>
      </div>
      <form className="centered-form" onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="email">E-Mail</label>
          <input
            name="email"
            type="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="form_group">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>

        <button className="primary_button" type="submit">
          Login
        </button>
        {error && <div className="error_message_banner">{error}</div>}
        <div className={styles.spanInfo}>
          <Link href="/register">
            <span>Don&apos;t have an account yet? </span>
            <span className={styles.underline_link}>Register</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
