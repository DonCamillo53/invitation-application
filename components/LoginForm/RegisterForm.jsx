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
      !e.target.password.value ||
      !e.target.firstName.value ||
      !e.target.lastName.value ||
      !e.target.email.value
    ) {
      setError("Please fill out all fields.");
      return;
    }
    let res;
    try {
      res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      });
    } catch (error) {
      setError("Something went wrong. Please try again.");
      return;
    }

    if (res.ok) {
      // redirect(//)
      e.target.reset();
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
