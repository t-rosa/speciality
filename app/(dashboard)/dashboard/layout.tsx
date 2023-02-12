import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import Link from "next/link";

import { UserAvatar } from "@/components/dashboard/user-avatar";
import { getCurrentUser } from "@/lib/session";

export default async function DashboardLayout({ children }: PropsWithChildren) {
  const user = await getCurrentUser();

  if (!user) {
    return notFound();
  }

  return (
    <>
      <header className="col-[1/2] row-[1/2] border-b flex justify-between items-center px-3">
        <div>
          <div>Aujourd&apos;hui</div>
          <div className="text-sm text-gray-500">Mardi 7 Janvier</div>
        </div>
        <Link href="profile">
          <UserAvatar
            user={{
              name: user.name,
              image: user.image,
            }}
          />
        </Link>
      </header>
      <main className="row-[2/3] col-[1/2]">{children}</main>
    </>
  );
}
