import { PropsWithChildren } from "react";

import { Header } from "@/components/ui/header";

export default async function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header title="Mon Compte" />
      <main className="col-[1/2] row-[2/3]">{children}</main>
    </>
  );
}
