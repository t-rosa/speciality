"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { userNameSchema } from "@/lib/validations/user";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface UserNameFormProps extends React.HTMLAttributes<HTMLFormElement> {
  user: Pick<User, "id" | "firstName" | "lastName" | "email">;
}

type FormData = z.infer<typeof userNameSchema>;

export function UserNameForm({ user, className, ...props }: UserNameFormProps) {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userNameSchema),
    defaultValues: {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });
  const [isSaving, setIsSaving] = React.useState<boolean>(false);
  const { toast } = useToast();

  async function onSubmit(data: FormData) {
    setIsSaving(true);

    const response = await fetch(`/api/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
      }),
    });

    setIsSaving(false);

    if (!response?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Your name was not updated. Please try again.",
      });
    }

    toast({
      description: "Your profile has been updated.",
    });

    router.refresh();
  }

  return (
    <form
      className={cn("grid gap-6", className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <div className="grid gap-1">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          size={32}
          defaultValue={user.email?.toString()}
          {...register("email")}
        />
        {errors?.email && (
          <p className="px-1 text-xs text-red-600">{errors.email.message}</p>
        )}
      </div>
      <div className="grid gap-1">
        <Label htmlFor="firstName">Prénom</Label>
        <Input id="firstName" size={32} {...register("firstName")} />
        {errors?.firstName && (
          <p className="px-1 text-xs text-red-600">
            {errors.firstName.message}
          </p>
        )}
      </div>
      <div className="grid gap-1">
        <Label htmlFor="lastName">Nom de famille</Label>
        <Input id="lastName" size={32} {...register("lastName")} />
        {errors?.lastName && (
          <p className="px-1 text-xs text-red-600">{errors.lastName.message}</p>
        )}
      </div>
      <Button type="submit" disabled={isSaving}>
        {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        <span>Save</span>
      </Button>
    </form>
  );
}
