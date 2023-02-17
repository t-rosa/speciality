"use client";

import { type User } from "@prisma/client";
import { signOut } from "next-auth/react";
import Link from "next/link";

import { UserAvatar } from "@/components/dashboard/user-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreditCard, LogOut, Settings, User as UserIcon } from "lucide-react";
import { Button } from "../ui/button";

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "email" | "image" | "firstName" | "lastName">;
}

export function UserAccountNav({ user }: UserAccountNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full">
          <UserAvatar
            user={{
              firstName: user.firstName,
              lastName: user.lastName,
              image: user.image,
            }}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="profile">
            <DropdownMenuItem className="cursor-pointer">
              <UserIcon className="mr-2 h-4 w-4" />
              <span>Profil</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <button onClick={() => signOut()} className="w-full ">
          <DropdownMenuItem className="cursor-pointer">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Déconnexion</span>
          </DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
