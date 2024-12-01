import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().uuid()
});

export type User = {
  id: string;
};
