import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { FaGoogle } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import { auth, signIn } from "@/auth";

const Login = async () => {
  const session = await auth();

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="main-div p-5 w-[400px]">
        <h1 className="flex items-center justify-center font-bold text-3xl">
          Login
        </h1>

        {/* Outer form for username/password login */}
        <form action="" className="form-div">
          <InputWithLabel
            label="Username"
            id="username_id"
            type="text"
            placeholder="Username"
          />
          <InputWithLabel
            label="Password"
            id="password_id"
            type="password"
            placeholder="Password"
          />
          <Button className="w-full bg-black text-white" type="submit">
            Login
          </Button>
        </form>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            or
          </span>
        </div>

        {/* Separate Google sign-in button */}
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <Button className="w-full outline outline-1" variant="secondary">
            <FaGoogle className="mr-2" />
            Continue with Google
          </Button>
        </form>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link href="/auth/register" className="text-black">
            Register here.
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
