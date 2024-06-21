import styles from "./LoginForm.module.css";
import Link from "next/link";
import { useState } from "react";

export default function RegisterForm() {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newData = Object.fromEntries(formData);
    console.log("data:", newData);

    if (
      !newData.password ||
      !newData.firstName ||
      !newData.lastName ||
      !newData.email
    ) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      const Userres = await fetch("/api/userExists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newData.email }),
      });
      const { user } = await Userres.json();
      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      });

      if (res.ok) {
        // redirect to login or another page
        e.target.reset();
        setError(""); // Clear any existing errors
        // window.location.href = "/login"; // Uncomment to redirect
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container_center">
      <div className="form_headline">
        <h2>Register</h2>
      </div>
      <form onSubmit={handleSubmit} className="centered-form">
        <div className="form_group">
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" type="text" />
        </div>
        <div className="form_group">
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" type="text" />
        </div>
        <div className="form_group">
          <label htmlFor="email">E-Mail</label>
          <input name="email" type="email" />
        </div>
        <div className="form_group">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" />
        </div>

        <button className="primary_button" type="submit">
          Create Account
        </button>
        {error && <div className="error_message_banner">{error}</div>}
        <div className={styles.spanInfo}>
          <Link href={"/login"}>
            <span>Already have an account? </span>
            <span className={styles.underline_link}>Login</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
