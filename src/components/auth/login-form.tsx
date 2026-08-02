"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitEvent } from "react";
import { Button } from "../ui/button";

const LoginForm = () => {
  const handleFormSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: "tenant20@example.com",
        password: "SuperSecret@@1",
      }),
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>

          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
