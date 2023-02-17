import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";

import { getCurrentUser } from "@/lib/session";
import { UserAccountNav } from "@/components/dashboard/user-account-nav";

export default async function DashboardLayout({ children }: PropsWithChildren) {
  const user = await getCurrentUser();

  if (!user) {
    return notFound();
  }

  return (
    <>
      <header className="col-[1/2] row-[1/2] border-b flex justify-between items-center px-3">
        <div>
          <div>
            {user.firstName} {user.lastName}
          </div>
          <div className="text-sm text-gray-500">Mardi 7 Janvier</div>
        </div>
        <UserAccountNav
          user={{
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            image: user.image,
          }}
        />
      </header>
      <main className="row-[2/3] col-[1/2]">{children}</main>
    </>
  );
}
