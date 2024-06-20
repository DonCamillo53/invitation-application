import styles from "./LoginForm.module.css";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <div className="container_center">
      <div className="form_headline">
        <h2>Register</h2>
      </div>
      <form className="centered-form">
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

        <div className="error_message_banner">Error Message</div>
        <div>
          <Link href={"/login"}>
            <span>Already have an account? </span>
            <span className={styles.underline_link}>Login</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
