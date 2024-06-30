"use client";
import React from "react";

import { Form } from "../forms/forms";
import authService from "../firebase/auth";
import { useRouter } from "next/navigation";
const RegisterPage = () => {
  const router = useRouter();
  const handleRegister = (data) => {
    authService
      .createAccount(data)
      .then(() => router.push("/login"))
      .catch((error) => console.log(error));
  };

  return <Form type="register" onSubmit={handleRegister} />;
};

export default RegisterPage;
