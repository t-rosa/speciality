import type { PropsWithChildren } from "react";

import { NewProjectDialog } from "@/components/dashboard/new-project-dialog";
import { Button } from "@/components/ui/button";
import { Check, Home, List, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function DashboardRootLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid h-screen grid-rows-[5rem_1fr_4rem]">
      {children}
      <footer className="flex items-center justify-between bg-zinc-800 px-3 text-white">
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
        <div className="grid h-16 w-16 -translate-y-1/2 place-items-center rounded-full bg-white">
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
