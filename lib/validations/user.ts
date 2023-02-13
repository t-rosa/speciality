import * as z from "zod";

export const userNameSchema = z.object({
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  email: z.string().email(),
});
