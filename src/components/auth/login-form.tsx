"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginFormValues, loginSchema } from "@/schemas/auth.schema";
import { login } from "@/services/auth.client";
import { Role } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  const handleFormSubmit = async (values: LoginFormValues) => {
    clearErrors("root");

    try {
      const result = await login(values);

      const userRole = result.data.role;

      switch (userRole) {
        case Role.ADMIN:
          router.replace("/admin");
          router.refresh();
          break;

        case Role.LANDLORD:
          router.replace("/landlord");
          router.refresh();
          break;

        case Role.TENANT:
          router.replace("/tenant");
          router.refresh();
          break;
      }
    } catch (error) {
      if (error instanceof Error) {
        setError("root", {
          message: error.message,
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-destructive">{errors.email.message}</p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>

          <Input id="password" type="password" {...register("password")} />
          {errors.password && (
            <p className="text-destructive">{errors.password.message}</p>
          )}
        </div>
        {errors.root && (
          <p className="text-destructive text-center">{errors.root.message}</p>
        )}
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
