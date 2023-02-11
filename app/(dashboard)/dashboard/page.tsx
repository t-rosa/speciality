"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function DashboardPage() {
  return (
    <div>
      Dashboard
      <Button
        onClick={() => {
          signOut({
            callbackUrl: `${window.location.origin}/signin`,
          });
        }}
      >
        signout
      </Button>
    </div>
  );
}
