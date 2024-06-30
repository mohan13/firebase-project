"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "./input";

export const Form = ({ type, onSubmit }) => {
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userData);
  };

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          {type === "register" ? (
            <>
              <h2 className="text-center text-2xl font-bold leading-tight text-black">
                Sign up to create account
              </h2>
              <p className="mt-2 text-center text-base text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  title=""
                  className="font-medium text-black transition-all duration-200 hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                {type}
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Don&apos;t have an account?
                <Link
                  href="/register"
                  title=""
                  className="font-medium text-black transition-all duration-200 hover:underline"
                >
                  Create a free account
                </Link>
              </p>
            </>
          )}
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              {type === "register" ? (
                <Input
                  className=""
                  label="Full Name"
                  type="text"
                  name="username"
                  onChange={handleChange}
                />
              ) : null}

              <Input
                className=""
                label="email"
                type="email"
                name="email"
                onChange={handleChange}
              />

              <Input
                label="password"
                className=""
                type="password"
                name="password"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="capitalize inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              >
                {type}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
