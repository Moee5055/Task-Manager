import { z } from "zod";

export const loginformSchema = z.object({
  email: z.string().email({ message: "Invalid Credentials" }),
});
