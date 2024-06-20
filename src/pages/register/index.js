import RegisterForm from "../../../components/LoginForm/RegisterForm";

export default function Register() {
  return (
    <div className="register_layout">
      <div className="register_window">
        <RegisterForm />
      </div>
      <div className="register_window">
        <h1>Welcome to MIA - My Invititation Assistant</h1>
      </div>
    </div>
  );
}
