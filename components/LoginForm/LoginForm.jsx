import styles from "./LoginForm.module.css";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className={styles.container}>
      <div className="form_headline">
        <h2>Login</h2>
      </div>
      <form className="centered-form">
        <div className="form_group">
          <label htmlFor="email">E-Mail</label>
          <input name="email" type="email" />
        </div>
        <div className="form_group">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" />
        </div>

        <button className="primary_button" type="submit">
          Login
        </button>

        <div className="error_message_banner">Error Message</div>
        <div>
          <Link href={"/register"}>
            <span>Don't have an account? </span>
            <span className={styles.underline_link}>Register</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
