import * as z from "zod";

export const userNameSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
});
