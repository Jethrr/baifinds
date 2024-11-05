import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { FaGoogle } from "react-icons/fa";
import React from "react";
import Link from "next/link";

const Register = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="main-div p-5 w-[400px] ">
        <h1 className="flex items-center justify-center font-bold text-3xl">
          Sign up
        </h1>
        <form action="" className="form-div">
          <InputWithLabel
            label="Username"
            id="username_id"
            type="text"
            placeholder="Username"
          />
          <InputWithLabel
            label="Email"
            id="email_id"
            type="email"
            placeholder="Email"
          />
          <InputWithLabel
            label="Password"
            id="password_id"
            type="password"
            placeholder="Password"
          />
          <Button className="w-full bg-black text-white" type="submit">
            Register
          </Button>

          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
              or
            </span>
          </div>

          <Button className="w-full outline outline-1" variant="secondary">
            <FaGoogle className="mr-2" />
            Continue with Google
          </Button>

          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-black">
              Login
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Register;
