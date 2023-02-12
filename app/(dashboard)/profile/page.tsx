import { notFound } from "next/navigation";

import { UserNameForm } from "@/components/profile-form";
import { getCurrentUser } from "@/lib/session";

export default async function ProfilePage() {
  const user = await getCurrentUser();

  if (!user) {
    return notFound();
  }

  return (
    <div className="grid place-items-center h-full">
      <UserNameForm user={{ id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email }} />
    </div>
  );
}
