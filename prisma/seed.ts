import { db } from "@/lib/db";
import { TaskStatus } from "@prisma/client";

const getRandomTaskStatus = () => {
  const statuses = [
    TaskStatus.TODO,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

async function main() {
  const user = await db.user.upsert({
    where: { email: "user@email.com" },
    update: {},
    create: {
      email: "user@email.com",
      firstName: "User",
      lastName: "Person",
      projects: {
        create: new Array(5).fill(1).map((_, i) => ({
          name: `Project ${i}`,
          due: new Date(2024, 11, 25),
        })),
      },
    },
    include: {
      projects: true,
    },
  });

  const tasks = await Promise.all(
    user.projects.map((project) =>
      db.task.createMany({
        data: new Array(10).fill(1).map((_, i) => {
          return {
            name: `Task ${i}`,
            ownerId: user.id,
            projectId: project.id,
            description: `Everything that describes Task ${i}`,
            status: getRandomTaskStatus(),
          };
        }),
      })
    )
  );

  console.log({ user, tasks });
}
main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });