import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { userNameSchema } from "@/lib/validations/user";
import { getServerSession } from "next-auth/next";

export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const user = session?.user;
    const body = await request.json();

    if (body && user) {
      const payload = userNameSchema.parse(body);

      await db.user.update({
        where: {
          id: user.id,
        },
        data: {
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
        },
      });
    }
    return new Response();
  } catch (error) {
    return Response.error();
  }
}
