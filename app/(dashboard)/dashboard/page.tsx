import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { User } from "@prisma/client";
import { redirect } from "next/navigation"
import { cache } from "react";

export const metadata = {
  title: "Dashboard",
}

const getProjectsByUser = cache(async function(userId: User["id"]) {
  return await db.project.findMany({
    where: {
      ownerId: userId,
    },
    select: {
      id: true,
      createdAt: true,
      name: true,
      description: true,
      due: true
    },
    orderBy: {
      updatedAt: "desc",
    },
  })
})

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/signin")
  }

  const projects = await getProjectsByUser(user.id)

  return <div>
    {
      projects.map((project) => (<div key={project.id}>{project.name}</div>))
    }</div>;
}
