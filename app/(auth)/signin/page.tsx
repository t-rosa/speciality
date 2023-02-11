"use client";

import { AuthForm } from "@/components/auth-form";
import { Command } from "lucide-react";

export default function SigninPage() {
  return (
    <div className="grid place-items-center h-screen px-6">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Command className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-sm text-slate-600">
            Enter your email to sign in to your account
          </p>
        </div>
        <AuthForm />
      </div>
    </div>
  );
}
