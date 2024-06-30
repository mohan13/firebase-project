"use client";

import authService from "@/app/firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const menuItems = [
  {
    name: "Home",
    href: "/home",
  },
];

export function Toolbar() {
  const router = useRouter();
  const [user, setUser] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
    authService
      .logout()
      .then(() => setIsLoggedIn(false))
      .catch((error) => console.log("something wrong in logout", error));
  };

  useEffect(() => {
    onAuthStateChanged(authService.auth, (user) => {
      if (user) {
        const email = user.email;
        setUser(email);
        setIsLoggedIn(true);
      } else {
        router.push("/login");
      }
    });
  }, [router, isLoggedIn]);

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span className="font-bold">Firebase Login</span>
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden space-x-2 lg:block">
          {!isLoggedIn ? (
            <Link
              href="/login"
              className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Sign In
            </Link>
          ) : (
            <div>
              <div>{user}</div>
              <div
                onClick={handleLogout}
                className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Log Out
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
