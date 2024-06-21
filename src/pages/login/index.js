"use client";
import LoginForm from "../../../components/LoginForm/LoginForm";
import { useState } from "react";

export default function Login() {
  return (
    <div className="register_layout">
      <div className="register_window">
        <LoginForm />
      </div>
      <div className="register_window">
        <h1>Welcome to MIA - My Invititation Assistant</h1>
      </div>
    </div>
  );
}
