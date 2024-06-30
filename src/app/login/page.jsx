"use client";
import React from "react";
import authService from "../firebase/auth";
import { Form } from "../forms/forms";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const handleLogin = (data) => {
    authService.login(data).then(() => router.push("/home"));
  };

  return <Form type="login" onSubmit={handleLogin} />;
};

export default LoginPage;
