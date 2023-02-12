import type { PropsWithChildren } from "react";

import { Check, Home, List, MessageCircle } from "lucide-react";
import Link from "next/link";

import { NewProjectDialog } from "@/components/dashboard/new-project-dialog";
import { Button } from "@/components/ui/button";

export default function DashboardRootLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-rows-[5rem_1fr_4rem] h-screen">
      {children}
      <footer className="bg-zinc-800 text-white flex items-center px-3 justify-between">
        <Link href="/dashboard">
          <Button>
            <Home />
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button>
            <MessageCircle />
          </Button>
        </Link>
        <div className="-translate-y-1/2 w-16 h-16 rounded-full bg-white grid place-items-center">
          <NewProjectDialog />
        </div>
        <Link href="/dashboard">
          <Button>
            <List />
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button>
            <Check />
          </Button>
        </Link>
      </footer>
    </div>
  );
}
