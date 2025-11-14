"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { signUp } from "@/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must be less than 50 characters"),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const router = useRouter();
  const onSubmit = async (data: RegisterFormValues) => {
    try {
      await signUp.email(
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          onRequest: () => {
            setIsSubmitting(true);
          },
          onResponse: () => {
            setIsSubmitting(false);
          },
          onError: (ctx) => {
            toast.error(ctx.error.message);
          },
          onSuccess: () => {
            toast.success("Registro com sucesso!");
            router.push("/login");
          },
        },
      );
      console.log(data);
    } catch (error) {
      toast.error("Algo deu errado!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full space-y-5"
    >
      <div className="space-y-2">
        <Label htmlFor="name" className="montserrat-regular-14 text-slate-200">
          Nome
        </Label>
        <Input
          type="text"
          id="name"
          {...register("name")}
          className="montserrat-regular-14 bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20"
          placeholder="Seu nome"
        />
        {errors.name && (
          <p className="montserrat-regular-14 text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="montserrat-regular-14 text-slate-200">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          {...register("email")}
          className="montserrat-regular-14 bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20"
          placeholder="seu@email.com"
        />
        {errors.email && (
          <p className="montserrat-regular-14 text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="montserrat-regular-14 text-slate-200">
          Senha
        </Label>
        <Input
          type="password"
          id="password"
          {...register("password")}
          className="montserrat-regular-14 bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20"
          placeholder="••••••••"
        />
        {errors.password && (
          <p className="montserrat-regular-14 text-red-400">{errors.password.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white montserrat-semibold-18 py-2.5 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Registrando..." : "Registrar"}
      </Button>
    </form>
  );
}
