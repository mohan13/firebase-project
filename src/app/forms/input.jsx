"use client";

import React, { forwardRef } from "react";

const InputRef = ({ label, type = "text", className = "", ...props }, ref) => {
  return (
    <div>
      {label && (
        <label className="text-base font-medium text-gray-900">{label}</label>
      )}
      <div className="mt-2">
        <input
          ref={ref}
          {...props}
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type={type}
        />
      </div>
    </div>
  );
};

export const Input = forwardRef(InputRef);
